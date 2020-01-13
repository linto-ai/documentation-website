# Automatic Speech Recognition - LinSTT: Get Started 


installation (using docker)
configuration (env, models, ...)
execute (alone, under service manager)

## Installation

### Packaged in Docker
To start the LinSTT service on your local machine or your cloud, you need first to download the [source code](https://github.com/linto-ai/linto-platform-stt-standalone-worker) and set the environment file, as follows:

```bash
git clone https://github.com/linto-ai/linto-platform-stt-standalone-worker
cd linto-platform-stt-standalone-worker
mv .envdefault .env
```

Then, to build the docker image, execute:

```bash
docker build -t lintoai/linto-platform-stt-standalone-worker .
```

Or by docker-compose, by using:
```bash
docker-compose build
```


Or, download the pre-built image from docker-hub:

```bash
docker pull lintoai/linto-platform-stt-standalone-worker:latest
```

NB: You must install docker on your machine. See installation instruction in [Infrastructure](infra?id=prerequistes)

## Configuration
The LinSTT service that will be set-up here require KALDI models, the acoustic model and the decoding graph. Indeed, these models are not included in the repository; you must download them in order to run LinSTT. You can use our pre-trained models from here: [linstt download](services/linstt_download).

### Outside LinTO-Platform-STT-Service-Manager

If you want to use our service alone without LinTO-Platform-STT-Service-Manager, you must `unzip` the files and put the extracted ones in the [shared storage](infra?id=shared-storage). For example,

1- Download the French acoustic model and the small decoding graph

```bash
wget https://gamma.linto.ai/downloads/model-distribution/acoustic-models/fr-FR/linSTT_AM_fr-FR_v1.0.0.zip
wget https://gamma.linto.ai/downloads/model-distribution/decoding-graphs/LVCSR/fr-FR/decoding_graph_fr-FR_Small_v1.0.0.zip
```

2- Uncompress both files

```bash
unzip linSTT_AM_fr-FR_v1.0.0.zip -d AM_fr-FR
unzip decoding_graph_fr-FR_Small_v1.0.0.zip -d DG_fr-FR_Small
```

3- Move the uncompressed files into the shared storage directory

```bash
mv AM_fr-FR ~/linto_shared/data
mv DG_fr-FR_Small ~/linto_shared/data
```

4- Configure the environment file `.env` included in the repository `linto-platform-stt-standalone-worker`

    AM_PATH=/full/path/to/linto_shared/data/AM_fr-FR
    LM_PATH=/full/path/to/linto_shared/data/DG_fr-FR_Small


NB: if you want to use the visual user interface of the service, you need also to configure the swagger file `document/swagger.yml` included in the repository `linto-platform-stt-standalone-worker`. Specifically, in the section `host`, specify the adress of the machine in which the service is deployed.

### Using LinTO-Platform-STT-Service-Manager
In case you want to use `LinTO-Platform-STT-Service-Manager`, you need to:

1- Create an acoustic model and upload the approriate file

2- Create a language model and upload the corresponding decoding graph

3- Configure the environmenet file of this service.

For more details, see configuration instruction in [LinTO - Manager](services/manager?id=configuration)

## Execute
In order to run the service alone, you have only to execute:

```bash
cd linto-platform-stt-standalone-worker
docker-compose up
```

To run and manager LinSTT under `LinTO-Platform-STT-Service-Manager` service, you need to create a service first and then to start it. See [LinTO - Manager](services/manager?id=execute)

### Run Example Applications
To run an automated test go to the test folder

```bash
cd linto-platform-stt-standalone-worker/test
```

And run the test script:

```bash
./run.sh
```