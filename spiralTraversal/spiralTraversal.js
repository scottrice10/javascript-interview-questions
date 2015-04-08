/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

 spiralTraversal([
 [1,2,3],
 [4,5,6],
 [7,8,9]
 ]);

 returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix, result) {
   result = result || [];

   if(matrix.length === 0) {
      return result;
   }

   // top
   var top = matrix.splice(0, 1);
   if(top.length > 0){
      result = result.concat(top[0]);
   }

   // right
   for(var i = 0; i < matrix.length; i++) {
      var right = matrix[i].splice([matrix[i].length - 1],1);
      result.push(right[0]);
   }

   //bottom
   var bottom = matrix.splice(matrix.length - 1, 1);
   if(bottom.length > 0){
      result = result.concat(bottom[0].reverse());
   }

   //left
   for(var j = matrix.length - 1; j >= 0; j--) {
      var left = matrix[j].splice(0,1);
      result.push(left[0]);
   }

   return spiralTraversal(matrix, result);
};
