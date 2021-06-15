
# LinTO Workflow
Business-Logic-Server (BLS) is the LinTO workflow manager based on the framework [Node-RED](https://nodered.org). It's a programming tool for wiring different piece of node. Each node is customizable for their own action allowing LinTo to be flexible.

## Node-RED
Node-RED is a programming tool for wiring process, APIs and services in a simple ways.
A graphical tool is provided allowing to define any workflow (or process), wire them with multiple task using the wide range of existing or customizable nodes.

## Process Manager
Process manager allow us to create any workflow or tasks for specific case. A workflow is define by a numbers of tasks to be executed in a specific order.

LinTO process start with an user voice, followed by the natural language understanding to the skill to proceed for generate the text to speech. For administrative actions we use [LinTO-Platform-Admin](https://github.com/linto-ai/linto-platform-admin) to create, edit or delete a workflow.

With these framework we can easily extended LinTO action by creating new nodes for is palette. By default we include a set of skill in the platform which enable LinTO to do the basic command (speech to text, natural language understanding) regrouped in [LinTO-Skill-Core](https://github.com/linto-ai/linto-skills-core).

## Web View
<p align="center">
  <img src="../_media/skills/nodered/red_ui.png" alt="red_ui"/>
</p>
