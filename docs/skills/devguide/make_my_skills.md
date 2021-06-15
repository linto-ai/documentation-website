# Introduction
Her a guide about how to make my linto-skill based on the template we provide.

## Prerequisites

Don't forget to clone the repository **linto-skill-template** as we go to the guide.

```sh
git clone https://github.com/linto-ai/linto-skills-template skills/linto-skills-template
cd skills/linto-skills-template
npm install
```

You can check the framework Node-Red to have a better understanding about a node [guide (create your first node)](https://nodered.org/docs/creating-nodes/first-node).

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
├── /actions                             --> Allow to open an mqtt topic (action/:skillName/:actionName)
│   ├── myAction.js                          --> FileName correspond to an action
│   ├── ... .js
├── linto-skill-demo.html                --> Skill view
├── linto-skill-demo.js                  --> Main file - inject node
└── package.json
```

# Make my skill

In that guide we plan to make a skill who can answer with **hello** when the intent **greeting** is trigger.

## Make my event

First step is to create an event **greeting**, simply create a file `greeting.js` in the **events** folder. LinTo-Component will autoload the event for you.

Secondly make your skill. We will keep it simple as an example. The answer of that event will be `hello`.
```js
//greeting.js
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

## Make my Action
An action is very similar to an event. The only change is the way to be trigger.
The result of an action answer don't matter, you will need to handle it on you'r client.

Just create a file `firstAction.js` in the action folder and LinTo-Component will manage the mqtt topic creation for you.

```js
//firstAction.js
module.exports = function (msg) {
  return {
    say: 'My first action',
  }
}
```
Topic to publish : `_clientCode/_channel/_sn/skills/:skillName/:actionName`

Topic to subscribe : `_clientCode/_channel/_sn/customAction/:skillName/:actionName` 

## Make a controller

A controller is function allowing to be called by different event.
Similar to event, you need to create a file in the folder : **controllers**  (ex : `additions.js`). Any file in that folder will be automatically loaded.

The implementation is similar to an event :
```js
//addition.js
module.exports = function (a, b) {
  return a + b 
}
```

To use a controller:
```js
this.controller.addition(5,8) // For the example above
this.controller.fileName(args) // General case
```

### Make an async controller / event / action
Just make the function async (`async fuction`)

```js
module.exports = async function (msg) { ... }
```

## Generate my Data

### Json
All **json** file in the data folder will be accesible by the key **skillConfig**. Make sur that any json key don't overlapp each other.

```js
  this.skillConfig['en-US'] // data/tts.json -> key en-US
  this.skillConfig['fr-FR'] // data/tts.json -> key fr-FR
  this.skillConfig.myJsonKey // General case
```
### Command

A **command.md** file need to be located in the data folder. That file will allow to generate all necessary data for the [lexical seeding](lexical_seeding/format?id=lexical-seeding).


## Rename a skill
Renaming a skill name can be tedious, one mistake can disable the skill until everything is fixed.

Firstly to rename a skill those files need to be edited: 
- *linto-skill-demo.js*
- *linto-skill-demo.html*
- *package.json* 

Secondly replace all followed line by the desired name. **Be carefull they are case sensitive.**
 - `linto-skill-demo` by `linto-skill-custom-name` (including file name)
 - `lintoSkillDemo` by `lintoSkillCustomName`

Then you should be able to see you'r skill updated with is new name.