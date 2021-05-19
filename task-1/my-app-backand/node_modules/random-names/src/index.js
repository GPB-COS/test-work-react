/*jshint esnext: true */
var uniqueRandomArray = require('unique-random-array');
var randomNames = require('./random-names.json');

module.exports = {
	all: randomNames,
	random: uniqueRandomArray(randomNames)
};
