'use strict';

var randomAge     = require('random-age');
var randomNatural = require('random-natural');

module.exports = function (options) {

  options = options || {};

  var now = new Date();
  var year;

  if (options.min || options.max) {
    year = randomNatural(options);
  } else {
    year = now.getFullYear() - randomAge(options);
  }

  return new Date(year, now.getMonth(), now.getDate(), 0, 0, 0, 0);
};
