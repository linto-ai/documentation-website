---
sidebar_label: Code your actions
sidebar_position: 1
---
# Make a skill do something

## Prerequisites

This documentation considers that you **do not not start your skill developpments from sratch**, it asumes that you first fetch the **linto-skill-template** source-code as a bootstrap architecture

```sh
git clone https://github.com/linto-ai/linto-skills-template skills/linto-skills-template
cd skills/linto-skills-template
npm install
```

We recommend you to have some Node-Red knowledge [guide (create your first node)](https://nodered.org/docs/creating-nodes/first-node).

:::tip
Most of the LinTO skills we currently maintain are for educational purposes, maybe you want to adapt the following doc with a more complex bootstrap. Have a look at [other demonstration skills source code](/docs/developpers/agent/skills/list#demonstration-skills-nodes)
:::

## Architecture

Here the global architecture of a skill.
```
my-linto-skill
├── /controllers                         --> Skill action code
│   ├── ... .js
├── /data                                --> Skill data
│   ├── tts.json                            --> Text-to-speech answers - Vocal feedback phrases templates
│   └── command.md                          --> Commands, example phrases, for lexical seeding (NLU/LM)
├── /events                              --> Skill intent folder
│   ├── myEvent.js                          --> FileName correspond to an intent
│   ├── ... .js
├── linto-skill-demo.html                --> Skill view (UI insde node red)
├── linto-skill-demo.js                  --> Main file - that gets injected into Node-RED
└── package.json
```

# Make my skill

In that guide we plan to make a skill who can answer with **hello** when the intent **greeting** is triggered.

## First step, make my event

Create an event **greeting**, simply create a file `greeting.js` in the **events** folder. All Javascript files in this folder are automatically registred as **intents** where the corresponding skill code will trigger

Secondly make your skill.
```js
// filename : greeting.js
module.exports = function (msg) {
  // You can add you'r own code also
  return {
    say: {  // the text output that linTo will say
      phonetic: 'hello',
      text: 'hello'
    }
  }
}
```

Lastly you can refer to [Install the skill](/docs/developpers/agent/skills/devguide/install_my_skills) to try it.


## Code

### Make a controller

The objective of a controller is to have a clean code. Similar to an event/intent, you need to create a file in **controllers** folder ( ex : `addition.js` ). Any controller file will be automatically loaded.

The implementation is similar to an event :
```js
// filename : addition.js
module.exports = function (a, b) {
  return a + b  // Addition 
}
```

To use a controller : 
```js
let myAdditionResult = this.controller.addition(5,8) // For the example above
this.controller.controllerFileName(x,y) // For other case
```

### Make an async controller / event 
Simply create your function with an `async fuction`

```js
module.exports = async function (msg) { ... }
```

### Data Folder

**Json** file are loaded and will be accessible with the key :  **skillConfig**.
```js
  this.skillConfig['en-US'] // data/tts.json -> key en-US
  this.skillConfig['fr-FR'] // data/tts.json -> key fr-FR
```

The **command** file is located in the **data** folder. The following guide will help you for this - [Declare intentions and command trigger phrases](/docs/developpers/agent/skills/devguide/format)

### Rename a skill
Renaming a skill name can be tedious, one mistake can disable the skill until everything is fixed.

Firstly to rename a skill those files need to be edited: 
- *linto-skill-demo.js*
- *linto-skill-demo.html*
- *package.json* 

Secondly replace all following infos by the desired name. **Be carefull they are case sensitive.**
 - `linto-skill-demo` by `linto-skill-custom-name` (including file name)
 - `lintoSkillDemo` by `lintoSkillCustomName`

Then you'll see your skill updated with the new name.