# Lexical Seeding

This section deal with LinTo Lexical-Seeding, it's enable the command model customization.

These module allow LinTO to :
  * Customized an use cases command models
  * Re-training a models after deploying or deleting skills and dictionaries

The part of creating your own skill is an important part of LinTO, also a new skill need to be trigger by vocal command. Unfortunately the skill created will not have any command in the trained model that's where lexical seeding is useful. It will allow any command to be added to the model by following the defined format (command and dictionary)

## Command

A command is a string with one goal, trigger the desired skill when the sentence is detected by the NLU. Only the trained sentence will be detected. So a  skill need to provide his own command for STT (transcription) and NLU(intent). 

To add a command for a skill, you will need to double-click on a linto-skill-node in RED and edit the **Command** block

### Intent format
Here the supported intent format (all example can be mixed between them)

#### Declare intent
```markdown
  ##intent|intent_name|intent_language
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
##intent|my_first_intent_greeting|en
- hello
- greeting
##intent|my_second_intent_goodbye|en
- farewell
- goodbye
```
### Entity format
Here the supported format for entity (in command or by dictionary)

#### Defined entity
Entity can be define in command : `[words](entity)`

```markdown
##intent|weather|en
- what's the weather in [new york](location)
- what's the weather in [new york](location) [tomorow](date)
```

#### Dictionary entity
Dictionary entity need to be wired to the desired skill. It allow to load all entity from the dictionary to the skill
In the command the syntaxe is `#dictionary_name`
```markdown
##intent|weather|en
- what's the weather in #location
- what's the weather in #location #date
```

## Dictionary

A dictionary allow to group a list of words related to the same entity. A dictionary is reusable for multiple skill. It allow to reduce the amount entity declaration from a skill command.

To add a dictionary you need to double-click on a dictionary-node in RED and edit the **Data** block.


### Format Example
Dictionary name is used has the node name.
<p align="center">
  <img src="../_media/lexical_seeding/dictionary_name.png" alt="dictionary_name"/>
</p>

Here the supported format for a dictionary (note that all example bellow can be mixed between them)

#### Simple dictionary
```markdown
##en
blue
red
```

#### Multiple language dictionary
```markdown
##en
blue
red
##fr
bleu
rouge
```

#### Interlanguages of two language
In case you want to use interlanguage you will need to write the phonetic desired of the words `words|phonetic_words`

```markdown
##fr
meeting|miting
software|sauftware
afterwork|afeuterework
words|phonetic_words
```

## Duckling

### Duckling entity
Entity support duckling. Duckling will add entity information as structured data.
The supported duckling entity :
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

To use an duckling entity, just declare it like a normal entity :

```markdown
##intent|weather|en
- what's the weather in [new york](duckling:location)
- what's the weather in #duckling:location
```

## Wired example

To use a dictionary, you need to link it to the desired skill.

<p align="center">
  <img src="../_media/lexical_seeding/skill_red.png" alt="dictionary_name"/>
</p>

We can see that a skill don't require a dictionary. A dictionary can be used for one or multiple skill.
  * linto-skill-weather use the dictionary country and city
  * linto-skill-pollution use the dictionary city
  * linto-skill-welcome don't use any dictionary

