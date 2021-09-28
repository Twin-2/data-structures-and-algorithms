'use strict';
const util = require('util')
const Hashtable = require('./hashTable');
const repeatedWord = require('./repeated-word')
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
// if (people.contains('David')) {
//     console.log('yup')
// } else {
//     console.log('Nope')
// }

// console.log(repeatedWord('a b c d a'))
// people.add('the', 0)
// people.add('cow', 18)
// people.add('Jumped', 0)
// people.add('jumped', 0)
// console.log(util.inspect(people, { showHidden: false, depth: null }))
// console.log(people.contains('Jumped'))
// console.log(people.contains('Mom'))
// console.log(people.contains('cow'))
console.log(repeatedWord('The Cow jumped over moon'))