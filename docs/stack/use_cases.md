# USE CASES WALKTHROUGH
In this section we will illustrate step-by-step how to setup your infrastructure to answer specific use cases.

All the steps are described throurougly in the [Post-install Tutorial](stack/postinstall.md).


## Prerequistes

* You have a functionnal LinTO Platform Stack running on a server.
* You have a mean to access the server by a Domain Name (DNS server / DNS Record / entries in /etc/hosts ...)
* This DNS entry is the one configured in `LINTO_STACK_DOMAIN` env variable in the deployed platform stack
* You have an acoustic model deployed for the intended language or for each of the target languages. (See below)

In the following instructions references are made to:
* __LinSTT Swagger__ : Can be accessed at `[LINTO_STACK_DOMAIN]/stt-manager/api-doc/`.
* __LinTO Admin__ : Can be accessed at `[LINTO_STACK_DOMAIN]/login`

#### Deploy an acoustic model.
Acoustic model is the common base of all the use cases described in this section thus this preliminary instructions.

To deploy an acoustic model for your language, follow the steps [here](stack/postinstall?id=create-an-acoustic-model).

## Use cases

Choose your use-case below. 

**Base transcription use cases**

* [How to deploy a Large vocabulary file transcription service](#Deploy-a-Large-vocabulary-file-transcription-service)
* [How to deploy a command file transcription service](#Deploy-a-command-file-transcription-service)
* [How to deploy a streaming transcription service](#Deploy-a-Large-Vocabulary-Streaming-Transcription-service)

**Web client use cases**

* [How to setup a voice command service on a web-page](#Deploy-a-voice-command-service-on-a-web-page)

**Android client use cases**

Coming soon.

**Maker based client use cases**

Coming soon. 

*Is there a use-case you want us to document ? Let us know in the comments.* 

# Transcription service walkthrough

## Deploy a Large vocabulary file transcription service
A file transcription service allows to submit audio files to an API that will return a text transcription. File transcription can be used as itself and is a prerequisite of other uses. "Large vocabulary" implies that the transcription won't be limited to preset sentences and intend to cover an entire language.

To create such a service you'll need:
- An acoustic model of the language.
- A large language model.
- A deployed transcription service.

In the following steps we will create a large vocabulary file transcription service. 

1. Create a large vocabulary language model
2. Create a file transcription service
3. Submit transcription requests

The following step are accomplished using the [STT-Service-Manager](../services/stt_manager.md) web API on which requests can be executed using the swagger deployed within the platform at `[LINTO_STACK_DOMAIN]/stt-manager/api-doc/`.

#### 1- Create a large vocabulary model
In this step you will create a large vocabulary language model.

Connect to the STT Service Manager Swagger.

You need to follow the steps described [here](stack/postinstall?id=Create-your-language-model) with the following parameters:
* `lang`: The intended language.
* `file` or `link`: Set the path or the link of a large vocabulary language model.
* `acousticModel` : The acoustic model you created for the intended language.
* `type`: Select **lvcsr** for large vocabulary.

Now you have a Large Vocabulary language model set in your STT Service Manager.

#### 2- Create a file transcription service
In this step we will create a large vocabulary file transcription service .

Connect to the STT Service Manager Swagger.

You need to follow the steps described [here](stack/postinstall?id=Create-your-transcription-service) with the following parameters:
* `serviceId`: Service Name.
* `replica`: Set the number of instance you wish to create. 
* `tag` : Set to **offline** for a file transcription service. 
* `languageModel` : Set the modelId of the LV language model created on the previous step.

You have now a live large vocabulary file transcription service deployed on your stack.

#### 3- Submit transcription requests
With the transcription service operationnal you can now execute transcription requests.

You can test the transcription service through the Swagger under the `Speech-To-Text API` by selecting the serviceID and an audio file. Doing so will also display a template request that you may use to submit distant request.

Template request is:

```shell
curl --request POST \
--url [LINTO_STACK_DOMAIN]/stt/[serviceId]/transcribe \   
--header 'accept: text/plain' \
# *optional if you plateform requires authentication --header 'authorization: Basic [authentication token]'  
--header 'content-type: multipart/form-data boundary=---011000010111000001101001' \   
--form file=[fileName] \
--form speaker=no \
-F "file=@[filePath]" 
```

## Deploy a command file transcription service
A file transcription service allows to submit audio files to an API that will return a text transcription. File transcription can be used as itself and is a prerequisite of other uses. "Command" implies that the transcription is limited to sentences inputed beforehand.

To create such a service you'll need:
- An command language model of the language.
- A file transcription service based on this model.
- To populate the language model with command utterances.

Some models are provided on the [Download Section](../services/linstt_download.md).

In the following steps we will create a command file transcription service. 

1. Create a command language model
2. Create a file transcription service
3. Populate your language model with command utterances.

#### 1- Create a command language model
In this step you will create a command language model.

There are two approach to create a command language model:
- You can start with an __empty language model__. In that case, only the defined utterances will be recognized, words and sentence structures not defined won't be recognized.
- You can start with a __small language model__ and add your specific commands. With that approach, the model will recognize the defined commands but will be able to accomodate a certain level of variations based on common language.

Connect to the STT Service Manager Swagger.

You need to follow the steps described [here](stack/postinstall?id=Create-your-language-model) with the following parameters:
* `lang`: The intended language.
* `file` or `link`: Set the path or the link of a small language model or leave it empty if you wish to create a strict command model.
* `acousticModel` : The acoustic model you created for the intended language.
* `type`: Select **cmd** for command.

Now you have a command language model set in your STT Service Manager.

#### 2- Create a file transcription service
In this step we will create a command file transcription service .

Connect to the STT Service Manager Swagger.

You need to follow the steps described [here](stack/postinstall?id=Create-your-transcription-service) with the following parameters:
* `serviceId`: Service Name.
* `replica`: Set the number of instance you wish to create. 
* `tag` : Set to **offline** for a file transcription service. 
* `languageModel` : Set the modelId of the command language model created on the previous step.

You have now a live command file transcription service deployed on your stack.

#### 3- Populate the language model 
To set-up the commands within the created language model you have two options:

* If the transcription service is used by an application created in the admin interface, the model will be automaticaly updated with the command utterances defined within the associated skills. **You have nothing to do**.
* If the transcription service meant to be used alone, you'll need to update it with the command sentences and entities.

Command utterances are comprised of 2 elements:
* **Intents**: An intent is the applicative objective of the command. It is represented by a list of sentences designed to characterize the intention. For exemple, a weather application can be described with sentences such as "What's the weather like today", "How is the weather ?", "Is it raining ?", ... Feeding those sentences to the language model allow it to recognize them. Intents are primary designed for the NLU service but in this case they are a mean to specify sentences to the STT language graph.

* **Entities**: Entities are sets of specifics arguments to be used inside intents. It can be locations, names, colors, ... It prevent the need to specify each combinaison of intent-entity. For exemple instead of declaring each weather-location : "What's the weather like in Paris", "What's the weather like in London", ... Entities allow to describe "What's the weather like in #location", the service manager mapping automaticaly each combinaison for the language model to recognize.

To specifify sentences and entities go to the swagger.

Sentences are sets using the `Language Model 'Intent' Management (JSON format) section`. Set the `modelId` of your created language model, set a name for the intention. And provide a json containing the list of utterances.

Entities are set using the `Language Model 'Entity' Management (JSON format)`. Set the `modelId` of your created language model, set a name for the entities. And provide a json containing the list of value.

Once yours sentences and entities are input, you need to update the language model by going to the `Language Model Management` and call the `generate/graph` route. This step make take some time. 

If everything has been successful, your model is now set to recognize the declared sentences/entities.

#### 4- Submit transcription requests
With the transcription service operationnal you can now execute transcription requests.

You can test the transcription service through the Swagger under the `Speech-To-Text API` by selecting the serviceID and an audio file. Doing so will also display a template request that you may use to submit distant request.

Template request is:

```shell
curl --request POST \
--url [LINTO_STACK_DOMAIN]/stt/[serviceId]/transcribe \   
--header 'accept: text/plain' \
# *optional if you plateform requires authentication --header 'authorization: Basic [authentication token]'  
--header 'content-type: multipart/form-data boundary=---011000010111000001101001' \   
--form file=[fileName] \
--form speaker=no \
-F "file=@[filePath]" 
```

## Deploy a Large Vocabulary Streaming Transcription service
A streaming transcription service deploys a API that accept an audio stream and return a real-time transcription. "Large vocabulary" implies that the transcription won't be limited to preset sentences and intend to cover an entire language.

To create such a service you'll need:
- An acoustic model of the language.
- A large language model.
- An online transcription service.

Some models are provided on the [Download Section](../services/linstt_download.md).

In the following steps we will create a large vocabulary file transcription service. 

1. Create a large vocabulary language model
2. Create an online transcription service
3. Submit transcription requests.

The following step are accomplished using the [STT-Service-Manager](../services/stt_manager.md) web API on which requests can be executed using the swagger deployed within the platform at `[LINTO_STACK_DOMAIN]/stt-manager/api-doc/`.

#### 1- Create a large vocabulary model
In this step you will create a large vocabulary language model.

Connect to the STT Service Manager Swagger.

You need to follow the steps described [here](stack/postinstall?id=Create-your-language-model) with the following parameters:
* `lang`: The intended language.
* `file` or `link`: Set the path or the link of a large vocabulary language model.
* `acousticModel` : The acoustic model you created for the intended language.
* `type`: Select **lvcsr** for large vocabulary.

Now you have a Large Vocabulary language model set in your STT Service Manager.

#### 2- Create an online transcription service
In this step we will create a large vocabulary file transcription service .

Connect to the STT Service Manager Swagger.

You need to follow the steps described [here](stack/postinstall?id=Create-your-transcription-service) with the following parameters:
* `serviceId`: Service Name.
* `replica`: Set the number of instance you wish to create. 
* `tag` : Set to **online** for a file transcription service. 
* `languageModel` : Set the modelId of the LV language model created on the previous step.

You have now a live large vocabulary online transcription service deployed on your stack.

#### 3- Connect and submit request
For now, use the streaming service through LinTO applications, documentation pending.

# Web Client Use Cases

## Deploy a voice command service on a web-page
A voice command service allows the web-page user to interact with the content using command sentences.

To deploy such a service you will need:
* To create a command transcription service.
* To create an application.
* To setup your application functionnalities.
* To setup your web page with the web-client.

#### 1- Create a command transcription service
To create a file transcription service, follow the [steps](#Deploy-a-command-file-transcription-service). (It is not required to do step 3 as the admin interface will do it automaticaly).

__Optionnal__: If you want to add a live transcription capability you need to additionnaly follow [these steps](#Deploy-a-Large-Vocabulary-Streaming-Transcription-service).

__Optionnal 2__: If you want to add a large vocabulary file transcription service you may want to follow [those](#Deploy-a-Large-vocabulary-file-transcription-service).

#### 2- Create an Application
Now it is time to set up your application. To do so you might connect to the administation interface.

**Create your application** 

Once logged in, go to multi-user application and create a new application.

Setup the application `name`, `description`. The `workflow template` can be set with the default template or you can use a previously created one.

In the `STT command service` select the transcription service you previously created.

If you have created a online transcription service and/or a large vocabulary file transcription service you may select them in the appropriate fields.

In the `tock application` field choose *Create a new tock application*.

**Manage your application domain access**

To allow distant web pages to access your new application we need to authorize them.

On the admin interface, go to `Domains` and click on add a domain.

Add your web page url and create the domain.  
On your newly created domain select Manage and select your application.

The number of slot is the limit of concurrent instance allowed to connect to the service and submit requests. Set your desired amount and press associate.

With the domain associated you will be provided with an authentication token you need to connect the web client to the server.

#### 3- Set Application functionnalities.

To select the functionnalities available for your application take a look at [customize your application](stack/postinstall?id=Customize-your-application).

#### 4- Setup your webpage.
Coming soon. 