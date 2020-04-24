
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
