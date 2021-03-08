
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
How to install my skill in BLS ?
You just need to install the skill like any npm module

```sh
cd path-to-/linto-platform-business-logic-server/
npm install -s path-to-/skills/linto-skills-template/

// Start the BLS 
npm start // or 'node index.js'
```

## Stack install
How to install my skill in stack ?

An archive of your skills (`.zip` or `.tar`) need to be create. On that archive make sure to :
  - Copy the file **package.json** to the created folder : **package/package.json**

Next, use **import a skill** in **skill manager** from linto-admin to install the archive.
<p align="center">
  <img src="../_media/skills/depguide/admin_install_skill.png" alt="manage_palette"/>
</p>

Lastly if the installation is complete, it will be listed on **Local skills**

## Docker install
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
cd path-to-bls/
npm install -s linto-module-name
```

### Default registry
The default registry is the `registry.npmjs.com`. I would not recommend these part until the skill is ready to be release.

### Private registry
A private repository can be used : `npm set registry my.repository.url`.