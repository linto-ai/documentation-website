# Introduction
We gonna explain how to make a linto-skill based on the template that we provide.

## Prerequisites

Make sure to have the **linto-skill-template** as we go to the tutorial we are gonna used that template.

```sh
git clone https://github.com/linto-ai/linto-skills-template skills/linto-skills-template
cd skills/linto-skills-template
npm install
```

We recommend you to have some Node-Red knowledge [guide (create your first node)](https://nodered.org/docs/creating-nodes/first-node).

## Architecture

Here the architecture of a skill.
```
linto-skills
├── /controllers                         --> Skill utility
│   ├── ... .js
├── /data                                --> Skill data
│   ├── tts.json                            --> Text-to-speech
│   └── command.md                          --> Command for lexical seeding (NLU/LM)
├── /events                              --> Skill intent folder
│   ├── myEvent.js                          --> FileName correspond to an intent
│   ├── ... .js
├── linto-skill-demo.html                --> Skill view
├── linto-skill-demo.js                  --> Main file - inject node
└── package.json
```

# Make my skill

In that guide we plan to make a skill who can answer with **hello** when the intent **greeting** is trigger.

## First step, make my event

First step is to create an event **greeting**, simply create a file `greeting.js` in the **events** folder. LinTo-Component will auto-load that events for you.

Secondly make your skill.
```js
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

Lastly you can refer to [Install the skill](skills/devguide/install_my_skills?id=how-to-install-my-linto-skill) to try it.


## Other

### Make a controller

The objective of a controller is to have a clean code. Similar to an event/intent, you need to create a file in **controllers** folder ( ex : `additions.js` ). Any controller file will be automatically loaded.

The implementation is similar to an event :
```js
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

The **command** file is located in the **data** folder. More information about the command can be found [here : Lexical seeding](lexical_seeding/format?id=lexical-seeding)

### Rename a skill
Renaming a skill name can be tedious, one mistake can disable the skill until everything is fixed.

Firstly to rename a skill those files need to be edited: 
- *linto-skill-demo.js*
- *linto-skill-demo.html*
- *package.json* 

Secondly replace all followed line by the desired name. **Be carefull they are case sensitive.**
 - `linto-skill-demo` by `linto-skill-custom-name` (including file name)
 - `lintoSkillDemo` by `lintoSkillCustomName`

Then you should be able to see you'r skill updated with is new name.