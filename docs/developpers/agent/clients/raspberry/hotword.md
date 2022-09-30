---
sidebar_position: 3
---
# On device Wake-Word Spotting

### Wakeword
On device wake-word spotting is an important privacy feature. It ensures that only your voice commands are processed by the service.
Whitout it, if the detection takes place server-side, the device can potentialy become a listening device and LinTO ain't no snitch.

![LinTo](/docs/emb_wuw.png)

```linto-command-module``` is the piece of software that serve that purpose.

It is distributed directy inside the LinTO image, or integrated using the [os-generator](/docs/developpers/agent/clients/raspberry/osgenerator) (As part of the functionnal modules).

You can also download the source or the release binary on [github](https://github.com/linto-ai/linto-command-module).

The latest generated wake-word model can be found [here](https://dl.linto.ai/downloads/model-distribution/KWS/linto-latest.tar.gz).

### Technology

Our Wake-Word spotting technology relies on Deep Learning. Using a lightweight Recurrent Neural Retwork model trained on [collected data](https://dl.linto.ai/downloads/datasets/2020-05-09-linto-corpus-public.tar.gz) it achieves production-ready accuracy with minimum ressource usage.

### Say 'LinTO'

Just say "*LinTO*" to start interacting with the client.

* "LinTO, what is my next appointment ?"
* "LinTO, send the last meeting summary to Olivia ?"

But what if i want to call him Alfred or Natasha ?

We published a [tool designed to create your own wakeword](/docs/developpers/agent/clients/custom_hotwords/) provided that you have the required data at hand.
