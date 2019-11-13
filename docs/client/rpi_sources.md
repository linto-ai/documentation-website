# Sources
The LinTO client is based on different modules that serve different purposes:

* linto-client is the bridge between the client and the services.
* Linto-command is the module in charge of spotting the wakeword, detecting the beginning and end of user voice command.
* Linto-tts is the module that produce the voice of linto.
* Linto-ui is the GUI module.
* Linto-models contains the model using for keyword-spotting.
* Linto-client-stack is the module use to install the former ones and setup the services for each element.

Module sources can be retrieved on github:

| Module | Module Version | Repository |
|------- | -------------- | ---------- |
| linto-client | No Version | [github](https://github.com/linto-ai/linto-client) |
| linto-command-module | ![version](https://img.shields.io/github/manifest-json/v/linto-ai/linto-command-module?cacheSeconds=3600) | [github](https://github.com/linto-ai/linto-command-module) |
| linto-tts| ![version](https://img.shields.io/github/manifest-json/v/linto-ai/linto-tts-module?cacheSeconds=3600) | [github](https://github.com/linto-ai/linto-tts-module) |
| linto-ui | ![version](https://img.shields.io/github/manifest-json/v/linto-ai/linto-ui-module?cacheSeconds=3600) | [github](https://github.com/linto-ai/linto-ui-module) |
| linto-models | ![version](https://img.shields.io/github/manifest-json/v/linto-ai/linto-models?cacheSeconds=3600) | [github](https://github.com/linto-ai/linto-models) |
| linto-client-stack | ![version](https://img.shields.io/github/manifest-json/v/linto-ai/linto-client-stack?cacheSeconds=3600) | [github](https://github.com/linto-ai/linto-client-stack) |


Some module have release version for Raspberry (armv7) and destop (x86_64) that you can find [here](client/rpi_prebuilts) 
