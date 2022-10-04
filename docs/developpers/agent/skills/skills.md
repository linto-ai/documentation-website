---
sidebar_label: LinTO Skills
sidebar_position: 3
---

# About LinTO Applications

LinTO Applications are created and managed within linto-admin GUI (see [Server/PostInstall](/docs/developpers/agent/server/post_install/) documentation). They are mainly built upon [Node-RED](https://nodered.org) framework. These **LinTO applications** are automatically created and configured inside embeded Node-RED server as you use linto-admin.
Once an application has been configured (Bound to NLU, STT, Chatbots...) you certainly want your **Virtual agent / Smart Assistant** to actually make something specific for your text-entries or vocal commands.

:::tip
To achieve this, you will drag'n drop Node-RED nodes, representing the skills you want to add inside the Node-Red workflow at the core of your **LinTO application**. All the customization of your application occurs directly into linto-admin web GUI as it embeds directly the Node-RED interface
:::

## Node-RED
[Node-RED](https://nodered.org) is a programming tool for wiring process, APIs and services in a simple way.
A graphical web tool is provided to define any workflow, wiring incoming data (from LinTO clients) with **any paradigm of tasks** , using your own skills and the wide range of existing or customizable nodes available in the Node-Red library.

<p align="center">
  <img src="/docs/skills/nodered/red_ui.png" alt="red_ui"/>
</p>


## Developping skills

We propose here a lot of code and content that enables you to create these **skills for LinTO**, like you would do on DialogFlow, IBM Watson or Alexa. Learn more about this Framework [here](/docs/developpers/agent/skills/components)


```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```