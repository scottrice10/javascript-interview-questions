/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var product = -100000000;

  var recurse = function(currProd, index, counter) {
    if(counter === 3) {
      if(currProd > product) {
        product = currProd;
      }

      return;
    }

    counter += 1;
    for(var i = index; i < array.length; i++) {
      recurse(currProd * array[i], i + 1, counter);
    }
  };

  recurse(1, 0, 0);

  return product;
};
