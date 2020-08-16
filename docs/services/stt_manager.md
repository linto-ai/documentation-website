# STT Service Manager

Our STT Service Manager is a service that manages the scalabitily of linSTT services depending on the number of queries (scale up or down the number of replicas of each service). Docker swarm is used as a container orchestration tool, meaning that it allows the user to manage multiple containers deployed across multiple host machines. Along with that, this service is designed to manage the linSTT decoding models, i.e. acoustic models and the decoding graph.

![Docker Swarm](../../_media/stt-manager/docker_swarm.png)

### Summary
- [Installation](services/stt_manager_installation): installation, configuration, and execution
- [How2use](services/stt_manager_how2use): APIs definition and use guidelines