
# Skill deployment
## Prerequisites
* NodeJs installed `sudo apt-get install nodejs`
* npm shall be installed `sudo apt-get install npm`
* Installed and a running version of [Linto-Platform-Business-Logic-Server](https://github.com/linto-ai/linto-platform-business-logic-server) 

## Deploy a new skill
For deploying a new LinTO skill, first we assume that you have a fully functional skill

### Local Node
You will need to install the node dependencies of your skill

```sh
  cd <path>/<to>/<your>/<skill-to-install>/
  npm i <path>/<to>/<your>/<skill-to-install>
```
____
**Local BLS** :
Then make sure to stop the BLS, and follow the step bellow 

```sh
  cd <path>/<to>/linto-platform-business-logic-server/
  npm i <path>/<to>/<your>/<skill-to-install>/ -s
  node index.js
```

**Docker BLS** : <br>
Make sure to stop the docker, then the process is same has the previous one, the only difference is that installation has to be done on the docker mounted volume.
<br>**Note** : The folder path can be found on the docker-compose.yml
```sh
  cd <path>/<to>/linto-platform-business-logic-server>/<docker-volume>/
  npm i <path>/<to>/<your>/<skill-to-install>/ -s
  docker-compose up
```

### Published Node
If the skill has been published on npm with the name `node-red-xxx` then it will be possible to install the node with the node-red manager.
<br>First step, is to go on the `manage palette` reachable by the side-menu :
<p align="center">
  <img src="../_media/skills/depguide/manage_palette.png" alt="manage_palette"/>
</p>


Then go on the tabs `install` and search for the node to install by his name.
<br>**Note**: If the module is not find but has been recently published, he can take some time before being visible
<p align="center">
  <img src="../_media/skills/depguide/install_module.png" alt="install_module"/>
</p>
Finally you should be able to find and use your node in the node-red palette.


## Custom catalogue
Catalogue are used to install unpublish new skill. 
By default, the catalogue will be one we provide, but they can be customized.

Below are the API we provide for the generation of those catalogue

### Generate from json
Generate the node-red catalogue from a json.

**URL** : `/:LINTO_STACK_BLS_BASE_PATH/red/catalogue/raw`

**Method** : `POST`

**Data header constraints**

```
Content-Type : application/json
```

**Data body constraints**

```json
{
  "name": "custom-catalogue",
  "updated_at": "2020-08-26T08:31:22.245Z",
  "modules": [
    {
      "description": "Linto skill that gives information about welcoming (greeting, goodbye, how are you)",
      "version": "0.1.3-2",
      "keywords": [
        "linto",
        "node-red",
        "skill",
        "greeting"
      ],
      "types": [
        "node-red"
      ],
      "updated_at": "2020-08-26T08:31:09.187Z",
      "id": "@linto-ai/node-red-linto-welcome",
      "url": "http://verdaccio.linto.ai/-/web/detail/@linto-ai/node-red-linto-welcome",
      "pkg_url": "http://verdaccio.linto.ai/@linto-ai/node-red-linto-welcome/-/@linto-ai/node-red-linto-welcome-0.1.3-2.tgz"
    },
    {...}
  ]
}
```

#### Success Response

**Code** : `200 OK`

**Body Content**
```json
{
  "msg": "Catalogue generated : custom-catalogue",
  "name": "custom-catalogue",
  "updated_at": "2020-08-26T08:31:22.245Z",
  "modules": [
    {
      "description": "Linto skill that gives information about welcoming (greeting, goodbye, how are you)",
      "version": "0.1.3-2",
      "keywords": [
        "linto",
        "node-red",
        "skill",
        "greeting"
      ],
      "types": [
        "node-red"
      ],
      "updated_at": "2020-08-26T08:31:09.187Z",
      "id": "@linto-ai/node-red-linto-welcome",
      "url": "http://verdaccio.linto.ai/-/web/detail/@linto-ai/node-red-linto-welcome",
      "pkg_url": "http://verdaccio.linto.ai/@linto-ai/node-red-linto-welcome/-/@linto-ai/node-red-linto-welcome-0.1.3-2.tgz"
    },
    {...}
  ]
}
```

### Generate from host
Generate the node-red catalogue based on a private npm registry.

**URL** : `/:LINTO_STACK_BLS_BASE_PATH/red/catalogue/:host_type`
Host_Type supported : `verdaccio`

**Method** : `POST`

**Data header constraints**

```
Content-Type : application/json
```

**Data body constraints**

```json
{
	"host": "host_url"
}
```

#### Success Response

**Code** : `200 OK`

**Body Content**
```json
{
  "msg": "Registry generated for : https://host_url",
  "name": "catalogue",
  "updated_at": "2020-08-26T08:31:22.245Z",
  "modules": [
    {
      "description": "Linto skill that gives information about welcoming (greeting, goodbye, how are you)",
      "version": "0.1.3-2",
      "keywords": [
        "linto",
        "node-red",
        "skill",
        "greeting"
      ],
      "types": [
        "node-red"
      ],
      "updated_at": "2020-08-26T08:31:09.187Z",
      "id": "@linto-ai/node-red-linto-welcome",
      "url": "http://verdaccio.linto.ai/-/web/detail/@linto-ai/node-red-linto-welcome",
      "pkg_url": "http://verdaccio.linto.ai/@linto-ai/node-red-linto-welcome/-/@linto-ai/node-red-linto-welcome-0.1.3-2.tgz"
    },
    {...}
  ]
}
```

### Get Catalogue
Get the node-red catalogue currently generated.

**URL** : `/:LINTO_STACK_BLS_BASE_PATH/red/catalogue`

**Method** : `GET`

#### Success Response

**Code** : `200 OK`

**Body Content**
```json
{
  "msg": "Registry generated for : https://host_url",
  "name": "catalogue",
  "updated_at": "2020-08-26T08:31:22.245Z",
  "modules": [
    {
      "description": "Linto skill that gives information about welcoming (greeting, goodbye, how are you)",
      "version": "0.1.3-2",
      "keywords": [
        "linto",
        "node-red",
        "skill",
        "greeting"
      ],
      "types": [
        "node-red"
      ],
      "updated_at": "2020-08-26T08:31:09.187Z",
      "id": "@linto-ai/node-red-linto-welcome",
      "url": "http://verdaccio.linto.ai/-/web/detail/@linto-ai/node-red-linto-welcome",
      "pkg_url": "http://verdaccio.linto.ai/@linto-ai/node-red-linto-welcome/-/@linto-ai/node-red-linto-welcome-0.1.3-2.tgz"
    },
    {...}
  ]
}
```