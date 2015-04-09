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
   var greatestSum = 0;
   var recurse = function(currSum, index) {
      if(currSum > greatestSum) {
         greatestSum = currSum;
      }

      if(index === array.length) {
         return;
      }

      recurse(currSum + array[index], index + 1);
   };

   for(var i = 0; i < array.length; i++) {
      recurse(0, i);
   }

   return greatestSum;
};
