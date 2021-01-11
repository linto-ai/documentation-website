# Setup your web client

The web client is the user-side interface of LinTO-platform. It allows the insertion of vocal interaction on any existing web page.

## Web client with linto-web-client.

<div style="text-align:center"><img src="../_media/use_cases/LinTOWebClient.png" /></div>

LinTO-Web-Client offers multiple tool to handle voice commands:

* An authentication handshake between the page and the stack.
* Audio acquisition and pre-processing.
* Keyword and utterance spotting.
* MQTT secure communication pipeline between the client and the server to send requests and handle responses. 
* Event/Action/Error handles to customize the interactivity of your page.

## Prerequisites

You'll need:
* An existing web application configured for your domain. ([See Create a web application](use_case/web_app))
* The authentication token generated.


## Setup

To setup linto-web-client on your web page, bring your token and follow the instruction on our [github repository](https://github.com/linto-ai/linto-web-client).