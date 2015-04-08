/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function(rotated, target, start, end, mid) {
   // Your code here:
   start = start || 0;
   end = end || rotated.length - 1;
   mid = mid || Math.floor((start + end) / 2);

   if(rotated[mid] === target) {
      return mid;
   }

   if(mid === 0 || mid === rotated.length - 1) {
      return null;
   }

   if(target > rotated[mid]) {
      if(rotated[end] < rotated[mid]) {
         return rotatedArraySearch(rotated, target, 0, mid - 1, Math.floor((start + end) / 2));
      } else {
         return rotatedArraySearch(rotated, target, mid, end, Math.ceil((start + end) / 2));
      }
   } else {
      if(rotated[mid] < rotated[end]) {
         return rotatedArraySearch(rotated, target, 0, mid - 1, Math.floor((start + end) / 2));
      } else {
         return rotatedArraySearch(rotated, target, mid, end, Math.ceil((start + end) / 2));
      }
   }
};

