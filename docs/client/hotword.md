# On device Wake-Word Spotting


### Wakeword
On device wake-word spotting is an important privacy feature. It ensures that only your voice commands are processed by the service.
Whitout it, if the detection takes place server-side, the device can potentialy become a listening device and LinTO ain't no snitch.

![LinTo](../_media/emb_wuw.png)

```linto-command-module``` is the piece of software that serve that purpose.

It is distributed directy inside the LinTO image, or build using the [os-generator](client/osgenerator) (As part of the functionnal modules).

You can also download the source or the release binary on [github](https://github.com/linto-ai/linto-command-module)

### Technology

Our Wake-Word spotting technology relies on Deep Learning. Using a lightweight Recurrent Neural Retwork model trained on [collected data]() it achieves production-ready accuracy with minimum ressource usage.

### Say 'LinTO'

Just say "*LinTO*" to start interacting with the client.

* "LinTO, what is my next appointment ?"
* "LinTO, send the last meeting summary to Olivia ?"

But what if i want to call him Alfred or Natasha ?

We published a [tool designed to create your own wakeword](client/custom_hotword) provided that you have the required data at hand.