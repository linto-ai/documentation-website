---
sidebar_position: 4
---
# LinTO Agents on Webpages
# **linto-web-client**

A full figured LinTO client designed for building custom voice interactions on a webpage.

See demo here : [linto.ai](https://linto.ai)

**Note** : LinTO Web client relies on WebVoiceSDK for handling everything related to audio input, hotword triggers, recordings... See [LinTO WebVoiceSDK on NPM](https://www.npmjs.com/package/@linto-ai/webvoicesdk) for more informations

**Note** : Any LinTO web client needs to have a token registered towards a LinTO server. See more information in LinTO's [official documentation](https://doc.linto.ai).

**Note** : This library might cause issues (crashes) on your webpage as some browser's implementation of WebAssembly runtimes is still experimental

## **Usage**

With bundler :

```bash
npm i @linto.ai/linto-web-client
```

Static script from CDN :

```html
<script src="https://cdn.jsdelivr.net/gh/linto-ai/linto-web-client@master/dist/linto.min.js"></script>
```

Test right away :

- Tweak content in tests/index.js (your token, LinTO server endpoint etc)

```bash
npm run test
```

## I**nstanciante**

```jsx
try {
	window.linto = await new Linto(
		`${My_linto_stack_domain}/overwatch/local/web/login`,
		`${my_app_token}`,
		`${ms_timeout_delay_for_commands}`
	);
} catch (lintoError) {
	// handle the error
}
```

### **Handling errors**

This command might throw an error if something bad occurs

## **Instance user methods**

```jsx
- startAudioAcquisition(true, "linto", 0.99) // Uses hotword built in WebVoiceSDK by name / model / threshold
- startCommandPipeline() // Start to listen to hotwords and binds a publisher for acquired audio when speaking stop
- stopCommandPipeline()
- startStreamingPipeline() // Start to listen to hotwords and binds streaming start/stop event when audio acquired
- stopStreamingPipeline()
- triggerHotword(dummyHotwordName = "dummy") // Manualy activate a hotword detection, use it when commandPipeline is active.
- pauseAudioAcquisition()
- resumeAudioAcquisition()
- stopAudioAcquisition()
- startStreaming(metadata = 1) // Tries to initiate a streaming transcription session with your LinTO server. The LinTO server needs a streaming skill and a streaming STT service
- addEventNlp() // Bind the event nlp to handle only linto answer
- removeEventNlp()
- stopStreaming()
- login() // Main startup command to initiate connexion towards your LinTO server
- loggout()
- startHotword()
- stopHotword()
- sendCommandText("blahblah") // Use chatbot pipeline
- sendWidgetText("blahblah") // Publish text to linto (bypass transcribe)
- triggerAction(payload, skillName, eventName) // Publish payload to the desired skill/event
- say("blahblah") // Use browser text to speech
- ask("blahblah ?") // Uses browser text to speech and immediatly triggers hotword when audiosynthesis is complete
- stopSpeech() // Stop linto current speech
```

## **Instance events**

Use events with :

```jsx
linto.addEventListener("event_name", customHandlingFunction);
```

Available events :

- "mqtt_connect"
- "mqtt_connect_fail"
- "mqtt_error"
- "mqtt_disconnect"
- "speaking_on"
- "speaking_off"
- "command_acquired"
- "command_published"
- "command_timeout"
- "hotword_on"
- "say_feedback_from_skill"
- "ask_feedback_from_skill"
- "streaming_start"
- "streaming_stop"
- "streaming_chunk"
- "streaming_final"
- "streaming_fail"
- "action_acquired"
- "action_published"
- "action_feedback"
- "action_error"
- "text_acquired"
- "text_published"
- "chatbot_acquired"
- "chatbot_published"
- "chatbot_feedback"
- "chatbot_error"
- "custom_action_from_skill"

**NOTE** : See proposed implementation in ./tests/index.js

# **linto-web-client Widget (UI)**

## **Building sources**

```bash
npm install
npm run build-widget
```

Those commands will build **linto.widget.min.js** file in the */dist* folder

## **Using library**

Import **linto.widget.min.js** file to your web page. Once it's done, you can create a **new LintoUI()** object and set custom parameters.

```html
<script type="text/javascript" src="YOUR_PATH/linto.widget.min.js"></script>
<script type="text/javascript">
	window.LintoUI = new LintoUI({
		debug: false,
		containerId: CONTAINER_BLOCK_HTML_ID,
		lintoWebToken: LINTO_APPLICATION_TOKEN,
		lintoWebHost: LINTO_APPLICATION_HOST,
		widgetMode: WIDGET_MODE,
	})
</script>
```

## **Parameters**

| Parameter  | type  | values  | description  |
| --- | --- | --- | --- |
| debug | boolean  | true / false | Enable or disable console informations when events are triggered |
| containerId | string  | "div-wrapper-id" |  ID of the block that will contain the widget |
| lintoWebHost | string  | "https://my-host.com" | Url of the host where the application is deployed |
| lintoWebToken | string  | "yourToken" | Authorization token to connect the application |
| widgetMode | string  | "multi-modal" (default) / "minimal-streaming" | Set the widget mode |
| hotwordEnabled | string  |  "true" / "false" | Enable or disable hotword detection |
| hotwordValue | string  | "linto" | Value of the hotword. Change it if you use an other hotword model than "linto" |
| audioResponse | string  | "true" / "false" | Enable or disable linto widget audio response |
| streamingStopWord | string  | "stop" | Set stop-word for streaming "infinite" mode |
| lintoCustomEvents | array of objects | {"flag": "event_name": “func”: function(){} } | Bind custom functions to events |
| widgetMicAnimation | string  | "/path/to/animationfile.json" |  Set a custom animation file for "widget microphone animation" |
| widgetThinkAnimation | string  | "/path/to/animationfile.json" | Set a custom animation file for "widget thinking animation" |
| widgetSleepAnimation | string  | "/path/to/animationfile.json" | et a custom animation file for "widget sleeping animation" |
| widgetTalkAnimation | string  | "/path/to/animationfile.json" | Set a custom animation file for "widget talking animation" |
| widgetAwakeAnimation | string | "/path/to/animationfile.json” | Set a custom animation file for "widget awaken animation" |
| widgetErrorAnimation | string | "/path/to/animationfile.json" | Set a custom animation file for "widget error animation" |
| widgetValidateAnimation | string | "/path/to/animationfile.json” | Set a custom animation file for "widget validation animation" |
| widgetTitle | string  | "LinTO Widget"  | Widget Title value |
| cssPrimarycolor | string | "#59bbeb" | Value of the widget primary color (default = "#59bbeb")  |
| cssSecondaryColor | string | "#055e89" | Value of the widget secondary color (default = "#055e89") |

## **Testing**

You can try the library localy by running the following command:

```bash
npm run test-widget
```

You can change widget parameteres for your tests by updating parameters in the following file: **/tests/widget/index.js**

## **Custom handlers**

To set custom handlers on events, you can write your own functions and attach it to the widget events. Here is an example:

```jsx
const myCustomFunction = (event) => {
	console.log('Here is the code')
}
window.LintoUI = new LintoUI({
	...,
	lintoCustomEvents: [{
		flag: 'my_custom_event',
		func: (event) => {
			myCustomFunction(event)
		}
	}]
})
```

## Work with your own wakeup-word model

As mentionned before, “*[linto-web-client](https://github.com/linto-ai/linto-web-client)*” bundler works with “*[webVoiceSdk](https://github.com/linto-ai/WebVoiceSDK)*”. 
If you want to use your own wakeup-word model, you’ll have to clone both repositories and update “*linto-web-client*” package.json as following: 

### Cloning repositories

```bash
#Cloning repositories
cd /your/local/repo
git clone git@github.com:linto-ai/WebVoiceSDK.git
git clone git@github.com:linto-ai/linto-web-client.git
```

### Update package.json

```bash
cd /linto-web-client
nano package.json
```

*Change “@linto-ai/webvoicesdk” devDependencie path*

```json
#package.json
{
	...,
	"devDependencies": {
		"@linto-ai/webvoicesdk": "../WebVoiceSDK",
		...
	}
}
```