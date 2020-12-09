
# How to install my linto-skill

We gonna explain how to install a linto-skill based on the template skill that we provide.

## Prerequistes

The **Business-Logic-Server** is require, also called **BLS**. This is the workflow manager, based on the framework Node-RED. It’s a programming tool for wiring different node / skill. Each skill have their own action allowing together to simulate a linto process.

```sh
git clone https://github.com/linto-ai/linto-platform-business-logic-server
cd linto-platform-business-logic-server
npm install
```

And a **linto-skill**, that's the main point of these page. Has these demo we gonna use the skill template.

```sh
git clone https://github.com/linto-ai/linto-skills-template skills/linto-skills-template
cd skills/linto-skills-template
npm install
```

## Local install
How to install my skill in my BLS ?
You just need to install the skill like any npm module

```sh
cd path-to-/linto-platform-business-logic-server/
npm install -s path-to-/skills/linto-skills-template/

// Start the BLS 
npm start // or 'node index.js'
```
## Docker / Stack install
How to install my skill in Docker ?

Easy, just use a volume. That volume need to map your local skill with the docker folder skill. _(default skill folder location `/root/.node-red/node_modules/` )_

That should look like that :
```yml
    volumes: # Make sure that the left path is pointing you'r folder skills
      - path-to/skills-folder/:/root/.node-red/node_modules/
```

Then run the docker with `docker-compose up`

## NPM Registry
You can also publish a skill in a registry to be able to install it like a node module

```sh
# Publish skill
cd path-to-skills/linto-skills-template
npm publish
```

```sh
# Install skill into BLS
npm install -s linto-module-name
```

### Default registry
The default registry is the `registry.npmjs.com`. I would not recommend these part until the skill is ready to be release.

### Private registry
A private repository can be used : `npm set registry my.repository.url`.


## Install by BLS API
You can install a skill with node-red catalogue feature. It allow to install a skill without restarting the BLS.

**Create the catalogue**

First step is to add the skill in the BLS catalogue with the following API. It's important to give the information about the skill.

Here the request :

```md
Request method : POST
URL : http(s)://LINTO_STACK_DOMAIN/red/catalogue/raw
Header : Content-Type : application/json
Body : 
{
  "name": "custom-catalogue",
  "updated_at": "2020-12-12T09:50:22.245Z",
  "modules": [
    {
      "id": "@linto-ai/node-red-linto-weather",
			"url": "http://repository.linto.ai/-/web/detail/@linto-ai/node-red-linto-weather"
    },
    {
      "id": "@linto-ai/node-red-linto-welcome",
    "pkg_url": "http://private.repository.linto.ai/@linto-ai/node-red-linto-welcome/-/@linto-ai/node-red-linto-welcome-0.1.3-2.tgz"
    },
    {...}
  ]
}

```


Here two example of the modules format, one with the repository url and the other one with a file .tgz

**By url**
```json
    {
      "id": "@linto-ai/node-red-linto-weather",
			"url": "http://private.repository.linto.ai/-/web/detail/@linto-ai/node-red-linto-weather"
    }
```

**By tgz file**
```json
    {
      "id": "@linto-ai/node-red-linto-welcome",
      "pkg_url": "http://private.repository.linto.ai/@linto-ai/node-red-linto-welcome/-/@linto-ai/node-red-linto-welcome-0.1.3-2.tgz"
    }
```

### Private repository
You can use the catalogue with a private repository, but a specific configuration are needed depending.

**Local :** Don't forget to set the private registry before starting BLS `npm set registry private.repository.linto.ai`

**Docker :**
In case of the docker, the registry need to be set before launch, here the step :

Setup the environment variable in `.env`
```env
LINTO_STACK_NPM_CUSTOM_REGISTRY=http://private.repository.linto.ai
```

Enable to build the docker with the private registry. Use the command : `--set-custom-registry-npmrc` in the docker-compose
```yml
    command: # Overrides CMD specified in dockerfile (none here, handled by entrypoint)
      - --set-custom-registry-npmrc
      - --run-cmd=npm run start
```

### Enable catalogue skill
Last step is to install the skill with the interface
<br>Go on the `manage palette` reachable by the side-menu :
<p align="center">
  <img src="../_media/skills/depguide/manage_palette.png" alt="manage_palette"/>
</p>

Then go on `install` tabs and search the desired node.
<p align="center">
  <img src="../_media/skills/depguide/install_module.png" alt="install_module"/>
</p>
Finally you should be able to find and use your node in the node-red palette (if not, try refreshing the page).
