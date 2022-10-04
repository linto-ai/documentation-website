---
sidebar_position: 1
---
# HTTP authentication

LinTO clients communicate with different server API in order to obtain authentication and maintain a secure connexion with the services.

HTTP communication protocols (client-wise) focus on establishing a secure connexion between the client and the LinTO platform.

There are 2 categories of clients:
- Clients configured to establish a direct MQTT connexion to the plateform (Raspberry or Android clients **using serial number mode**)
- Clients that request a connexion at every launch (Web or Android clients)

On the former, the client is configured with all informations needed to direcly subscribe and publish on the MQTT broker.

On the latest, the authentication is done with an additionnal first step that consist in requesting the connexion information to the authentication API.

## Authentication protocols
The goal of the authentication steps are to provide the client with the following informations:

* MQTT broker IP and port.
* MQTT ID and password.
* A session_ID.
* An applicative scope.
* A authentication token and a refresh token.

:::note Ephemeral MQTT credentials
After authentication, the LinTO server platform automatically sends ephemeral MQTT credentials to the HTTP authenticating client. When this client goes offline, the specific MQTT topics and credentials where this client was jailed into are destroyed.
::: 

![client-server communication](/docs/client/client-server.png)

**Prerequisites:**
* The authentication server url: `server_url`.
* Credentials: `username` and `password`. 

### 1- Request authentication routes.
The first step ask the server about the authentication methodologies.

**type**: GET

**target API**: `server_url`/overwatch/auths

**request format**: 
```json
// Request header
{
    "Content-type" : "application/json",
    "Accept" : "application/json"
}
```

**expected response**: 
```json
// Code 200
[
    {"basePath" : "method_route" , "type" : "Method Name"}, //Authentication route
    {"basePath" : "method_route2" , "type" : "Method2 Name"},
    ...
]
```
`basePath` is the path to used to access the authentication API. 


### 2- Request Authentication.
Once the authentication method is chosen, the client can request an authentication and fetch the connexion informations.

**type**: POST

**target API**: `server_url`/overwatch/`basePath`/`client-type`/login

`client-type` is the client platform, (e.g. android).

**request format**: 
```json
// Request header
{
    "Content-type" : "application/json",
    "Accept" : "application/json",
}
// Request body

{
    "email" : "username",
    "password" : "password"
}

```
If the credentials are accepted, the authentification server returns the information needed to establish a connexion between the client and the server using an MQTT broker.

**expected response**: 
```json
// Code response 202
// Body
{
  "user": {                                     // Authentication informations
    "auth_token": "token",                      // Authentication token
    "refresh_token": "refreshToken",            // Refresh token
    "expiration_date": 1597498001,              // Token expiration date
    "session_id": "session_id"                  // Session id used to identify the device
  },
  "mqtt": {                                     // MQTT information
    "mqtt_host": "my-mqtt-test",                // Broker address
    "mqtt_port": "1883",                        // Broker port
    "mqtt_use_login": "true",                   // Is the broker using loggin
    "mqtt_password": "password",                // Broker password
    "mqtt_login": "user"                        // Broker login
  }
}
```

### 3- Request applicative scopes.
The last remaining step is to ask the server about the applicative contexts available for this user.

**type**: GET

**target API**: `server_url`/overwatch/`basePath`/scopes

**request format**: 
```json
// Request header
{
    "Content-type" : "application/json",
    "Accept" : "application/json",
    "Authorization" : "[client-type] [token]"
}

```

**expected response**: 
```json
// Code response 200
// Body
[
    {
        "topic" : "topic",                          // Topic specific to the context
        "name" : "Context name",                    // Context name for user
        "description" : "Context description"       // Context description for user
    },
    {...}
]

```
Server might return multiple scopes for the user to use.

At the end of that step, the client has every information needed to establish a connexion and be fully functionnal.

### 4- Logout
When the client disconnect, it can call the logout API to revoke its token.

**type**: GET

**target API**: `server_url`/overwatch/`basePath`/`platform`/logout

**request format**: 
```json
// Request header
{
    "Authorization" : "[client-type] [token]"
}

```

**expected response**: 
```json
// Code response 200
// Body
OK
```

Once the client has fetched the connexion information it can connect to the [MQTT communication broker](client/mqtt_protocols).