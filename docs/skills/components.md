# Linto-Components
[LinTO-Components](https://github.com/linto-ai/linto-skills-components) contains the main part of a LinTO skill. These module has been created to simplify a LinTO skill creation.

Here is a list of the main components with a brief summary of what they do:
*  **Nodes** : Node component manage a default setup based on the desired type of node (CoreNode, DictionaryNode, SkillNode)
*  **Components** : Utility toolbox for LinTO
*  **Connect** : Provide different connector for a skill
*  **Exception** : Exception related to linto-component

## Installation 
These module can be installed with `npm i @linto-ai/linto-components -s`

## Nodes
The components "Nodes" regroup each type of LinTO node. These type of node allow to easily setup a specific node type for the BLS.

Here is a list of all type node define in linto-components :
- Node
- Core-Node
- Core-Event-Node
- Dictionary-Node
- Skill-Node

We will describe the difference node type and how to use them :

<!-- tabs:start -->

#### ** LinTO Node **
LinTO-Node is the classic node style

### Example use
```js
const  LintoNode = require('linto-components').nodes.lintoNode
class  MyLintoNode  extends  LintoNode {
    constructor(RED, node, config) {
        super(node, config)
        ...
    }
}
```

#### ** LinTO Core Node **
The template LinTO-Core-Node are used by the provided skills with LinTO : **node-red-linto-core**.

A core-node is provided with **loadModule** function, which allow to load a desired function for the wire (used on multiple API selection).
The node also load by default `Wire-Node` component (see below in [components - wire node](skills/components?id=components))

### Example use
```js
const  LintoCoreNode = require('linto-components').nodes.lintoCoreNode
class  MyLintoCoreNode  extends  LintoSkillNode {
    constructor(RED, node, config) {
        super(node, config)
        ...
        this.init()
    }

    async  init(){
        let  serviceFunc = await  this.loadModule(`${**dirname}/api/${this.config.node.api}`) // Not require
        this.wireNode.onMessageSend(this, serviceFunc)
    }
}
```

#### ** LinTO Core Event Node **
Linto-Core-Event node are extended from lintoCoreNode, they load the component wire-event by default enable to publish a message to linto-out

### Example use
```js
const  LintoCoreEventNode = require('linto-components').nodes.lintoCoreEventNode
class  MyLintoCoreNode  extends  LintoSkillNode {
    constructor(RED, node, config) {
        super(RED, node, config)
        ...
        this.init()
    }

    // In node function skill
    this.notifyEventError('mqtt-Topic', {text : 'LinTo text'}, { message: err.message, code: 500 })
}
```
#### ** LinTO Connect Core Node**
Linto-Core-Connect node are extended from lintoCoreNode, they load the component mqtt by default. The ConnectCoreNode destroy their mqtt connection when the node is remove.

### Example use
```js
const  LintoConnectCoreNode = require('linto-components').nodes.lintoConnectCoreNode
class  MyLinTODictionary  extends  LintoConnectCoreNode {
    constructor(RED, node, config) {
        super(node, config)
        ...
    }
}
```


#### ** LinTO Dictionary Core Node**
Linto-Core-Dictionary node are extended from lintoCoreNode, they add one check on the required data for a dictionary

### Example use
```js
const  LintoDictionaryCoreNode = require('linto-components').nodes.lintoDictionaryCoreNode
class  MyLinTODictionary  extends  LintoDictionaryCoreNode {
    constructor(RED, node, config) {
        super(RED, node, config) // will check config.name and config.data are not empty
        ...
    }
}
```

#### ** LinTO Skill Node**
Each new skill-node will enable LinTO to proceed a new action.

The skill node manage different autoload function, a tutorial has been made about [crating your own skill](/skills/depguide)
The node also load by default `Wire-Event` component (see below in [components - wire event](skills/components?id=components))

### Example use
```js
const  LintoSkillNode = require('../linto-components').nodes.lintoSkillNode
class  MyLintoSkill  extends  LintoSkillNode {
    constructor(RED, node, config) {
        super(RED, node, config, dirname)
        ...
        this.init()
    }

    async  init() {
        await  this.configure() // Allow folder controllers, events and data to be loaded
    }
}
```
<!-- tabs:end -->

## Components
Components are a bundle of utility tools. We will describe each of these component and how to use them :

<!-- tabs:start -->

#### ** Payload Action **
Toolbox that provide utility function to read the payload generated by the node linto-red-event-emitter

### Example use
```js
const { payloadAction } = require('linto-components').components
...
//In constructor class
this.payloadAction = payloadAction
```

### Functionality
>  `extractEntityFromPrefix`  <br>
> Search the first entity in the playload matching the searched prefix
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{Object} payload** : input message
>>  -  **{String} searchedPrefix** : searched prefix
>
>  **{Object}** : Return, extracted entity from the payload, else <u>undefined</u>

>  `extractEntityFromName`  <br>
> Search the first entity in the playload matching the searched name
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{Object} payload** : input message
>>  -  **{String} searchedName** : searched name entity
>
>  **{Object}** : Return, extracted entity from the payload, else <u>undefined</u>

>  `checkEntitiesRequire`  <br>
> Check if all require entities are provided by the payload
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{Object} payload** : input message
>>  -  **{Array{string}} requireEntities** : required entities
>
>  **{Boolean}** : Return, <u>true</u> if require entities are found in the payload, else <u>false</u>

>  `checkEntityRequire`  <br>
> Check if one entity require is provided by the payload
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{Object} payload** : input message
>>  -  **{Array{string}} searchedPrefix** : required prefix of entities
>
>  **{Boolean}** : Return, <u>true</u> if one entity require are find, else <u>false</u>

#### ** Red Action **
Toolbox who provide functionality to get information about a workflow

### Example use
```js
const { redAction } = require('linto-components').components
...
//In constructor class
this.redAction = redAction
```

### Functionality
>  `getNodeFromId`  <br>
> Find a node based on the searched id
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} flowId** : searched flow id
>>  -  **{String} nodeId** : searched node id
>
>  **{Object}** : Return, node found, else <u>undefined</u>

>  `getFirstNodeFromName`  <br>
> Find the first node based on the searched name
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} flowId** : searched flow id
>>  -  **{String} nodeName** : searched node name
>
>  **{Object}** : Return, node found, else <u>undefined</u>

>  `getNodesFromName`  <br>
> Find all node with the matching name
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} flowId** : searched flow id
>>  -  **{String} nodeName** : searched nodes name
>
>  **{Array{Object}}** : Return, array of node matching name, else an empty array

>  `getLintoSnFromFlow`  <br>
> Find LinTO serial number
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} flowId** : searched flow id
>
>  **{Array{Object}}** : Return, array of LinTO serial number, else an empty array

>  `getLintoSnFromFlow`  <br>
> Get all node from the flow
>><b  style="color:green;">Arguments</b> :
>>  -  **{String} flowId** : searched flow id
>
>  **{Array{Object}}** : Return an array containing all node from the flow

#### ** Request **
Utility toolbox that enable HTTP functionality

### Example use
```js
const { request } = require('linto-components').components
...
//In constructor class
this.request = request
```

### Functionality
>  `get`  <br>
> Make a GET request
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} url** : Host to call
>>  -  **{String} token | optional**: Authentication token (headers.authorization)
>
>  **{Promise}** : Return a promise to handle

>  `post`  <br>
> Make a POST request
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} url** : Host to call
>>  -  **{Object} form**: Request form data (json)
>>  -  **{String} token | optional**: Authentication token (headers.authorization)
>
>  **{Promise}** : Return a promise to handle

#### ** Template **
Template HTML for different node type

### Example use
```js
const { template } = require('linto-components').components
...
//In constructor class
this.template = template
```

### Functionality
>  `settupSkillTemplate`  <br>
> Generate template format for a skill
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} paletteName** : Node palette name
>
>  **{Object}** : Return, Json format for the HTML template node settings

#### ** Terminal Out **
Generate a supported format for LinTO output
  
### Example use
```js
const { terminalOut } = require('linto-components').components
...
//In constructor class
this.terminalOut = terminalOut
```

### Functionality
>  `toSay`  <br>
> Generate output for LinTO say mode
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} toSay** : Text for linto to "say"
>
>  **{Object}** : Return a readable output for linto say mode

>  `toAsk`  <br>
> Generate an output for LinTO ask mode
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} toSay** : Text for LinTO to "ask"
>>  -  **{Objet} data** : Data to keep for the next LinTO command
>
>  **{Object}** : Return a readable output for LinTO ask mode

>  `toUi`  <br>
>
>  **WIP**

#### ** Wire Event **
Handle event with RED.events and provide utility function to work with the RED event emitter

### Example use
```js
const { wireEvent } = require('linto-components').components
...
//In constructor class
this.wireEvent = wireEvent.init(RED)
```

### Functionality
>  `init`  <br>
> Initialize RED.events for wire-event components
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{Object} RED** : RED object from node
>
>  **{Object}** : Return, initialized wire-event setup (this)

>  `getBaseName`  <br>
> Get the base name of wire-event using to create events
>
>  **{String}** : Return, event base name
  
>  `subscribe`  <br>
> Create an event (eventBaseName-flowId-eventName)
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} flowId** : Node flow id
>>  -  **{String} eventName** : Event name
>>  -  **{Function} handler** : Function to trigger on event

>  `subscribeWithStatus`  <br>
> Create an event (eventBaseName-flowId-eventName). Node will showcase a status error or success.
>>  <b  style="color:green;">Arguments</b> : Has to be called with **.call(this)** in a node class
>>  -  **{String} flowId** : Node flow id
>>  -  **{String} eventName** : Event name
>>  -  **{Function} handler** : Function to trigger on event
  
>  `notify`  <br>
> Emit an RED.events.
>>  <b  style="color:green;">Arguments</b> : No args can be given
>>  -  **{String} eventName** : Name of the event to emit
>>  -  **{Object} args_1** : Any argument to emit
>>  -  **{Object} args_N** : Any argument to emit
  
>  `unsubscribe`  <br>
> Remove all listeners related to the event
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} eventName** : Event name to delete
  
>  `isEventFlow`  <br>
> Verify if the event has been created
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} eventName** : Event name to verify
>
>  **{Boolean}** : Return, <u>true</u> if the event exist , else <u>false</u>
  
#### ** Wire Node **
Handle wire and provide utility function to work with it
  
### Example use
```js
const { wireNode } = require('linto-components').components
...
//In constructor class
this.wireNode = wireNode.init(RED)
```
  
### Functionality
>  `onMessageSend`  <br>
> Setup a function when a node message is receive then send function result to the next wired node
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{Object} registerNode** : Node to execute an action on message
>>  -  **{Object} handler** : Function to trigger on message
>>  -  **{String} successMsg | optional** : Message to print on the node
  
>  `onMessage`  <br>
> Setup a function when a node message is receive.
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{Object} registerNode** : Node to execute an action on message
>>  -  **{Object} handler** : Function to trigger on message
>>  -  **{String} successMsg | optional** : Message to print on the node
  
>  `nodeSend`  <br>
> Message send to the next wired node
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{Object} registerNode** : Node that send data
>>  -  **{Object} payload** : Payload to send
<!-- tabs:end -->
  
## Connect
Component allowing different external communication
  
<!-- tabs:start -->

#### ** MQTT **
Toolbox that handle different MQTT functionality
  
### Example use
```js
const { mqtt } = require('linto-components').connect
...
// In constructor class
this.mqtt = new  mqtt(this)
...
// After component initialisation, mqtt config can be found if the flow has setup a linto-config node
let  mqttConfig = this.getFlowConfig('confMqtt')
```
  
### Functionality
>  `connect`  <br>
> Connect to the specified host:port
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{Object} flowMqttConfig** : MQTT information (host, port, user, password)
>
>  **{Promise}** : Return, mqtt client connected.
  
>  `onMessage`  <br>
> Trigger the handled function on the desired topic when a mqtt message has been receive
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{Object} handler** : Function to trigger on mqtt message
>>  -  **{String} topicFilter** : Topic to trigger on mqtt message
  
>  `publish`  <br>
> Publish a message to a desired mqtt topic
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} topic** : Topic to publish
>>  -  **{Object} payload** : Json payload to send
  
>  `subscribeToLinto`  <br>
> Subscribe to a LinTO topic
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} topicScope** : Scope to subscribe
>>  -  **{Array{string}} ids** : List of ids to subscribe (can be **+** for all LinTO)
>>  -  **{String} topicAction** : Topic to subscribe (by default LinTO have : status, statusack)
  

#### ** Authenticated Token **
Authentication toolbox enable user check token

### Example use
```js
const { authToken } = require('@linto-ai/linto-components').connect
...
// In constructor class
this.authToken = authToken.init(authServerService)
...
// After component initialisation
let response = await this.authToken.checkToken(auth_token)
```

### Functionality
> `init` <br>
> Settings default authentication host
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} host** :  Token validator service path

> `checkToken` <br>
> Verify the user token
>>  <b  style="color:green;">Arguments</b> :
>>  -  **{String} token** : User token to be validate
>  **{Promise}** : Return, request response.

<!-- tabs:end -->
## Exception
Different exception related to LinTO.
  
<!-- tabs:start -->
#### ** Connect Exception **
Exception related to connection
  
### Example use
```js
const { HostUndefined, TopicScopeUndefined, WrongFormat } = require('linto-components').exception.connectException
...
throw  new  HostUndefined(exceptionMessage)
throw  new  TopicScopeUndefined(exceptionMessage)
throw  new  WrongFormat(exceptionMessage)
```
  
#### ** Node Exception **
Exception related to Node-RED
  
### Example use
```js
const { InitSkillException, AutoLoadException, UnknownLanguageException } = require('linto-components').exception.nodeException
...
throw  new  InitSkillException(exceptionMessage)
throw  new  AutoLoadException(exceptionMessage)
throw  new  UnknownLanguageException(exceptionMessage)
```
  
#### ** Terminal Exception **
Exception related to linto-output
  
### Example use
```js
const { ToAskTerminalException, ToSayTerminalException, ToUiTerminalException } = require('linto-components').exception.terminalException
...
throw  new  ToAskTerminalException(exceptionMessage)
throw  new  ToSayTerminalException(exceptionMessage)
throw  new  ToUiTerminalException(exceptionMessage)
```
  
#### ** Wired Exception **
Exception related to wired node
  
### Example use
```js
const { WireEventHandlerException } = require('linto-components').exception.wireException
...
throw  new  WireEventHandlerException(exceptionMessage)
```
<!-- tabs:end -->