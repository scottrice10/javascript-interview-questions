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

var binarySearch = function(array, element, left, right, midPoint) {
  left = left || 0;
  right = right || array.length - 1;
  midPoint = midPoint || Math.floor((left + right) / 2);

  if(element === array[midPoint]){
    return midPoint;
  }

  // return null if element is not in array
  if(midPoint === 0 || midPoint === array.length - 1){
    return null;
  }

  // go to right half of array
  if(element > array[midPoint]){
    return binarySearch(array, element, midPoint, right, Math.ceil((midPoint + right) / 2));
  }

  // go to left half of array
  if(element < array[midPoint]){
    return binarySearch(array, element, left, midPoint, Math.floor((left + midPoint) / 2));
  }
};
