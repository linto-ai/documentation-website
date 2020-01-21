
# Understanding a linto-skill
We will describe here the basic part about LinTO skill. These knowledge will give you a way to make your own custome skill.

## Prerequisite

Make sure to have the template provided : `git clone https://ci.linagora.com/linagora/lgs/labs/Linto-Device/Linto-Backend/linto-skills-v2.git`

linto-components has been installed : `npm i linto-components -s`

## Architecture
First step will be to describe the template architecture. The template is formed of these following file :

```
├── controllers                         --> Controller function of the skill
│   ├── addition.js
│   ├── ... .js
├── data                                --> Data loaded for a skill
│   ├── tts.json                        --> Text to speech
│   ├── ... .json
│   └── command.md                      --> Command injected for NLU/LM
├── events                              --> Event created by RED.events
│   ├── myEvent.js
│   ├── ... .js
├── icons                               --> Icon folder (optional)
│   └── sample.png
├── locales                             --> Internationalisation file
│   ├── en-US                           --> Language folder
│   │   └── linto-skill-template.html
│   │   └── linto-skill-template.json
├── linto-skill-template.html           --> Skill view
├── linto-skill-template.js             --> Main file - inject node
└── package.json                        --> Node has to be declared
```

## Let's get started
Based on `node-red-linto-skill-template` we will provide a description allowing you to fully understand the basic of a linto skill. 
<br>**Note**: In these guide the node name is `template` but you can rename it replacing all **template** words by your desired name (case need to be respected).

### Main file
____
**linto-skill-template.js**
<br>First of all, you need to load `lintoSkillNode` from the `linto-components` nodes to extend your node class. 
This class will enable the use of `this.configure()` (async/await are mandatory) that will load all json file in **/data** and javascript file in **/controllers**, **/events**.

Each of these setup will be accessible in your node :
 - data : `this.skillConfig.jsonKey`
 - controllers : `this.controller.addition()`
 - events : An RED.events will be create and the exported function will be handled on trigger event

```js
const LintoSkillNode = require('linto-components').nodes.lintoSkillNode  // Will enable autoload

class LintoSkillTemplate extends LintoSkillNode {
  constructor(RED, node, config) {
    super(RED, node, config, __dirname)
    this.init()
  }
  async init() {
    await this.configure() // Load the different folder (data, controllers and events)
  }
}
```

Next is to create the exported node has a function to be initialized on the RED runtime.
```js
const { template } = require('linto-components').components  // Allow to simplify the node html 

const PALETTE_NODE_NAME = 'Template'
const SKILL_NAME = 'linto-skill-template'

module.exports = function (RED) {
    function Node(config) {
        RED.nodes.createNode(this, config)
        new LintoSkillTemplate(RED, this, config) // Init the class previously created
    }

    RED.nodes.registerType(SKILL_NAME, Node,{
        settings: {
            lintoSkillTemplate: {
                value: {
                    skillName: SKILL_NAME,
                    htmlTemplate: template.settupSkillTemplate(PALETTE_NODE_NAME),  // Load the basic skill html template
                    command: LintoSkillNode.loadFile(__dirname, 'data/command.md') 
                },
                exportable: true
            }
        }
    })
}
```
What's happen here is :
 - The node is defined by the class LintoSkillTemplate. LintoSkillTemplate is extended by LintoSkillNode which autoload data, controllers and events.
 - Events autoloaded will create an event with RED.events. These event will be trigger only by linto-red-event-emitter. The exported function will be handled on the event trigger
 - `RED.nodes.registerType()` will load the HTML part. Third parameter is optional but it allow here to load and provide some data for the frontend accessible by `RED.settings.lintoSkillTemplate.name_of_value_key`

____
**linto-skill-template.html**
<br>Based on the fact that you have the knowledge for making a skill, the only tricky part here is `RED.settings.lintoSkillTemplate`. This variable was setup in **linto-skill-template.js** on the registerType (Three key has been define :**skillName**, **htmlTemplate** and **command**). The data can be retrieve with `RED.settings.lintoSkillTemplate.skillName`
____

A basic **package.json** for a node, just make sure to declare your node.
```json
{   
    ...
    "node-red": {
        "nodes": {
            "linto-skill-template": "linto-skill-template.js"
        }
    },
    ...
}
```
### Core Folder
#### Data
Any **.json** file in the **data** folder will be loaded in `this.skillConfig` and will be accessible anywhere in the skill.

```json
{
  "en-US": {"say": {"additionResult" : "The addition result is ", ...}},
  "fr-FR": {"say": {"additionResult" : "Le résultat de l'addition est ", ...}},
  ...
}
```
The data from the above are accessible with `this.skillConfig.en-US.say.additionResult`

#### Controllers
Any **.js** file in the **controllers** folder will be loaded in `this.controller` and will be accessible anywhere in the skill.
A controller is an exported function, here is an example :
```js
//filename "addition.js"
module.exports = function (x, y) {
  return x + y
}
```
You can access these controller with : `this.controller.addition(x, y)`

#### Events
Any **.js** file in the **events** folder will be autoloaded. Has the autoload goes, it will create an event, handle the function to these event and finally trigger the linto-out event based on the function result.
<br>All event created by the autoload have the same format : `linto-skill-<flowId>-<eventsFileName>`.
<br>**Note** : `linto-red-event-emitter` will emit to the intent detected from the NLU, that's why **we recommend you to match the event filename to the NLU intent**)

An events is define by a function exported to be called on the event trigger. Below is an example :

```js
module.exports = function (payload) {
    this.controller.addition(5, 7)
    return { say: `${tts.say.demo}` }
}
```
**Note** : Events are bind to the node, this.controller are accessible

## Some tips
### Load multiple component
More information about different [component](skill/components)

```js
const { payloadAction, template, request, ... } = require('linto-components').components

// In constructor
this.payloadAction = payloadAction
this.request = request
// In node
this.payloadAction.extractEntityFromPrefix()
this.request.get()
```

### Flow Config
Configuration in linto-config is registered in node-red context storage.

```js
    this.getFlowConfig('language') // language is define by default in this.skillConfig.language
    this.getFlowConfig('confMqtt')
    this.getFlowConfig('configEvaluate')
    this.getFlowConfig('configTranscribe')
```

## Skill Input / Output
Unless like other node, a node-red-linto-skill is trigger by an event and emit an event to linto-out when the information has been proceed. For those event we have defined a format in and out.

### Skill In
```json
{
    "topic": "SCOPE/tolinto/LINTO_SN/nlp/file/ID_REQUEST",
    "payload": {
        "transcript": { "text": "bonjour"},
        "nlu": { "intent": "myEvent", "entities": [] },
        "isConversational": false // false if say mode, true if ask mode
    }
}
```

### Skill Out
**Say**, message say by LinTO
```json
{
    "say": "Hello, my name is LinTo"
}
```

**Ask**, message ask by LinTO with the stored natural language understanding. It require at least the current NLU output. Some data can be added if needed for the next request.

```json
{
    "ask": "How are you today ?",
    "conversationData" : { 
        "intent": "howareyou",
        "entities": [],
        // Some data require for the next request
        "data_1" : "Some data generated",
        "data_N" : { ... }
    }
}
```

## Tweak it
Now the last step is to enhance the skill to you own desire