# get-cat-facts
Module to get "Cat facts" data (https://alexwohlbruck.github.io/cat-facts/docs/endpoints/facts.html)

## description
Modules allows to retreive from 1 to 10 random cat facts in JSON format

## usage
Install as an npm dependency
> yarn add get-cat-facts

or 
> npm i get-cat-facts 

Include in your project
> const catFacts = require('get-cat-facts')

or
> import catFacts from 'get-cat-facts

Next, use with or without parametres (number of facts)
> const results = await catFacts.random([number])
