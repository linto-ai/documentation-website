
# How to install my linto-skill

We gonna see how to install a linto-skill based on the template skill that we provide.

## Prerequistes

We need the  **Business-Logic-Server** (**BLS**) and the **skill-template**.

```sh
git clone https://github.com/linto-ai/linto-platform-business-logic-server
cd linto-platform-business-logic-server
npm install
```
And a **linto-skill-template**, that's the main point of these page.

```sh
git clone https://github.com/linto-ai/linto-skills-template skills/linto-skills-template
cd skills/linto-skills-template
npm install
```

## Local install
How to install my skill from a local installation ? You just need to install the skill like any npm module.

```bash
cd path-to-/linto-platform-business-logic-server/
# From filesystem
npm install -s path-to-/skills/linto-skills-template/
# If the module is published
npm install -s module_name

// Start the BLS 
npm start // or 'node index.js'
```


## Stack install
How to install my skill in thestack ?

An archive of your skills (`.zip` or `.tar`) need to be create. On that archive make sure to :
  - Copy the file **package.json** to the created folder : **package/package.json**

Next, use **import a skill** in **skill manager** from linto-admin to install the archive.
<p align="center">
  <img src="../_media/skills/depguide/admin_install_skill.png" alt="manage_palette"/>
</p>

Lastly if the installation is complete, it will be listed on **Local skills**

## Docker install
How to install my skill in Docker ?

Easy, we use volume. That volume need to map your local skill with the docker folder skill. _(default skill location `/root/.node-red/node_modules/` )_

That should look like that :
```yml
    volumes: # Make sure that the left path is pointing you'r folder skills
      - path-to/skills-folder/:/root/.node-red/node_modules/
```

Then restart the docker with `docker-compose up`

## NPM Registry
You can also publish a skill in a registry like a node module

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

### Custom registry
The default registry is the `registry.npmjs.com`. I would not recommend these part until the skill is ready to be release.
But a private repository can be used : `npm set registry my.repository.url`.