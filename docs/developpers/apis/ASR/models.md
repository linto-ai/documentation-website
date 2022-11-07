---
sidebar_label: Models download
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Automatic Speech Recognition Models

## By LINAGORA - French, English, Arabic

We propose models for a few language, but we do it right, achieving beyond state of the art performance and accuracy for French, Arabic and English

:::tip
Those models are the most generic ones, achieving best all-over performance, we however maintain specific accoustic models for business use-cases like heavily noisy environment, aeroplanes, phones, call-centers and decoding graphs for specific vocabulary, like medical or banking... contact us to learn more.
:::

<Tabs>
<Tabitem value="French v2" label="French v2">

#### Acoustic model
- A deep Time Delay Neural Network (TDNN) model, trained on a large spontanious speech corpora. Data augmentation was applied to increase the quantity of training data and to simulate artificially some environment conditions (noise, speaker). The full corpus after data augmentation is approximately 7100 hours.

[2.0.0 AM download](https://dl.linto.ai/downloads/model-distribution/acoustic-models/fr-FR/linSTT_AM_fr-FR_v2.0.0.zip)

- A deep neural network architecture (~30M parameters). This model is trained on the same data (7100 hours).

[2.2.0 AM download](https://dl.linto.ai/downloads/model-distribution/acoustic-models/fr-FR/linSTT_AM_fr-FR_v2.2.0.zip)

#### Decoding graph
- This model is trained on multiple text corpus from different resources. It requires important memory resource on the one hand and provides very accurate transcription.

[2.1.0 LM download](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/fr-FR/decoding_graph_fr-FR_Medium_v2.1.0.zip)

- This model is trained on various large corpus. Should provide best accuracy but is a bit more resource intensive than the other models.

[2.2.0 LM download](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/fr-FR/decoding_graph_fr-FR_Big_v2.2.0.zip)

</Tabitem>

<Tabitem value="French v1" label="French v1">

#### Acoustic model
- A deep Time Delay Neural Network (TDNN) model, trained on a 1700 hours of spontanious speech corpora. It has a background noise resistance. A speaker adaptation model is used to have robust predictions among speaker variability.

[1.0.0 AM download](https://dl.linto.ai/downloads/model-distribution/acoustic-models/fr-FR/linSTT_AM_fr-FR_v1.0.0.zip)

#### Decoding graph
- This model is trained on small corpus. It is a small Model (100Mo) which generates an acceptable transcription but is very suitable for use in embedded applications.

[1.1.0 LM download](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/fr-FR/decoding_graph_fr-FR_Small_v1.1.0.zip)

- This model is trained on much more corpus than the small one. It requires important memory resource on the one hand and provides very accurate transcription.

[1.2.0 LM download](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/fr-FR/decoding_graph_fr-FR_Medium_v1.2.0.zip)

- This model is trained on various large corpus. Should provide the best accuracy but is a bit more resource intensive than the other models.

[1.3.0 LM download](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/fr-FR/decoding_graph_fr-FR_Big_v1.3.0.zip)

</Tabitem>


<Tabitem value="English US" label="English US">

#### Acoustic model
- A chain model based on TDNN-F, trained on a 1000 hours with volume and speed perturbation.

[v1 AM download](https://dl.linto.ai/downloads/model-distribution/acoustic-models/en-US/linSTT_AM_en-US_v1.0.0.zip)

#### Decoding graph
- Two language model are used for the decoding. A **medium model** is used to perform the decoding pass. A **big model**, trained on a large corpus of books, is used to perform the rescoring pass.

[v1.1 LM download](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/en-US/decoding_graph_en-US_v1.1.0.zip)

- This model is trained on various large corpus. Should provide the best accuracy but is a bit more resource intensive than the other models.

[v1.2 LM download](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/en-US/decoding_graph_en-US_Big_v1.2.0.zip)

</Tabitem>


<Tabitem value="Arabic" label="Arabic">

#### Acoustic model
- A chain model based on  deep Time Delay Neural Network (TDNN), trained on a 1200 hours of Arabic broadcast data.

[v1 AM download](https://dl.linto.ai/downloads/model-distribution/acoustic-models/ar-AR/LinSTT_AM_ar-AR_v1.0.0.zip)

#### Decoding graph
- This language model is trained on small arabic text corpus. It is trained with SRILM tools.

[v1.1 LM download](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/ar-AR/decoding_graph_ar-AR_v1.1.0.zip)

</Tabitem>


</Tabs>

## Community built models & Other languages


<table class="table table-bordered">
  <thead>
    <tr>
      <th>Model</th>
      <th>Size</th>
      <th>Word error rate/Speed</th>
      <th>Notes</th>
      <th>License</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>English</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-en-us-0.15.zip">vosk-model-small-en-us-0.15</a></td>
      <td>40M</td>
      <td>9.85 (librispeech test-clean) 10.38 (tedlium)</td>
      <td>Lightweight wideband model for Android and RPi</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-en-us-0.22.zip">vosk-model-en-us-0.22</a></td>
      <td>1.8G</td>
      <td>5.69 (librispeech test-clean) 6.05 (tedlium) 29.78(callcenter)</td>
      <td>Accurate generic US English model</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-en-us-0.22-lgraph.zip">vosk-model-en-us-0.22-lgraph</a></td>
      <td>128M</td>
      <td>7.82 (librispeech) 8.20 (tedlium)</td>
      <td>Big US English model with dynamic graph</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>English Other</strong></td>
      <td>&nbsp;</td>
      <td><strong>Older Models</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-en-us-daanzu-20200905.zip">vosk-model-en-us-daanzu-20200905</a></td>
      <td>1.0G</td>
      <td>7.08 (librispeech test-clean)  8.25 (tedlium)</td>
      <td>Wideband model for dictation from <a href="https://github.com/daanzu/kaldi-active-grammar">Kaldi-active-grammar</a> project</td>
      <td>AGPL</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-en-us-daanzu-20200905-lgraph.zip">vosk-model-en-us-daanzu-20200905-lgraph</a></td>
      <td>129M</td>
      <td>8.20 (librispeech test-clean) 9.28 (tedlium)</td>
      <td>Wideband model for dictation from <a href="https://github.com/daanzu/kaldi-active-grammar">Kaldi-active-grammar</a> project with configurable graph</td>
      <td>AGPL</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-en-us-librispeech-0.2.zip">vosk-model-en-us-librispeech-0.2</a></td>
      <td>845M</td>
      <td>TBD</td>
      <td>Repackaged Librispeech model from <a href="https://kaldi-asr.org/models/m13">Kaldi</a>, not very accurate</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-en-us-zamia-0.5.zip">vosk-model-small-en-us-zamia-0.5</a></td>
      <td>49M</td>
      <td>11.55 (librispeech test-clean) 12.64 (tedlium)</td>
      <td>Repackaged Zamia model f_250, mainly for research</td>
      <td>LGPL-3.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-en-us-aspire-0.2.zip">vosk-model-en-us-aspire-0.2</a></td>
      <td>1.4G</td>
      <td>13.64 (librispeech test-clean) 12.89 (tedlium) 33.82(callcenter)</td>
      <td>Kaldi original ASPIRE model, not very accurate</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-en-us-0.21.zip">vosk-model-en-us-0.21</a></td>
      <td>1.6G</td>
      <td>5.43 (librispeech test-clean) 6.42 (tedlium) 40.63(callcenter)</td>
      <td>Wideband model previous generation</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Indian English</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-en-in-0.5.zip">vosk-model-en-in-0.5</a></td>
      <td>1G</td>
      <td>36.12 (NPTEL Pure)</td>
      <td>Generic Indian English model for telecom and broadcast</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-en-in-0.4.zip">vosk-model-small-en-in-0.4</a></td>
      <td>36M</td>
      <td>49.05 (NPTEL Pure)</td>
      <td>Lightweight Indian English model for mobile applications</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Chinese</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-cn-0.22.zip">vosk-model-small-cn-0.22</a></td>
      <td>42M</td>
      <td>23.54 (SpeechIO-02) 38.29 (SpeechIO-06) 17.15 (THCHS)</td>
      <td>Lightweight model for Android and RPi</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-cn-0.22.zip">vosk-model-cn-0.22</a></td>
      <td>1.3G</td>
      <td>13.98 (SpeechIO-02) 27.30 (SpeechIO-06) 7.43 (THCHS)</td>
      <td>Big generic Chinese model for server processing</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Chinese Other</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-cn-kaldi-multicn-0.15.zip">vosk-model-cn-kaldi-multicn-0.15</a></td>
      <td>1.5G</td>
      <td>17.44 (SpeechIO-02) 9.56 (THCHS)</td>
      <td>Original Wideband Kaldi multi-cn model from <a href="https://kaldi-asr.org/models/m11">Kaldi</a> with Vosk LM</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Russian</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-ru-0.22.zip">vosk-model-ru-0.22</a></td>
      <td>1.5G</td>
      <td>5.74 (our audiobooks) 13.35 (open_stt audiobooks) 20.73 (open_stt youtube) 37.38 (openstt calls) 8.65 (golos crowd) 19.71 (sova devices)</td>
      <td>Big mixed band Russian model for server processing</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-ru-0.22.zip">vosk-model-small-ru-0.22</a></td>
      <td>45M</td>
      <td>22.71 (openstt audiobooks) 31.97 (openstt youtube) 29.89 (sova devices) 11.79 (golos crowd)</td>
      <td>Lightweight wideband model for Android/iOS and RPi</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Russian Other</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-ru-0.10.zip">vosk-model-ru-0.10</a></td>
      <td>2.5G</td>
      <td>5.71 (our audiobooks) 16.26 (open_stt audiobooks) 26.20 (public_youtube_700_val open_stt) 40.15 (asr_calls_2_val open_stt)</td>
      <td>Big narrowband Russian model for server processing</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>French</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-fr-0.22.zip">vosk-model-small-fr-0.22</a></td>
      <td>41M</td>
      <td>23.95 (cv test) 19.30 (mtedx) 27.25 (podcast)</td>
      <td>Lightweight wideband model for Android/iOS and RPi</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-fr-0.22.zip">vosk-model-fr-0.22</a></td>
      <td>1.4G</td>
      <td>14.72 (cv test) 11.64 (mls) 13.10 (mtedx) 21.61 (podcast) 13.22 (voxpopuli)</td>
      <td>Big accurate model for servers</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>French Other</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-fr-pguyot-0.3.zip">vosk-model-small-fr-pguyot-0.3</a></td>
      <td>39M</td>
      <td>37.04 (cv test) 28.72 (mtedx) 37.46 (podcast)</td>
      <td>Lightweight wideband model for Android and RPi trained by <a href="https://github.com/pguyot/zamia-speech/releases">Paul Guyot</a></td>
      <td>CC-BY-NC-SA 4.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-fr-0.6-linto-2.2.0.zip">vosk-model-fr-0.6-linto-2.2.0</a></td>
      <td>1.5G</td>
      <td>16.19 (cv test) 16.44 (mtedx) 23.77 (podcast) 0.4xRT</td>
      <td>Model from <a href="https://doc.linto.ai/#/services/linstt">LINTO</a> project</td>
      <td>AGPL</td>
    </tr>
    <tr>
      <td><strong>German</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-de-0.21.zip">vosk-model-de-0.21</a></td>
      <td>1.9G</td>
      <td>9.83 (Tuda-de test), 24.00 (podcast) 12.82 (cv-test) 12.42 (mls) 33.26 (mtedx)</td>
      <td>Big German model for telephony and server</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-de-tuda-0.6-900k.zip">vosk-model-de-tuda-0.6-900k</a></td>
      <td>4.4G</td>
      <td>9.48 (Tuda-de test), 25.82 (podcast) 4.97 (cv-test) 11.01 (mls) 35.20 (mtedx)</td>
      <td>Latest big wideband model from <a href="https://github.com/uhh-lt/kaldi-tuda-de">Tuda-DE</a> project</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-de-zamia-0.3.zip">vosk-model-small-de-zamia-0.3</a></td>
      <td>49M</td>
      <td>14.81 (Tuda-de test, 37.46 (podcast)</td>
      <td>Zamia f_250 small model repackaged (not recommended)</td>
      <td>LGPL-3.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-de-0.15.zip">vosk-model-small-de-0.15</a></td>
      <td>45M</td>
      <td>13.75 (Tuda-de test), 30.67 (podcast)</td>
      <td>Lightweight wideband model for Android and RPi</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Spanish</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-es-0.42.zip">vosk-model-small-es-0.42</a></td>
      <td>39M</td>
      <td>16.02 (cv test) 16.72 (mtedx test) 11.21 (mls)</td>
      <td>Lightweight wideband model for Android and RPi</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-es-0.42.zip">vosk-model-es-0.42</a></td>
      <td>1.4G</td>
      <td>7.50 (cv test) 10.05 (mtedx test) 5.84 (mls)</td>
      <td>Big model for Spanish</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Portuguese/Brazilian Portuguese</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-pt-0.3.zip">vosk-model-small-pt-0.3</a></td>
      <td>31M</td>
      <td>68.92 (coraa dev) 32.60 (cv test)</td>
      <td>Lightweight wideband model for Android and RPi</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-pt-fb-v0.1.1-20220516_2113.zip">vosk-model-pt-fb-v0.1.1-20220516_2113</a></td>
      <td>1.6G</td>
      <td>54.34 (coraa dev) 27.70 (cv test)</td>
      <td>Big model from <a href="https://gitlab.com/fb-resources/kaldi-br">FalaBrazil</a></td>
      <td>GPLv3.0</td>
    </tr>
    <tr>
      <td><strong>Greek</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-el-gr-0.7.zip">vosk-model-el-gr-0.7</a></td>
      <td>1.1G</td>
      <td>TBD</td>
      <td>Big narrowband Greek model for server processing, not extremely accurate though</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Turkish</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-tr-0.3.zip">vosk-model-small-tr-0.3</a></td>
      <td>35M</td>
      <td>TBD</td>
      <td>Lightweight wideband model for Android and RPi</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Vietnamese</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-vn-0.3.zip">vosk-model-small-vn-0.3</a></td>
      <td>32M</td>
      <td>TBD</td>
      <td>Lightweight wideband model for Android and RPi</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Italian</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-it-0.22.zip">vosk-model-small-it-0.22</a></td>
      <td>48M</td>
      <td>16.88 (cv test) 25.87 (mls) 17.01 (mtedx)</td>
      <td>Lightweight model for Android and RPi</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-it-0.22.zip">vosk-model-it-0.22</a></td>
      <td>1.2G</td>
      <td>8.10 (cv test) 15.68 (mls) 11.23 (mtedx)</td>
      <td>Big generic Italian model for servers</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Dutch</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-nl-0.22.zip">vosk-model-small-nl-0.22</a></td>
      <td>39M</td>
      <td>22.45 (cv test) 26.80 (tv) 25.84 (mls) 24.09 (voxpopuli)</td>
      <td>Lightweight model for Dutch</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Dutch Other</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-nl-spraakherkenning-0.6.zip">vosk-model-nl-spraakherkenning-0.6</a></td>
      <td>860M</td>
      <td>20.40 (cv test) 32.64 (tv) 17.73 (mls) 19.96 (voxpopuli)</td>
      <td>Medium Dutch model from <a href="https://github.com/opensource-spraakherkenning-nl/Kaldi_NL">Kaldi_NL</a></td>
      <td>CC-BY-NC-SA</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-nl-spraakherkenning-0.6-lgraph.zip">vosk-model-nl-spraakherkenning-0.6-lgraph</a></td>
      <td>100M</td>
      <td>22.82 (cv test) 34.01 (tv) 18.81 (mls) 21.01 (voxpopuli)</td>
      <td>Smaller model with dynamic graph</td>
      <td>CC-BY-NC-SA</td>
    </tr>
    <tr>
      <td><strong>Catalan</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-ca-0.4.zip">vosk-model-small-ca-0.4</a></td>
      <td>42M</td>
      <td>TBD</td>
      <td>Lightweight wideband model for Android and RPi for Catalan</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Arabic</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-ar-mgb2-0.4.zip">vosk-model-ar-mgb2-0.4</a></td>
      <td>318M</td>
      <td>16.40 (MGB-2 dev set)</td>
      <td>Repackaged Arabic model trained on MGB2 dataset from <a href="https://kaldi-asr.org/models/m9">Kaldi</a></td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Farsi</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-fa-0.4.zip">vosk-model-small-fa-0.4</a></td>
      <td>47M</td>
      <td>TBD</td>
      <td>Lightweight wideband model for Android and RPi for Farsi (Persian)</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-fa-0.5.zip">vosk-model-fa-0.5</a></td>
      <td>1G</td>
      <td>TBD</td>
      <td>Model with large vocabulary, not yet accurate but better than before (Persian)</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-fa-0.5.zip">vosk-model-small-fa-0.5</a></td>
      <td>60M</td>
      <td>TBD</td>
      <td>Bigger small model for desktop application (Persian)</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Filipino</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-tl-ph-generic-0.6.zip">vosk-model-tl-ph-generic-0.6</a></td>
      <td>320M</td>
      <td>TBD</td>
      <td>Medium wideband model for Filipino (Tagalog) by <a href="https://github.com/feddybear/flipside_ph">feddybear</a></td>
      <td>CC-BY-NC-SA 4.0</td>
    </tr>
    <tr>
      <td><strong>Ukrainian</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-uk-v3-nano.zip">vosk-model-small-uk-v3-nano</a></td>
      <td>73M</td>
      <td>TBD</td>
      <td>Nano model from <a href="https://github.com/egorsmkv/speech-recognition-uk">Speech Recognition for Ukrainian</a></td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-uk-v3-small.zip">vosk-model-small-uk-v3-small</a></td>
      <td>133M</td>
      <td>TBD</td>
      <td>Small model from <a href="https://github.com/egorsmkv/speech-recognition-uk">Speech Recognition for Ukrainian</a></td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-uk-v3.zip">vosk-model-uk-v3</a></td>
      <td>343M</td>
      <td>TBD</td>
      <td>Bigger model from <a href="https://github.com/egorsmkv/speech-recognition-uk">Speech Recognition for Ukrainian</a></td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-uk-v3-lgraph.zip">vosk-model-uk-v3-lgraph</a></td>
      <td>325M</td>
      <td>TBD</td>
      <td>Big dynamic model from <a href="https://github.com/egorsmkv/speech-recognition-uk">Speech Recognition for Ukrainian</a></td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Kazakh</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-kz-0.15.zip">vosk-model-small-kz-0.15</a></td>
      <td>42M</td>
      <td>9.60(dev) 8.32(test)</td>
      <td>Small mobile model from <a href="https://github.com/IS2AI/ISSAI_SAIDA_Kazakh_ASR">SAIDA_Kazakh</a></td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-kz-0.15.zip">vosk-model-kz-0.15</a></td>
      <td>378M</td>
      <td>8.06(dev) 6.81(test)</td>
      <td>Bigger wideband model <a href="https://github.com/IS2AI/ISSAI_SAIDA_Kazakh_ASR">SAIDA_Kazakh</a></td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Swedish</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-sv-rhasspy-0.15.zip">vosk-model-small-sv-rhasspy-0.15</a></td>
      <td>289M</td>
      <td>TBD</td>
      <td>Repackaged model from <a href="https://github.com/rhasspy/sv_kaldi-rhasspy">Rhasspy project</a></td>
      <td>MIT</td>
    </tr>
    <tr>
      <td><strong>Japanese</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-ja-0.22.zip">vosk-model-small-ja-0.22</a></td>
      <td>48M</td>
      <td>9.52(csj CER) 17.07(ted10k CER)</td>
      <td>Lightweight wideband model for Japanese</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-ja-0.22.zip">vosk-model-ja-0.22</a></td>
      <td>1Gb</td>
      <td>8.40(csj CER) 13.91(ted10k CER)</td>
      <td>Big model for Japanese</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Esperanto</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-eo-0.42.zip">vosk-model-small-eo-0.42</a></td>
      <td>42M</td>
      <td>7.24 (CV Test)</td>
      <td>Lightweight model for Esperanto</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Hindi</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-hi-0.22.zip">vosk-model-small-hi-0.22</a></td>
      <td>42M</td>
      <td>20.89 (IITM Challenge) 24.72 (MUCS Challenge)</td>
      <td>Lightweight model for Hindi</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-hi-0.22.zip">vosk-model-hi-0.22</a></td>
      <td>1.5Gb</td>
      <td>14.85 (CV Test) 14.83 (IITM Challenge) 13.11 (MUCS Challenge)</td>
      <td>Big accurate model for servers</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Czech</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-cs-0.4-rhasspy.zip">vosk-model-small-cs-0.4-rhasspy</a></td>
      <td>44M</td>
      <td>21.29 (CV Test)</td>
      <td>Lightweight model for Czech from Rhasspy project</td>
      <td>MIT</td>
    </tr>
    <tr>
      <td><strong>Polish</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-small-pl-0.22.zip">vosk-model-small-pl-0.22</a></td>
      <td>50.5M</td>
      <td>18.36 (CV Test) 16.88 (MLS Test) 11.55 (Voxpopuli Test)</td>
      <td>Lightweight model for Polish for Android</td>
      <td>Apache 2.0</td>
    </tr>
    <tr>
      <td><strong>Speaker identification model</strong></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><a href="https://alphacephei.com/vosk/models/vosk-model-spk-0.4.zip">vosk-model-spk-0.4</a></td>
      <td>13M</td>
      <td>TBD</td>
      <td>Model for speaker identification, should work for all languages</td>
      <td>Apache 2.0</td>
    </tr>
  </tbody>
</table>
