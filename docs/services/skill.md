# Skill Server - Business-Logic-Server 
Business-Logic-Server, the LinTO workflow manager is based on the framework [Node-RED](https://nodered.org). It's a programming tool for wiring together different piece of node. Each node do their action and are customize allowing LinTO to be flexible.

## Install
To install BLS service you will need to download the source code :
```shell
git clone https://github.com/linto-ai/Business-Logic-Server.git
cd Business-Logic-Server
```

## Environment configuration
You can manage your environment, for this you will need to create an **.env** file. A template is provided allowing a default setup. Adapt it to your needs.
```shell
cp .envdefault .env
nano .env
```

## Run Local
Make sure to install  dependency : `npm install`
<br>Then start BLS with `npm run start` 
<br>Debug mode : `DEBUG=* npm run start`

You will be able to reach the interface on : [localhost:9000](http://localhost:9000)

## Docker 
Make sur to match the **.env** file with the **docker-compose.yml**

First the image need to be build : `docker-compose build`
<br>Then run the docker `docker-compose up`
<br>Then you can access it on [localhost:9000](http://localhost:9000)