'use strict';

var randomNatural = require('random-natural');


var ageRange = {
  child: { min: 1, max: 12 },
  teen: { min: 13, max: 19 },
  adult: { min: 18, max: 65 },
  senior: { min: 65, max: 100 },
  all: { min: 1, max: 120 }
};

module.exports = function (options) {

  var range = options && options.type && ageRange[options.type] || ageRange.all;

  range.inspected = true;

  return randomNatural(range);
};
