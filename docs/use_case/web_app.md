# Web Client Application
A voice command service allows the web-page user to interact with the content using command sentences.

## Prerequisites
In order to create a web client application you'll need:
* A Command transcription service. (<a href="#/use_case/command_service" target="_blank" >Create a command transcription service</a>)
* Access to __admin interface__ at `[LINTO_STACK_DOMAIN]/`. 

## Deploy a voice command service on a web-page

To deploy such a service you will need:
* To create an application.
* To setup your application functionnalities.

#### 1- Create an Application
Now it is time to set up your application. To do so you might connect to the administation interface.

**Create your application** 

Once logged in, go to multi-user application and create a new application.

Setup the application `name`, `description`. The `workflow template` can be set with the default template or you can use a previously created one.

In the `STT command service` select the transcription service you previously created.

If you have created a online transcription service and/or a large vocabulary file transcription service you may select them in the appropriate fields.

In the `tock application` field choose *Create a new tock application*.

**Manage your application domain access**

To allow distant web pages to access your new application we need to authorize them.

On the admin interface, go to `Domains` and click on add a domain.

Add your web page url and create the domain.
On your newly created domain select Manage and select your application.

The number of slot is the limit of concurrent instance allowed to connect to the service and submit requests. Set your desired amount and press associate.

With the domain associated you will be provided with an authentication token you need to connect the web client to the server.

#### 2- Set Application functionnalities.

To select the functionnalities available for your application take a look at [customize your application](stack/postinstall?id=Customize-your-application).

#### 3- Setup your web page.

<a href="#/use_case/web_setup" > Setup your web page.</a>
