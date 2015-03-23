/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time and O(1) space
var sumArray = function(array) {
  var sum = 0;

  var recurse = function(index, currSum) {
    if(currSum > sum) {
      sum = currSum;
    }

    if(index < array.length) {
      recurse(index + 1, currSum + array[index]);
    }
  };

  for(var i = 0; i < array.length; i++) {
    recurse(i + 1, array[i]);
  }

  return sum;
};
