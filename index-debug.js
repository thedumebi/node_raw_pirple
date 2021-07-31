/*
 *Primary file for the api
 *
 */

//  Dependencies
var server = require("./lib/server");
var workers = require("./lib/workers");
var cli = require("./lib/cli");
var exampleDebuggingProblem = require("./lib/exampleDebugingProblem");

// Declare the app
var app = {};

// Init function
app.init = function () {
  // Start the server
  debugger;
  server.init();
  debugger;

  // Start the workers
  debugger;
  workers.init();
  debugger;

  // Start the CLI, but make sure it starts last
  debugger;
  setTimeout(function () {
    cli.init();
  }, 50);
  debugger;

  // Set foo at 1
  var foo = 1;
  console.log("Just assigned one to foo");
  debugger;

  // Increment foo
  foo++;
  console.log("Just incremented foo");
  debugger;

  // Square foo
  foo = foo * foo;
  console.log("Just squaredd foo");
  debugger;

  // Convert foo to string
  foo = foo.toString();
  console.log("Just converted foo to string");
  debugger;

  // Call the init script that would throw
  exampleDebuggingProblem.init();
  console.log("Just coalled the library");
  debugger;
};

// Execute
app.init();

// Export the app
module.exports = app;
