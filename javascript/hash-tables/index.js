'use strict';
const util = require('util')
const Hashtable = require('./hashTable');

let people = new Hashtable(5);


people.add('David', 25)
people.add('Daniel', 25)
people.add('Jonathan', 30)
people.add('Able', 32)
people.add('Esther', 35)
people.add('Jonah', 37)
people.add('Caleb', 39)
people.add('Naomi', 41)
people.add('Mom', 69)
people.add('Dad', 73)
console.log(util.inspect(people, { showHidden: false, depth: null }))