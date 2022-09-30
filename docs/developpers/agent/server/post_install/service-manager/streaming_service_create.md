# Deploy a Large Vocabulary Streaming Transcription service
A streaming transcription service deploys a API that accept an audio stream and return a real-time transcription. "Large vocabulary" implies that the transcription won't be limited to preset sentences and intend to cover an entire language..

## Prerequisistes

* You have a deployed stack with LinTO Platform Service Manager running.
* You have access to the LinTO Platform Service Manager Swagger at `[LINTO_STACK_DOMAIN]/stt-manager/api-doc/`.
* You have created an acoustic model for your language. If not see [Create an acoustic model](/docs/developpers/agent/server/post_install/service-manager/acoustic_model)

## Creating the service

In the following steps we will create a large vocabulary streaming transcription service. 

1. Create a large vocabulary language model
2. Create a streaming transcription service
3. Submit transcription requests

#### 1- Create a large vocabulary language model
In this step you will create a large vocabulary language model.

A language model takes the phonemes extracted from the audio signal by the acoustic model and map them with known sentences.

<img src="/docs/use_cases/language.png" />

If you already created a large vocabuly language model you do not need to create an other. **You can skip this step**. 

Connect to the STT Service Manager Swagger.

<img src="/docs/use_cases/language_large.png" />

* `lang`: The intended language.
* `file` or `link`: Set the path or the link of a large language model.
* `acousticModel` : The acoustic model you created for the intended language.
* `type`: Select **lvcsr** for large vocabulary.    

Tap `Execute` and the STT-Manager should return a code 200.

Now you have a large vocabulary language model set in your STT Service Manager.

#### 2- Create an online transcription service
In this step we will create a large vocabulary streaming transcription service .

On the STT Service Manager Swagger.

<img src="/docs/use_cases/streaming_service.png" />

* `serviceId`: Service Name.
* `replica`: Set the number of instance you wish to create. 
* `tag` : Set to **online** for a streaming transcription service. 
* `languageModel` : Set the modelId of the LV language model created on the previous step.

You have now a live large vocabulary online transcription service deployed on your stack.

#### 3- Connect and submit request
For now, use the streaming service through LinTO applications, documentation pending.