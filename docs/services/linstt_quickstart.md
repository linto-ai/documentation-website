# Automatic Speech Recognition - LinSTT: Introduction


## LinSTT
Generally, Automatic Speech Recognition (ASR) is the task of recognition and translation of spoken language into text. Our ASR system takes advantages from the recent advances in machine learning technologies and in particular deep learning ones (TDNN, LSTM, attentation-based architecture). The core of our system consists of two main components: an acoustic model and a decoding graph. A high-performance ASR system relies on an accurate acoustic model as well as a perfect decoding graph.

![LinSTT](../../_media/linstt.png)


### Technologies
- Flask framework is used to develop the application. It is an open-source lightweight WSGI web application framework.
- Our transcriber is mainly based on KALDI toolkit. KALDI is an open-source toolkit designed to build a speech recognition system. it is writtent in C++ and licensed under the Apache License v2.0.


## Acoustic Model
The Acoustic Model (AM) is used to represent the relationship between the speech signal and the phonemes that are basic units of sound acoustically realized in a language. Using an annotated speech corpus, this model is trained on a set of audio recordings and their corresponding transcripts.

You can find a description and a download link of the available models here: [Acoustic Models](services/download?id=accoustic-models)

## Decoding Graph
The Decoding Graph (DG) aims at capturing automatically the linguistic knowledge (syntax, semantics, etc.) about the target language from a large corpus text and helps to select the best option for a word transcription.

You can download the available graphs from here: [Decoding graphs](services/download?id=decoding-graphs)
