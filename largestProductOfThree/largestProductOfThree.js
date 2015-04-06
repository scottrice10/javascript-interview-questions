/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function (array) {
   var largestProduct = 0;

   for(var j=0;j<array.length;j++){
      if(array[j] < largestProduct){
         largestProduct = array[j];
      }
   }

   var recurse = function (currProd, subArray, count) {
      if (count === 3) {
         if (currProd > largestProduct) {
            largestProduct = currProd;
         }

         return;
      }

      for (var i = 0; i < subArray.length; i++) {
         recurse(currProd * subArray[i], subArray.slice(0, i).concat(subArray.slice(i + 1)), count + 1);
      }
   };

   recurse(1, array, 0);

   return largestProduct;
};
