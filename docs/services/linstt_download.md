# Automatic Speech Recognition - LinSTT: Download


## Accoustic models
Our pre-built models are:

- Kaldi ASR, French:
    - `linSTT_AM_fr-FR_v1.0.0`: A deep Time Delay Neural Network (TDNN) model, trained on a 1700 hours of spontanious speech corpora. It has a background noise resistance. A speaker adaptation model is used to have robust predictions among speaker variability. [Download link](https://dl.linto.ai/downloads/model-distribution/acoustic-models/fr-FR/linSTT_AM_fr-FR_v1.0.0.zip)

- Kaldi ASR, English:
   - `linSTT_AM_en-US_v1.0.0`: A deep Neural Network (DNN) trained on Librispeech corpus (1000 hours of read speech based on LibriVox's audio books). The training data are freely available on [librispeech](http://www.openslr.org/12/). A speaker adaptation model is used to have robust predictions among speaker variability. [Download link](https://dl.linto.ai/downloads/model-distribution/acoustic-models/en-US/linSTT_AM_en-US_v1.0.0.zip)


## Decoding graphs
Our pre-built graphs are:

- Kaldi ASR, French:
    - `decoding graph_fr-FR_Big_v1.3.0`: This model is trained on various large corpus. Should provide the best accuracy but is a bit more resource intensive than the other models. [Download link](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/fr-FR/decoding_graph_fr-FR_Big_v1.3.0.zip)

    - `decoding_graph_fr-FR_Medium_v1.2.0`: This model is trained on four corpus. Less accurate but also slightly less resource intensive than the `decoding graph_fr-FR_Big_v1.3.0` model. [Download link](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/fr-FR/decoding_graph_fr-FR_Medium_v1.2.0.zip)

    - `decoding_graph_fr-FR_Small_v1.1.0`: This model is trained on three small corpus. Less resource intensive, suitable for use in embedded applications. [Download link](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/fr-FR/decoding_graph_fr-FR_Small_v1.1.0.zip)

