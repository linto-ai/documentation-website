# Platform Service manager
Platform Service manager is a service designed to create, update and scale Speech-To-Text service inside your linTo platform. In this documentation you will be provided with:
* [Basic How To Use](#how-to-use-it-)
* [API References](#apis)

## How to use it ?
After installing, configuring, and running Platform Service manager, it is time to use it! This service offers two main features:
- Spawn service instances of LinTO Platform STT workers
- Create a personnalized ASR engine (build a language model using your specific vocabulary and text)

:::note
All the API described can be used directly using the Swagger Web GUI deployed within the Platform stack. For recall, you can access it at `[LINTO_STACK_DOMAIN]/stt-manager/api-doc/`
:::
 
### How to create and start a service?
Let's start by learning how to create a service and manage it. A service is an ASR engine used for a specific use-case (e.g. GenericModel, SmartHome, SmartBusinessAssistant, SmartMusic). Accordingly, this ASR engine have to be prepared and then the service can be created. This is done as follows:

1- Using the API `[POST] /acmodel/{modelId}`, create an __Acoustic Model__ that corresponds to the intended recognizer language. This model can be used by multiple decoding graphs.

2- Using the API `[POST] /langmodel/{modelId}`, create a __Language Model__ that correponds to the requested use-case, with the associated __Acoustic Model__ created in the first step.

3- Using the API `[POST] /service/{serviceId}`, create a __service__ that will be used for decoding the stream of audio and use the created __Language Model__ in the second step as the main __ASR decoding graph__ of this service.

4- Using the API `[POST] /service/{serviceId}/start`, start the created service.

5- Using the API `[POST] http://ingress-controller-host:ingress-controller-port/LINTO_STACK_LINTO PLATFORM STT_PREFIX/{serviceId}/transcribe`, transcribe an input audio and get the output


### How to prepare and generate a specific model?
Platform Service manager service offers you the ability to create a specific language model. This model will be trained on the given text added through the intent/entity manager. Two types of model could be created:

- A domain-specific large vocabulary model: the text consists on a various sentences modeling this domain. It could be used directly to generate the model. Only a normalization step (e.g. correct annotation errors, convert numbers, dates, symbols to full letters, remove special ponctuation) is recommanded in order to adapt it for language model generation.
- An assistant language model: the text is a set of queries expressing the desired intents that may depend on entities (used to describe all the possible values for a given attribute). For example, the query "set the bedroom lights percent to 65" is associated with the intent which depends on the entities __room__ (bedroom) and __brightness__ (65). All queries must mapped into a specific representation:
   - all occurrences of each entity must replaced by a symbol for the entity. For example, the query "set the bedroom lights percent to 65" is mapped into "set the __#room__ lights to __#brightness__"
   - an independent list of entities must be created. Example, for the entity __room__, the list is [bedroom, kitchen, bathroom], and for the entity __brightness__, the list is [0, 1, ..., 100]

Once the data is prepared, the specific language model could be created. This can be done in two ways:

- Create a language model including all data using the API `[POST] /langmodel/{modelId}` and the parameter __data__.

#### A domain-specific large vocabulary model
```json
{
    "lang": "en-US",
    "type": "lvcsr",
    "data": {
        "intents":[
            {
                "name": "ASR_large_vocabulary",
                "items": [
                    "Speech recognition is an interdisciplinary subfield of computer science and computational linguistics",
                    "It enable the recognition and translation of spoken language into text by computers",
                    "It is also known as automatic speech recognition (ASR), computer speech recognition or speech to text (STT)",
                    "It incorporates knowledge and research in the computer science, linguistics and computer engineering fields",
                    "Some speech recognition systems require training (also called enrollment) where an individual speaker reads text or isolated vocabulary into the system",
                    "The system analyzes the person's specific voice and uses it to fine-tune the recognition of that person's speech, resulting in increased accuracy. Systems that do not use training are called speaker independent systems. Systems that use training are called speaker dependent.",
                    "Speech recognition applications include voice user interfaces such as voice dialing (e.g. call home), call routing (e.g. I would like to make a collect call), domotic appliance control, search key words (e.g. find a podcast where particular words were spoken), simple data entry (e.g., entering a credit card number), preparation of structured documents (e.g. a radiology report), determining speaker characteristics, speech-to-text processing (e.g., word processors or emails), and aircraft (usually termed direct voice input).",
                    ""
                ]
            }
        ]
    }
}
```

#### An assistant language model
```json
{
    "lang": "en-US",
    "type": "cmd",
    "data": {
        "intents":[
            {
                "name": "SmartRoom",
                "items": [
                    "set the #room lights to #brightness",
                    "switch #status light in the #room",
                    ""
                ]
            },
            {
                "name": "PlayMusic",
                "items":[
                    "Play the #sort #genre songs",
                    "I want to hear #playlist on #service",
                    "Put on #artist album"
                ]
            }
        ],
        "entities":[
            {
                "name":"room",
                "items":[
                    "kitchen",
                    "bedroom",
                    "bathroom"
                ]
            },
            {
                "name":"brightness",
                "items":[
                    "zero",
                    "one",
                    "two",
                    "three",
                    "...",
                    "hundred"
                ]
            },
            {
                "name":"status",
                "items":[
                    "on",
                    "off"
                ]
            },
            {
                "name":"sort",
                "items":[
                    "best",
                    "top five",
                    "top ten"
                ]
            },
            {
                "name":"genre",
                "items":[
                    "soul",
                    "rnb",
                    "pop",
                    "house"
                ]
            },
            {
                "name":"playlist",
                "items":[
                    "Just Like Heaven",
                    "Modern Love",
                    "Blue Monday"
                ]
            },
            {
                "name":"service",
                "items":[
                    "spotify",
                    "sound cloud",
                    "amazon music",
                    "youtube"
                ]
            },
            {
                "name":"artist",
                "items":[
                    "michel jackson",
                    "bob marley",
                    "beyoncé",
                    "céline dion"
                ]
            }
        ]
    }
}
```

- Create an empty language model using the API `[POST] /langmodel/{modelId}`. Then, add intents/entities to the model using the APIs `[POST] /langmodel/{modelId}/(intent|entity)/{name}`.

After creating the language model, the final step is to generate the corresponding decoding graph using the API `[GET] /langmodel/{modelId}/generate/graph`. You can then use the generated model to create a service and use it for decoding as explained previously.

## APIs
Here is a list of the main APIs with a brief summary of what they do:
### Service Manager



#### ** /service/{serviceId} **

Create/Update/Delete a LinTO Platform STT service


  `get`  


 Make a GET request
  Arguments :
  -  **{String} serviceId** : service ID

  **{json}** : Return a JSON with service's information

  `post`  


 Make a POST request
  Arguments :
  -  **{String} serviceId** : service ID
  -  **{Integer} replicas**: Number of LinTO Platform STT service instances
  -  **{String} tag**: LinTO Platform STT mode (offline|online)
  -  **{String} languageModel**: Corresponding ASR language model __'modelId'__ that will be used by the current service

  **{Json}** : Return a JSON with the update status

  `put`  


 Make a PUT request
  Arguments :
  -  **{String} serviceId** : service ID
  -  **{Integer} replicas (optional)**: Number of LinTO Platform STT service instances
  -  **{String} tag (optional)**: LinTO Platform STT mode (offline|online)
  -  **{String} languageModel (optional)**: Corresponding ASR language model __'modelId'__ that will be used by the current service

  **{Json}** : Return a JSON with the update status

  `delete`  


 Make a DELETE request
  Arguments :
  -  **{String} serviceId** : service ID

  **{Json}** : Return a JSON with the update status

#### ** /service/{serviceId}/start **

Start __n instances__ (containers) of LinTO Platform STT service


  `post`  


 Make a POST request

  Arguments :
  -  **{String} serviceId** : service ID

  **{json}** : Return a JSON with the update status

#### ** /service/{serviceId}/stop **

Stop/Remove __n instances__ (containers) of LinTO Platform STT service


  `post`  


 Make a POST request

  Arguments :
  -  **{String} serviceId** : service ID

  **{json}** : Return a JSON with the update status

#### ** /service/{serviceId}/scale/{replicas} **

Scale UP/DOWN the number of instances (containers) of the running LinTO Platform STT service


  `post`  


 Make a POST request

  Arguments :
  -  **{String} serviceId** : service ID
  -  **{Integer} replicas (optional)**: Number of LinTO Platform STT service instances

  **{json}** : Return a JSON with the update status

#### ** /services/ **


  `get`  


 Make a GET request
  **{json}** : Return a JSON with all created services




### Acoustic Model Manager


#### ** /acmodel/{modelId} **

Create/Update/Delete a LinTO Platform STT Acoustic Model


  `get`  


 Make a GET request
  Arguments :
  -  **{String} modelId** : acoustic model ID

  **{json}** : Return a JSON with acoustic model's information

  `post`  


 Make a POST request
  Arguments :
  -  **{String} modelId** : acoustic model ID
  -  **{File} file**: Local Reference (file format: zip, tar.gz)
  -  **{String} link**: URL Reference (file format: zip, tar.gz)
  -  **{String} lang**: Transcription Language (ISO Language Code Table: ar-SA, de-DE, en-GB, en-US, es-ES, fr-FR, etc.)
  -  **{String} desc**: Description

  **{Json}** : Return a JSON with the update status

  `delete`  


 Make a DELETE request
  Arguments :
  -  **{String} modelId** : acoustic model ID

  **{Json}** : Return a JSON with the update status

#### ** /acmodels/ **


  `get`  


 Make a GET request
  **{json}** : Return a JSON with all created models





### Language Model Manager



#### ** /langmodel/{modelId} **

Create/Update/Delete a LinTO Platform STT Language Model

Multiple type of models could be created using differents parameters:

1- a pretrained model (file, link)

2- a copy of an already posted model (lmodelId)

3- a specific data (i.e., vocabulary and text) (data)

4- an empty model (no parameter is specified)

NOTE: either the acousticModel or lang could be fulfilled



  `get`  


 Make a GET request
  Arguments :
  -  **{String} modelId** : language model ID

  **{json}** : Return a JSON with language model's information

  `post`  


 Make a POST request
  Arguments :
  -  **{String} modelId** : language model ID
  -  **{File} file**: Local Reference (file format: zip, tar.gz)
  -  **{String} link**: URL Reference (file format: zip, tar.gz)
  -  **{String} lmodelId**: Corresponding ASR Language Model 'modelId' of an existing model (used to create a copy)
  -  **{Object} data**: Language model content (a) JSON object)
  -  **{String} lang**: Transcription Language (ISO Language Code Table: ar-SA, de-DE, en-GB, en-US, es-ES, fr-FR, etc.)
  -  **{String} acousticModel**: Corresponding ASR Acoustic Model 'modelId' that will be used with the current model during decoding
  -  **{String} lang**: Language model type: large vocabulary (lvcsr) or command (cmd)

  **{Json}** : Return a JSON with the update status

  `delete`  


 Make a DELETE request
  Arguments :
  -  **{String} modelId** : language model ID

  **{Json}** : Return a JSON with the update status

#### ** /langmodels/ **


  `get`  


 Make a GET request
  **{json}** : Return a JSON with all created models







### Language Model Intent/Entity Managers

These APIs can be used to create a user-specific language model



#### ** /langmodel/{modelId}/(entity|intent)/{name} **

Create/Update/Delete a LinTO Platform STT Language Model entity|intent


  `get`  


 Make a GET request
  Arguments :
  -  **{String} modelId** : language model ID
  -  **{String} name** : entity|intent Name

  **{json}** : Return a JSON with intent|enliketity's information

  `post`  


 Make a POST request
  Arguments :
  -  **{String} modelId** : language model ID
  -  **{String} name** : entity|intent Name
  -  **{File} file**: Local Reference (text file)
  -  **{Array[String]} entity|intent**: 
  **{Json}** : Return a JSON with the update status

  `put`  


 Make a PUT request
  Arguments :
  -  **{String} modelId** : language model ID
  -  **{String} name** : entity|intent Name
  -  **{File} file**: Local Reference (text file)
  -  **{Array[String]} entity|intent**: 
  **{Json}** : Return a JSON with the update status

  `patch`  


 Make a PATCH request
  Arguments :
  -  **{String} modelId** : language model ID
  -  **{String} name** : entity|intent Name
  -  **{File} file**: Local Reference (text file)
  -  **{Array[String]} entity|intent**: 
  **{Json}** : Return a JSON with the update status

  `delete`  


 Make a DELETE request
  Arguments :
  -  **{String} modelId** : language model ID
  -  **{String} name** : entity|intent Name

  **{Json}** : Return a JSON with the update status

#### ** /langmodels/ **


  `get`  


 Make a GET request
  **{json}** : Return a JSON with all created models
