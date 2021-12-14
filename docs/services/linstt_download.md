# Automatic Speech Recognition - LinSTT: Download

LinSTT is an offline speech recognition service. It enables speech recognition models for French language actually and for English, Spanish and German soon. It provide high continuous large vocabulary transcription.

## French Language Models
Our pre-built models are:


<!-- tabs:start -->

#### ** Speech Recognition Models v1 **


### Acoustic model
>  `linSTT_AM_fr-FR_v1.0.0`  <br>
>>  <b  style="color:green;">Description</b> :
>> - A deep Time Delay Neural Network (TDNN) model, trained on a 1700 hours of spontanious speech corpora. It has a background noise resistance. A speaker adaptation model is used to have robust predictions among speaker variability.
>
>   **Download Link** : [\[...\]/linSTT_AM_fr-FR_v1.0.0.zip](https://dl.linto.ai/downloads/model-distribution/acoustic-models/fr-FR/linSTT_AM_fr-FR_v1.0.0.zip)


### Decoding graphs
>  `decoding_graph_fr-FR_Small_v1.1.0`  <br>
>>  <b  style="color:green;">Description</b> :
>> - This model is trained on small corpus. It is a small Model (100Mo) which generates an acceptable transcription but is very suitable for use in embedded applications.
>
>   **Download Link** : [\[...\]/decoding_graph_fr-FR_Small_v1.1.0.zip](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/fr-FR/decoding_graph_fr-FR_Small_v1.1.0.zip)


>  `decoding_graph_fr-FR_Medium_v1.2.0`  <br>
>>  <b  style="color:green;">Description</b> :
>> - This model is trained on much more corpus than the small one. It requires important memory resource on the one hand and provides very accurate transcription.
>
>   **Download Link** : [\[...\]/decoding_graph_fr-FR_Medium_v1.2.0.zip](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/fr-FR/decoding_graph_fr-FR_Medium_v1.2.0.zip)


>  `decoding_graph_fr-FR_Big_v1.3.0`  <br>
>>  <b  style="color:green;">Description</b> :
>> - This model is trained on various large corpus. Should provide the best accuracy but is a bit more resource intensive than the other models.
>
>   **Download Link** : [\[...\]/decoding_graph_fr-FR_Big_v1.3.0.zip](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/fr-FR/decoding_graph_fr-FR_Big_v1.3.0.zip)






#### ** Speech Recognition Models v2 **


### Acoustic model
>  `linSTT_AM_fr-FR_v2.0.0`  <br>
>>  <b  style="color:green;">Description</b> :
>> - A deep Time Delay Neural Network (TDNN) model, trained on a large spontanious speech corpora. Data augmenation was applied to increase the quantity of training data and to simulate artificially some environment conditions (noise, speaker). The full corpus after data augmentation is approximately 7100 hours.
>
>   **Download Link** : [\[...\]/linSTT_AM_fr-FR_v2.0.0.zip](https://dl.linto.ai/downloads/model-distribution/acoustic-models/fr-FR/linSTT_AM_fr-FR_v2.0.0.zip)

>  `linSTT_AM_fr-FR_v2.2.0`  <br>
>>  <b  style="color:green;">Description</b> :
>> - A deep neural network architecture (~30M parameters). This model is trained on the same data (7100 hours)
>
>   **Download Link** : [\[...\]/linSTT_AM_fr-FR_v2.2.0.zip](https://dl.linto.ai/downloads/model-distribution/acoustic-models/fr-FR/linSTT_AM_fr-FR_v2.2.0.zip)

### Decoding graphs
>  `decoding_graph_fr-FR_Medium_v2.1.0`  <br>
>>  <b  style="color:green;">Description</b> :
>> - This model is trained on multiple text corpus from different resources. It requires important memory resource on the one hand and provides very accurate transcription.
>
>   **Download Link** : [\[...\]/decoding_graph_fr-FR_Medium_v2.1.0.zip](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/fr-FR/decoding_graph_fr-FR_Medium_v2.1.0.zip)


>  `decoding_graph_fr-FR_Big_v2.2.0`  <br>
>>  <b  style="color:green;">Description</b> :
>> - This model is trained on various large corpus. Should provide the best accuracy but is a bit more resource intensive than the other models.
>
>   **Download Link** : [\[...\]/decoding_graph_fr-FR_Big_v2.2.0.zip](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/fr-FR/decoding_graph_fr-FR_Big_v2.2.0.zip)



<!-- tabs:end -->




## English Language Models

<!-- tabs:start -->

#### ** Speech Recognition Models v1 **


### Acoustic model
>  `linSTT_AM_en-US_v1.0.0`  <br>
>>  <b  style="color:green;">Description</b> :
>> - A chain model based on TDNN-F, trained on a 1000 hours, with volume and speed perturbation.
>
>   **Download Link** : [\[...\]/linSTT_AM_en-US_v1.0.0.zip](https://dl.linto.ai/downloads/model-distribution/acoustic-models/en-US/linSTT_AM_en-US_v1.0.0.zip)


### Decoding graphs
>  `decoding_graph_en-US_v1.0.0`  <br>
>>  <b  style="color:green;">Description</b> :
>> - Two language model are used for the decoding. A <b> medium model</b> is used to perform the decoding pass. A <b>big model</b>, trained on a large corpus of books, is used to perform the rescoring pass.
>
>   **Download Link** : [\[...\]/decoding_graph_en-US_v1.0.0.zip](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/en-US/decoding_graph_en-US_v1.0.0.zip)



<!-- tabs:end -->



## Arabic Language Models

<!-- tabs:start -->

#### ** Speech Recognition Models v1 **


### Acoustic model
>  `linSTT_AM_ar-AR_v1.0.0`  <br>
>>  <b  style="color:green;">Description</b> :
>> - A chain model based on TDNN, trained on a 1200 hours of Arabic broadcast data.
>
>   **Download Link** : [\[...\]/linSTT_AM_ar-AR_v1.0.0.zip](https://dl.linto.ai/downloads/model-distribution/acoustic-models/ar-AR/LinSTT_AM_ar-AR_v1.0.0.zip)


### Decoding graphs
>  `decoding_graph_ar-AR_v1.0.0`  <br>
>>  <b  style="color:green;">Description</b> :
>> - This language model is trained on small arabic text corpus. It is trained with SRILM tools.
>
>   **Download Link** : [\[...\]/decoding_graph_ar-AR_v1.0.0.zip](https://dl.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/ar-AR/decoding_graph_ar-AR_v1.0.0.zip)



<!-- tabs:end -->




















