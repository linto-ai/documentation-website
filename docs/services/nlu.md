# Natural Language Understanding

Natural-language understanding (NLU) is a subtopic of natural-language processing. It's an artificial intelligence that deals with machine reading comprehension. It will allow us to understand any user command based on the training data provided.

## TOCK - The Open Conversation Kit
To allow LinTO to understand any command, we have decide to make use **[Tock](http://doc.tock.ai/tock/en/)** has the open conversation kit provided.

### Installation

More information about the installation can be found on the **[repository tock-docker](https://github.com/theopenconversationkit/tock-docker)**.

We will just provide the main information allowing to run the NLP stack with docker-compose
```shell
  #get the last docker-compose file
  curl -o docker-compose.yml https://raw.githubusercontent.com/theopenconversationkit/tock-docker/master/docker-compose.yml
  #get the script to start mongo in replicaset mode
  mkdir -p scripts && curl -o scripts/setup.sh https://raw.githubusercontent.com/theopenconversationkit/tock-docker/master/scripts/setup.sh && chmod +x scripts/tup.sh
  #get the last tag
  curl -o .env https://raw.githubusercontent.com/theopenconversationkit/tock-docker/master/.env
  #launch the stack
  docker-compose up
```

The admin interface will be accessible on http://localhost where the default login/password is admin@app.com/password.