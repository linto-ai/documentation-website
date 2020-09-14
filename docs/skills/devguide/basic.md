# Make your skill
Creating a LinTO skill can be tedious the first time around, which is why we explain the processes step by step to for making a skill based on a template.

## Prerequisites
- Make sure you have the template : `git clone https://github.com/linto-ai/linto-skills-template.git`
- Then install the module `npm install`

We recommend that you have some Node-Red knowledge [guide (create your first node)](https://nodered.org/docs/creating-nodes/first-node). 
Bonus points if you have read [linto-components guide](skills/components?id=components) ;)

## Architecture

Skill LinTO is formed of these following files :
```
├── /controllers                         --> Skill action
│   ├── ... .js
├── /data                                --> Skill data
│   ├── tts.json                            --> Text-to-speech
│   └── command.md                          --> Command for lexical seeding (NLU/LM)
├── /events                              --> Skill intent folder 
│   ├── myEvent.js                          --> FileName correspond to an intent
│   ├── ... .js
├── linto-skill-demo.html                --> Skill view
├── linto-skill-demo.js                  --> Main file - inject node
└── package.json                         --> Node has to be declared
```

# How to make your own skill

## The simple way
Based on the template, we will describe each step for making a fully functional linto-skill.

### Node-Red node setup
The tedious part is to rename a node itself. It's important to match case.

- In **linto-skill-demo.js** you can to customize the node name. In this case we've renamed the skill `linto-personal-skill`
```js
const PALETTE_NODE_NAME = 'My personal skill'   // Node name show in template
const SKILL_NAME = 'linto-personal-skill'       // Node name show in workflow 
```
When you change SKILL_NAME, you will also need to update the settings key **lintoSkillDemo** to **lintoPersonalSkill**

- You will also need to update the html file **linto-skill-template.html** 
| Before update             |  After update         |
|---                        |---                    |
| linto-skill-demo          | linto-personal-skill  |
| lintoSkillDemo            | lintoPersonalSkill    |

- Note that the SKILL_NAME also needs to match the node name in **package.json**
```json
    ...
    "node-red": {
        "nodes": {
            "linto-personal-skill": "linto-skill-demo.js"
        }
    }
    ...
```

Then you should be able to have a basic linto-skill. Now for the fun part:

### Skill logic
In order to trigger an event,  `linto-red-event-emitter` emits the intent from the NLU, which is why **we recommend you to match the event filename to the NLU intent**

- Linto-skill autoloads any files in the **events** folder. Then an event is created and the function is automatically triggered. Now you only need to write you logic.

```js
// events/my-skill-intent.js
module.exports = function (msg) {
    let tts = this.skillConfig[this.skillConfig.language] // Allows loading of the data/tts file with the defined flow language
    // Do some stuff
    return {
        say: {
            phonetic: `${tts.say.additionResult.phonetic} ${addition}`,
            text: `${tts.say.additionResult.text} ${addition}`
        }
    }
}
```
<br>All events created by the auto-load have the same format : `linto-skill-<flowId>-<eventsFileName>`.

- Files in **controllers** folder are also autoloaded in `this.controller` and accessible anywhere in the skill (they are optional but can allow some clean code). Here's an example :
```js
// controllers/addition.js
module.exports = function (a, b) {
  return a + b
}
// How to use :
this.controller.addition(2, 1)  
```

- **data/tts.json** - The skill outputs any static text ("print" or "say") in json.
```json
{
    "en-US": {
        "say": {
            "keyText": {
                "phonetic": "phonetic text",
                "text": "print text"
            }, { ... }
        }
    },
    "fr-FR": {
        "say": {
            "keyText": {
                "phonetic": "text phonétique",
                "text": "texte affiché"
            }, { ... }
        }
    }
}
```
- **data/command.md** is used for the lexical seeding. Make sure to read the [**guide part**](lexical_seeding/format?id=command) 

# Install
The last step is to add the current node in BLS. 

## Add skill to catalogue
We allow users to create their own custom node-RED [catalogue](skills/depguide?id=custom-catalogue)
The routes shown below allow users to add a new node in the catalogue to enable the skill(from `url` or `.tgz`(pkg_url))

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
      "description": "Skill description",
      "version": "0.1.3-2",
      "keywords": ["linto", "node-red", "skill", "greeting"],
      "types": ["node-red"],
      "updated_at": "2020-08-26T08:31:09.187Z",
      "id": "@linto-ai/node-red-linto-welcome",
      "url": "http://verdaccio.linto.ai/-/web/detail/@linto-ai/node-red-linto-welcome",
      "pkg_url": "http://verdaccio.linto.ai/@linto-ai/node-red-linto-welcome/-/@linto-ai/node-red-linto-welcome-0.1.3-2.tgz"
    },
    {...}
  ]
}
```

## Enable node
If the skill has been added in the catalogue, then it is possible to install the node with the node-red manager.
<br>First step, is to go on the `manage palette` reachable by the side-menu :
<p align="center">
  <img src="../_media/skills/depguide/manage_palette.png" alt="manage_palette"/>
</p>

Then go on the tabs `install` and search for the node.
<p align="center">
  <img src="../_media/skills/depguide/install_module.png" alt="install_module"/>
</p>
Finally you should be able to find and use your node in the node-red palette (if not, try refreshing the page).


# Advanced
## Load multiple component
More information about different [component](skills/components)

```js
const { payloadAction, template, request, ... } = require('linto-components').components

// In constructor main file
this.payloadAction = payloadAction
this.request = request
// In node (events / controllers)
this.payloadAction.extractEntityFromPrefix()
this.request.get()
```

## Flow Config
Configurations in linto-config node are registered in the context storage and accessible from 

```js
    this.getFlowConfig('language') // language is define by default in this.skillConfig.language
    this.getFlowConfig('confMqtt')
    this.getFlowConfig('configEvaluate')
    this.getFlowConfig('configTranscribe')
```

## Tweak it
Now the last step is to enhance the skill any way you want to.