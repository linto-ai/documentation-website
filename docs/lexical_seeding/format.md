# Lexical Seeding

This section deal with LinTO Lexical-Seeding that enable the command model customization .

These module allow LinTO to :
  * Adapt to specific use cases using customized command models
  * Re-training of models when deploying or deleting skills and dictionaries

The part of creating your own skill is an important part of LinTO, also a new skill need to be trigger by vocal command. Unfortunately the skill created will not have any command in the trained model that's where the lexical seeding is useful. The lexical seeding will allow any command to be added to the model by following the defined format (command and dictionary)

## Command

A command is a word of string that has one goal, trigger the desired skill when the sentence is detected by the NLU. Because LinTO use a command model only the trained sentence will be detected. That's where a skill need to provide his own command to be detected by both STT (transcription) and NLU(intent). 

To add a command you will need to double-click on a skill-node in RED and edit the **Command** block

### Format Example
Here all format that LinTO support (note that all example bellow can be mixed between them)

#### Declare intent
```markdown
  ##intent_separator|intent_name|language_intent_en
```

#### Basic command
```markdown
##intent|greeting|en
- farewell
- goodbye
```

#### Multiple language command
```markdown
##intent|goodbye|en
- farewell
- goodbye
##intent|goodbye|fr
- à bientôt
- au revoir
```

#### Multiple intent command
```markdown
##intent|my_first_intent_goodbye|en
- farewell
- goodbye
##intent|my_second_intent_greeting|en
- hello
- greeting
```
### Format Entity in command
To define an entity, two way are possible, by defined entity in command or by declared dictionary

#### Defined entity
In case you don't want to create a dictionary (see bellow) you can define any entity directly in the command `[words](entity)`

```markdown
##intent|weather|en
- what's the weather in [new york](location)
- what's the weather in [new york](location) [tomorow](date)
```

#### Dictionary entity
The dictionary declaration way require to be linked to an dictionary of the same name
In the command the syntaxe is `#entity`
```markdown
##intent|weather|en
- what's the weather in #location
```

## Dictionary

A dictionary allow to group a list of words related to the same entity. Their will be located at the same place and be reusable for multiple skill. That will allow to reduce the amount of same command for create any new words entity.

To add a dictionary you will need to double-click on a dictionary-node in RED and edit the **Data** block


### Format Example
The dictionary name is used has the node name
<p align="center">
  <img src="../_media/lexical_seeding/dictionary_name.png" alt="dictionary_name"/>
</p>

Here all format example that LinTO support (note that all example bellow can be mixed between them)

#### Simple dictionary
```markdown
#en
blue
red
```

#### Multiple language dictionary
```markdown
#en
blue
red
#fr
bleu
rouge
```

#### Interlanguages of two language
In case you want to use interlanguage you will need to write the phonetic word `words|phonetic_words`

```markdown
#fr
meeting|miting
software|sauftware
afterwork|afeuterework
words|phonetic_words
```

## Duckling

### Duckling entity
A skill can also use duckling that enable strong performance for their defined entity.
Here the list of the supported duckling entity :
* `duckling:amount-of-money`
* `duckling:volume`
* `duckling:temperature`
* `duckling:datetime`
* `duckling:ordinal`
* `duckling:duration`
* `duckling:url`
* `duckling:email`
* `duckling:number`
* `duckling:phone-number`
* `duckling:distance` 

To use it for an entity, the entity name require to have in front of the entity `duckling:` in their name

```markdown
##intent|weather|en
- what's the weather in [new york](duckling:location)
- what's the weather in #duckling:location
```

## Wired command

The final step is to link the dictionary to the desired skill like the example bellow where

<p align="center">
  <img src="../_media/lexical_seeding/skill_red.png" alt="dictionary_name"/>
</p>

We can see that a skill don't require an dictionary. A dictionary can be used for one or multiple skill.
  * linto-skill-weather use the dictionary country and city
  * linto-skill-pollution use the dictionary city
  * linto-skill-welcome don't use any dictionary

