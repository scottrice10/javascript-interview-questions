/**
 * Write a function that, given a string, Finds the longest run of characters
 * and returns an array containing the start and end indices of that run. If
 * there are two runs of equal length, return the first one. For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function(string) {
  var result = [0,0];
  var strArr = string.split("");
  var currLong = 1;
  var prevLong = 1;
  var currResult = [0, 0];

  for(var i = 1; i < strArr.length; i++) {
    if(strArr[i - 1] === strArr[i]) {
      currLong += 1;
      currResult[1] += 1;
    } else {
      currResult = [i, i];
      currLong = 1;
    }

    if(currLong > prevLong) {
      prevLong = currLong;
      result = currResult;
    }
  }

  return result;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function(len) {
};
