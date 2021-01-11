# USE CASES WALKTHROUGH
In this section we will illustrate step-by-step how to setup your infrastructure to answer specific use cases.

All the steps are described throurougly in the [Post-install Tutorial](stack/postinstall.md).


## Prerequisites

* You have a functionnal LinTO Platform Stack running on a server.
* You have a mean to access the server by a Domain Name (DNS server / DNS Record / entries in /etc/hosts ...)
* This DNS entry is the one configured in `LINTO_STACK_DOMAIN` env variable in the deployed platform stack

In the following instructions references are made to:
* __LinSTT Swagger__ : Can be accessed at `[LINTO_STACK_DOMAIN]/stt-manager/api-doc/`.
* __LinTO Admin__ : Can be accessed at `[LINTO_STACK_DOMAIN]/login`

## Use cases

<style>
table.navTable {
  border-spacing: 10px;
}

table.navTable td {
  background-color: white;
  border: none;
  width: 30%;

}

td a {
  text-align: center;
  background-color:#b3e6ff;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 10px;
  padding-left: 10px;
  display:block;
  width:100%;
  height: 130 px;
  text-decoration: none;
}

.notdone {
  background-color: #a4a5a6
}

td a.notdone:hover {
  background-color: #a4a5a6
}

td a:hover {
  background-color:#3db5e4;
}
</style>

### Transcription services

This section covers the creation of transcription services.

<table class="navTable">
  <tbody>
  <tr>
    <td> <a style="text-decoration:none" href="#/use_case/command_service" target="_blank" ><b>Create a command transcription service</b></a></td>
    <td> <a style="text-decoration:none" href="#/use_case/lv_service" target="_blank" ><b>Create a large vocabulary transcription service</b></a></td>
    <td> <a style="text-decoration:none" href="#/use_case/streaming_service" target="_blank" ><b>Create a streaming transcription service</b></a></td>
  </tr>
  </tbody>
</table>

### Applications

This section covers the creation of applications.

<table class="navTable">
  <tbody>
  <tr>
    <td> <a style="text-decoration:none" href="#/use_case/web_app" target="_blank" ><b>Create a voice-command web application</b></a></td>
    <td> <a class="notdone" style="text-decoration:none" href="#/use_case/multi_app" target="_blank" ><b>Create a multi-user application</b></a></td>
    <td> <a class="notdone" style="text-decoration:none" href="#/use_case/single_app" target="_blank" ><b>Create a single device application</b></a></td>
  </tr>
  </tbody>
</table>

### Clients

This section covers the setup of user clients.

<table class="navTable">
  <tbody>
  <tr>
    <td> <a style="text-decoration:none" href="#/use_case/web_setup" target="_blank" ><b>Setup a voice-controlled web client</b></a></td>
    <td> <a class="notdone" style="text-decoration:none"  target="_blank" ><b>Setup your LinTO android clients</b></a></td>
    <td> <a class="notdone" style="text-decoration:none"  target="_blank" ><b>Setup a raspberry based LinTO client</b></a></td>
  </tr>
  </tbody>
</table>

## Other use-cases

You have a specific use in head ? You didn't find what you were looking for ? Let's us know so we can update our documentation.  