/**
 * Library that demonstrate something throwing when it's init is called
 *
 */

// Container for the module
var example = {};

// Init function
example.init = function () {
  // Error created initially (bar isn't defined)
  var foo = bar;
};

// Export the module
module.exports = example;
