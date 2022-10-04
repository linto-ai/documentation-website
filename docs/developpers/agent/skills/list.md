# Published skills and other Node-RED nodes

## LinTO Framework for Node-Red
 * [linto-skills-components - On our Github](https://github.com/linto-ai/linto-skills-components) The framework code for building LinTO skills. It enables its users to develop **LinTO compatible skills**, leveraging a set of base Node JS __classes__ inside their own code.

 
## Cores functionalities Nodes

All "LinTO core Nodes for Node-Red" built on top of **linto-skills-components** are found in this repo : [linto-skills-core](https://github.com/linto-ai/linto-skills-core)
 * linto-application-in : MQTT-connector listening authenticating clients (they share same application)
 * linto-chatbot : Relays non intent entries to built-in Tock chatbot to get an answer
 * linto-config : Auto configured by LinTO-Admin when managing an application
 * linto-dictionary : Wires to a skill to declare a list of **named entitites** (#cities -> [New York, Berlin, Marseille...])
 * linto-evaluate : Infers Tock NLU API for intent detection (with text from direct input or transcribed commands, see **linto-pipeline-router**)
 * linto-external-application : *Not yet developed - WIP*
 * linto-model-dataset : Automaticaly trains Tock Natural language understanding and / or specific Automatic Speech Recognition models based on the skills currently deployed into an application
 * linto-pipeline-router : Drives incoming data towards NLU, chatbot requests, transcription... based on the type of client's input (Text, Streaming audio, Audio files or specific commands). Enables a skill to get called directly
 * linto-on-connect : Triggers once a LinTO client connects
 * linto-out : Sends back MQTT packets to requesting LinTO client
 * linto-red-event-emitter : Emit an event to the specified skill based on the NLU result
 * linto-terminal-in : MQTT-connector listening one LinTO (device, Raspberry or Android)
 * linto-transcribe : Sends a file to a LinTO-Platform transcription service
 * linto-transcribe-streaming : Streams incoming audio to transcription service, returns text through linto-out
 * linto-tts : Text to speech
 * linto-ui : Enable a view output for LinTO on the RED-Dashboard

## Demonstration Skills Nodes
:::tip
Those skills are published mainly for demonstration purpose on how to write your own developpments, we hope you will publish something good very soon and make it available on the public [Node-Red Library](https://flows.nodered.org/) !
:::

* [node-red-linto-skill-transcriber](https://github.com/linto-ai/linto-skills-transcriber) : A LinTO client sends an audio file, this skill sends back the transcribed text without triggering NLU / Chatbot nor skills
 * [node-red-linto-skill-calendar](https://github.com/linto-ai/linto-skill-calendar) : Get the coming event from OpenPaas
 * [node-red-linto-skill-datetime](https://github.com/linto-ai/linto-skill-datetime) : Get the current date / time
 * [node-red-linto-skill-definition](https://github.com/linto-ai/linto-skill-definition) : Get a definition of requested word
 * [node-red-linto-skill-meeting](https://github.com/linto-ai/linto-skill-meeting) : Start / stop linto meetings mode
 * [node-red-linto-skill-memo](https://github.com/linto-ai/linto-skill-memo) : Manage reminder note
 * [node-red-linto-skill-news](https://github.com/linto-ai/linto-skill-news) : Fetch the news around the world
 * [node-red-linto-skill-pollution](https://github.com/linto-ai/linto-skill-pollution) : Get the pollution rate from city
 * [node-red-linto-skill-weather](https://github.com/linto-ai/linto-skill-weather) : Get the weather from city
 * [node-red-linto-skill-welcome](https://github.com/linto-ai/linto-skill-welcome) : A basic welcome skill