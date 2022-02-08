/**
 * @file 
 * Find the Jaro similarity between two words,
 * then return that word. Basically spell-check
*/
 var HashMap = require('hashmap');
/**
* Finds the word in the dictionary that has the 
* highest Jaro similarity value to the
* input word
* @param dictionary
* The list of correctly spelled words
* 
* @param input
* The incorrectly spelled word
*/
var search = function (dictionary, input) {
	var sims = new HashMap();
	var ref = [];

	for(var i = 0; i < dictionary.length; i++) {
		var template = dictionary[i].toLowerCase();
		var similar_number = sim(template, input);
		sims.set(similar_number, template);
		ref.push(similar_number);
	}
	var number_match = Math.max.apply(null, ref); 
	console.log("Did you mean " + sims.get(number_match) + "?");
}
/**
* Pushes the matched character quantity as well as
* the length of the word into Jaro similarity function
* 
* @param template
* The list of correctly spelled words
* 
* @param input
* The incorrectly spelled word
*/
var sim = function (template, input) {
	var s1 = template.length;
	var s2 = template.length;

	var matches = matching(template, input);
	if (matches <= 0) return 0;
	var transpositions = matches/2;

	var similar = (0.3333*((matches/s1)+(matches/s2)+((matches-transpositions)/matches)));

	return similar;
}
/**
* Finds characters in the words that match
*
* @param template
* The list of correctly spelled words
* 
* @param input
* The incorrectly spelled word
*/
var matching = function (template, input) {
	var matches = 0;

	for (var i = 0; i < template.length; i++) {
		for (var j = 0; j < input.length; j++) {
			if (template.charAt(i) == input.charAt(j)) matches++;
		}
	}
	return matches;
}
/**
* Makes data accessible elsewhere
* @constructor
*
* @param dictionary
* The list of correctly spelled words
* 
* @param input
* The incorrectly spelled word
*/
var methods = {
	correct: function(dictionary, input) {
		search(dictionary, input);
	}
};

exports.data = methods;