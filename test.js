var jaro = require('./jaro.js');

var dictionary = ['Hello', 'Cat', 'Mouse', 'Treehouse', 'Ignoble', "Help", 'Malign'];

console.log(jaro.data.correct(dictionary, "Maline"));