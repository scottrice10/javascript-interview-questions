/*
given a sorted array, find the index of an element
using a binary search algorithm.

Test for linear vs binary by applying a data set that
exhibits the desired characteristics.
*/

/**
 * example usage
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
**/

var binarySearch = function(array, element, midPoint) {
  var lastIndex = array.length - 1;
  if(typeof midPoint === 'undefined'){
    midPoint = Math.floor(lastIndex / 2);
  }

  if(element < array[0] || element > array[lastIndex]){
    return null;
  }

  if(array[midPoint] === element){
    return midPoint;
  }

  if(array[midPoint] > element){
    return binarySearch(array, element, Math.floor(midPoint / 2));
  }

  if(array[midPoint] < element){
    return binarySearch(array, element, Math.ceil(midPoint + ((lastIndex - midPoint) / 2)))
  }
};