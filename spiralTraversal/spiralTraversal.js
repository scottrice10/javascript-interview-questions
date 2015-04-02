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

var spiralTraversal = function(matrix, result){
  result = result || [];

  if(matrix.length === 0){
    return result;
  }

  // top, move left to right
  result = result.concat(matrix.shift());

  //right, move top to bottom
  for(var i=0;i<matrix.length;i++){
    result = result.concat(matrix[i].splice(matrix[i].length - 1, 1));
  }

  //bottom, move right to left
  if(matrix.length > 0){
    result = result.concat(matrix.pop().reverse());
  }

  //left, move bottom to top
  for(var j=matrix.length - 1;j>=0;j--){
    result = result.concat(matrix[j].splice(0, 1));
  }

  return spiralTraversal(matrix, result)
};
