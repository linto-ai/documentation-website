# Client <--> Server MQTT communication protocols.

MQTT is the primary mean of communication between LinTO clients and the platform. Clients publish requests and the platform dictates behaviors using dedicated topics.

![client-server communication](../_media/client/client-server.png).

## Broker connexion.
For the client to connect to the broker it needs the MQTT connexion informations.

Those informations can be obtain two different ways:
* The client is configured to connect to the broker directly.
* The client fetches these informations using [authentication protocol](client/http_protocols).

On both case the client comes to have the following informations:
* MQTT broker `ip` and `port`.
* MQTT broker `login` and `password`.
* A `session_id` or a `serial_number`. A session_id is generated for non-static client during the authentication step. The serial number is a unique id attached to a static device and registered on the platform.
* An applicative `scope`.

The non-static clients have an additionnal security information : `auth_token`. 

With those infomations the client is able to connect to the MQTT broker and subscribe to the dedicated topics.

There is two topics attached to a client: 
* An `egress topic` where the client send requests and informations. The topic is  `scope`/fromlinto/`session_id|serial_number`.
* And `ingress topic` on which the server can send responses and behaviors: `scope`/tolinto/`session_id|serial_number`.

## Client --> Server communication.
Client --> server communication are the messages coming from the device addressed to the platform using the `egress topic`.
### Status
Status is a message that give the platform a connexion state.

**Topic**: `egressTopic`/status

**Retain**: false

**Content**:
```json
{
    "connexion" : "online",
    "on" : "datetime",
    "config" : {
        "network" : [
            {
                "mac_address" : "",
                "gateway_ip" : "",
                "type" : "wifi|eth",
                "ip_address" : "",
                "name" : ""
            }
        ],
        "firmware" : "FIRMWARE_VERSION"
    },
}
```

The offline status is published using LWT (Last Will Testament) on the same topic to ensure that a disconnecting device always update its status.

```json
{
    "connexion" : "offline",
    "on" : "datetime",
    "config" : {
        "network" : [
            {
                "mac_address" : "",
                "gateway_ip" : "",
                "type" : "wifi|eth",
                "ip_address" : "",
                "name" : ""
            }
        ],
        "firmware" : "FIRMWARE_VERSION"
}
```

### Request
Request is the main message sent by the client. It consist in sending an audio voice request to the server.

**Topic**: `egressTopic`/nlp/file/`id`

The id field is a unique id associated with the audio file.

**Retain**: false

**content**: 
```json
{
    "audio" : "",                        // the audiofile base64-encoded
    "conversationData" : {},             // Conversation data, empty for client initiated request.
    "auth_token" : ""                    // Optional, authentication token for any application
}
```


## Server --> Client communication.

Server to client messages provide request answers and communicate behaviors for the client device.
Available behaviors depends on the client device. As for now, there are two available devices: LinTO Maker on RPi and LinTO Android.

| Name | Description | Available on |
|------|-------------|--------------|
| [Behavior](#Behavior)         | Request response                  |![](../_media/client/rpi.png)![](../_media/client/android.png)|
| [End Volume](#endvolume)      | Remotely set the default volume   |![](../_media/client/rpi.png)|
| [Manage Meeting](#meeting)    | Manage meeting                    |![](../_media/client/rpi.png)|
| [Mute](#mute)                 | Remotely mute the device          |![](../_media/client/rpi.png)|
| [Ping](#ping)                 | Ping the device                   |![](../_media/client/rpi.png)![](../_media/client/android.png)|
| [Reverse SSH](#ssh)           | Start reverse SSH                 |![](../_media/client/rpi.png)|
| [Say](#say)                   | Tell the device to say a sentence |![](../_media/client/rpi.png)![](../_media/client/android.png)|
| [ShellExec](#shellexec)       | Execute a shell command           |![](../_media/client/rpi.png)|
| [TTS language](#ttslanguage)  | Set the embedded tts language     |![](../_media/client/rpi.png)|
| [Unmute](#unmute)             | Remotely unmute the device        |![](../_media/client/rpi.png)|
| [Volume](#volume)             | Remotely set the volume           |![](../_media/client/rpi.png)|

<h3 name="Behavior">Behavior</h2>
Server answer to a client request. The server specify the device behavior. It may be a single response (say or/and display) or the server might need additionnal information (ask).
For the `ask` behavior, conversation data are attached to the request and shall be returned with the following device answer.

**Available on**: ![](../_media/client/rpi.png) ![](../_media/client/android.png)

**Topic**: `ingressTopic`/nlp/file

**Retain**: false

**content**: 
```json
{
    "behavior" : {
        "say" : {
            "phonetic" : "phonetic text",   // Text formated for a TTS engine.
            "text" : "text"                 // Base text.
        },                  
        // OR
        "ask" :  {                          // Asking information and expecting a response.
            "phonetic" : "phonetic text",   // Text formated for a TTS engine.
            "text" : "text"                 // Base text.
        },
        // OR / AND 
        "display" : {
            "type" : "URL",         // DOCSTRING or URL
            "content" : "string"    // HTML string or URL
        },
        "audio" : "rawFile",                // TTS audio file
        "conversationData" : {},            // Conversation data attached to the current conversation
        // If authentification Error
        "error" : {
            "message" : "text",
            "code": 400
        }
    },            
}
```
***

<h3 name="endvolume">End Volume</h2>
Remotely set the device default volume. 

**Available on**:  ![](../_media/client/rpi.png)

**Topic**: `ingressTopic`/endvolume

**Retain**: false

**content**: 
```json
{
    "value" : [0-100]
}
```
***

<h3 name="meeting">Manage Meeting</h2>
Manage the meeting mode on the device. 
Expect a command name as parameter.

**Available on**: ![](../_media/client/rpi.png)

**Topic**: `ingressTopic`/managemeeting

**Retain**: false

**content**: 
```json
{
    "command" : "[ startlocalrecording | stoplocalrecording ]",
    "sessionname" : "session name"
}
```
**Response Topic**: `egressTopic`/muteack

**Response Content**:
```json
{}
``` 
***

<h3 name="mute">Mute</h2>
Remote mute the device. Expect an acknowledgement. 

**Available on**: ![](../_media/client/rpi.png)

**Topic**: `ingressTopic`/mute

**Retain**: false

**content**: 
```json
{}
```
**Response Topic**: `egressTopic`/muteack

**Response Content**:
```json
{}
``` 
***

<h3 name="ping">Ping</h2>

**Available on**: ![](../_media/client/rpi.png) ![](../_media/client/android.png)

**Topic**: `ingressTopic`/ping

**Retain**: 

**content**: 
```json
{}
```
**Response Topic**: `egressTopic`/pong

**Response Content**:
```json
{}
``` 
***

<h3 name="reversessh">ReverseSSH</h2>
Open a remote-SSH to remotly access the device. 

**Available on**: ![](../_media/client/rpi.png)

**Topic**: `ingressTopic`/startreversessh

**Retain**: false

**content**: 
```json
{
    "remoteHost" : "remote-host",
    "remoteSSHPort" : "remote-port",
    "mySSHPort" : "local port",
    "remoteUser" : "remoteuser",
    "privateKey": "private Key"
}
```
**Response Topic**: `egressTopic`/startreversessh

**Response Content**:
```json
{
    "reversesshstatus" : "[ok | <error message>]"
}
``` 
***

<h3 name="say">Say</h2>
The server ask the device to say a given text. It is an alternate way to execute the behavior say on Raspberry.

**Available on**: ![](../_media/client/rpi.png)![](../_media/client/android.png) *Requires a TTS engine.

**Topic**: `ingressTopic`/say

**Retain**: false

**content**: 
```json
{
    "transaction_id" : "transaction_id", // Transation ID
    "value" : "Hello, I'm LinTO ! "      // Text to be spoken
}
```
***

<h3 name="shellexec">Shell Exec</h2>
Remotly execute a shell command on the device.

**Available on**: ![](../_media/client/rpi.png)

**Topic**: `ingressTopic`/shellexec

**Retain**: 

**content**: 
```json
{
    "cmd" : "command to be executed"
}
```
**Response Topic**: `egressTopic`/shellexec

**Response Content**:
```json
{
    "stdout" : "<command output>",
    "stderr" : "<command error output>",
            // OR
    "status" : "<error>
}
``` 
***

<h3 name="ttslanguage">TTS Language</h2>
Remotly change the device embeded Text-To-Speech language.
Language must be supported by the embedded TTS engine.

**Available on**: ![](../_media/client/rpi.png)*Requires a TTS engine.

**Topic**: `ingressTopic`/tts_lang

**Retain**: false

**content**: 
```json
{
    "value" : "language"
}
```
***

<h3 name="unmute">Unmute</h2>
Remote unmute the device. Expect an acknowledgement.

**Available on**: ![](../_media/client/rpi.png)

**Topic**: `ingressTopic`/unmute

**Retain**: false

**content**: 
```json
{}
```
**Response Topic**: `egressTopic`/unmuteack

**Response Content**:
```json
{}
``` 
***

<h3 name="volume">Volume</h2>
Remotely set the device volume. 

**Available on**:  ![](../_media/client/rpi.png)

**Topic**: `ingressTopic`/volume

**Retain**: 

**content**: 
```json
{
    "value" : [0-100]
}
```
