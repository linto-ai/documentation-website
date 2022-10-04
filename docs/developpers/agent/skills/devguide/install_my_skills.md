---
sidebar_label: Deploy a skill
sidebar_position: 3
---

# Deploy a skill

## Install with LinTO-Admin

How to install my skill in LinTO platform server ?

An archive of your skills (`.zip` or `.tar`) need to be create. On that archive make sure to :
  - Copy the file **package.json** to the created folder : **package/package.json**

Next, use **import a skill** in **skill manager** from linto-admin to install the archive.
<p align="center">
  <img src="/docs/skills/depguide/admin_install_skill.png" alt="manage_palette"/>
</p>

Lastly if the installation is complete, it will be listed on **Local skills**

:::tip
The remaining of this doc is kinda obsolete as the LinTO-Admin interface conviniently enables its users to upload a skill as a .tgz bundle to install it directly on your LinTO server-platform. Use these informations wisely if you want to develop or modify skills locally before server upload
:::


## Local developpement & tests prerequistes

The **Business-Logic-Server** is required, this is the LinTO workflow manager, based on the framework Node-RED. It’s a programming tool for wiring different node / skill. Each skill have their own action allowing together to become a LinTO functionality.

```sh
git clone https://github.com/linto-ai/linto-platform-business-logic-server
cd linto-platform-business-logic-server
npm install
```

And a **linto-skill**, that's the main point of these page. For this tutorial, we're going to use the provided [skill template](https://github.com/linto-ai/linto-skills-template)

```sh
git clone https://github.com/linto-ai/linto-skills-template skills/linto-skills-template
cd skills/linto-skills-template
npm install
```

## Local install
How to install my skill in LinTO business-logic server ?
You just need to install the skill like any npm module

```sh
cd path-to-/linto-platform-business-logic-server/
npm install -s path-to-/skills/linto-skills-template/

// Start the business-logic server 
npm start // or 'node index.js'
```


## Docker install
How to install my skill while using LinTO business-logic server in a Docker network ?

You might use a Docker volume. That volume need to map your local skill with the docker folder skill. _(default skill folder location `/root/.node-red/node_modules/` )_

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
# Install skill into business-logic server
cd path-to-business-logic server/
npm install -s linto-module-name
```

### Default registry
The default registry used is `registry.npmjs.com`. I would not recommend these part until the skill is ready to be release.

### Private registry
A private repository can be used : `npm set registry my.repository.url`.