/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

var nthFibonacci = function(n) {
  var result = 0;
  var resultMap = {};
  resultMap[0] = 0;
  resultMap[1] = 1;

  var recurse = function(index){
    if(resultMap[n]){
      result = resultMap[n];
      return;
    }

    index += 1;
    if(index > 1){
      resultMap[index] = resultMap[index - 2] + resultMap[index - 1];
    }

    recurse(index);
  };

  recurse(0);

  return result;
};



