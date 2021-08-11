/**
 * Unit Tests
 *
 */

// Dependencies
var helpers = require("../lib/helpers");
var logs = require("../lib/logs");
var exampleDebuggingProblem = require("../lib/exampleDebugingProblem");
var assert = require("assert");

// Holder for Tests
var unit = {};

// Assert that the getANumber function is returning a number
unit["helpers.getANumber should return a number"] = function (done) {
  var val = helpers.getANumber();
  assert.strictEqual(typeof val, "number");
  done();
};

// Assert that the getANumber function returns 1
unit["helpers.getANumber should return 1"] = function (done) {
  var val = helpers.getANumber();
  assert.strictEqual(val, 1);
  done();
};

// Assert that the getANumber function is returning 2
unit["helpers.getANumber should return 2"] = function (done) {
  var val = helpers.getANumber();
  assert.strictEqual(val, 2);
  done();
};

// Logs.list should callback an array and a false error
unit["logs.list should callback a false error and an array of log names"] =
  function (done) {
    logs.list(true, function (err, logFileNames) {
      assert.strictEqual(err, false);
      assert.ok(logFileNames instanceof Array);
      assert.ok(logFileNames.length > 1);
      done();
    });
  };

// Logs.truncate should not throw if the logId deosn't exist
unit[
  "logs.list should callback a false error and an array of log names.truncate shouldn't throw if the logId doesn't exist, should callback an error instead"
] = function (done) {
  assert.doesNotThrow(function () {
    logs.truncate("I don not exist", function (err) {
      assert.ok(err);
      done();
    });
  }, TypeError);
};

// exampleDebuggineProblem.init should not throw (but it does)
unit["exampleDebuggingProblem.init should not throw when called"] = function (
  done
) {
  assert.doesNotThrow(function () {
    exampleDebuggingProblem.init();
    done();
  }, TypeError);
};

// Export the tests to the runner
module.exports = unit;
