# Transcription service(s) management

Our LinTO Platform Service Manager is a service that manages the scalabitily of linTO Platform STT services depending on the number of queries (scale up or down the number of replicas of each service). Docker swarm is used as a container orchestration tool, meaning that it allows the user to manage multiple containers deployed across multiple host machines. Along with that, this service is designed to manage the linTO Platform STT decoding models, i.e. acoustic models and the decoding graph.

![Docker Swarm](/docs/stt-manager/docker_swarm.png)

## Summary
- [How2use](services/stt_manager_how2use): APIs definition and use guidelines

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```