/*jshint node:true */

'use strict';

var optionale = require('optionale');
var isUndefined = require('lodash.isundefined');

var decimal;

/**
 * Returns arbitrary precision library if available or undefined otherwise
 *
 * @return {*}
 */
exports.load = function load() {
  decimal = optionale.any(['big.js', 'bignumber.js', 'decimal.js']);

  return decimal;
};

/**
 * Returns true if arbitrary precision is available and false otherwise
 *
 * @return {Boolean} Arbitrary precision availability
 */
exports.isAvailable = function isAvailable() {
  return !isUndefined(decimal);
};
