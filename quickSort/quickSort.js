/** Quick Sort
 * Runtime: O(n Log(n)) average, O(n^2) worst case. Memory O(Log(n)).
 *
 * In quick sort, we pick a random element and partition the array, such that all numbers
 * that are less than the partitioning element come before all elements that are greater
 * than it. The partitioning can be performed efficiently through a series of swaps.
 *
 * It we repeatedly partition the array (and its sub-arrays) around an element, the array will
 * eventually become sorted. However, as the partitioned element is not guaranteed to be
 * the median (or anywhere near the median), our sorting could be very slow. This is the
 * reason for the O(n^2) worst case runtime.
 **/

function quickSort(array, left, right){
  left = left || 0;
  right = right || array.length - 1;
  var index = partition(array, left,right);

  // sort left half
  if(left < index - 1){
    quickSort(array, left, index - 1);
  }

  // sort right half
  if(index < right){
    quickSort(array, index, right);
  }

  return array;
}

function partition(array, left, right){
  // pick pivot point
  var pivot = array[Math.floor((left + right) / 2)];
  while(left <= right){
    // Find element on left that should be on right
    while(array[left] < pivot){
      left++;
    }

    // Find element on right that should be on left
    while(array[right] > pivot){
      right--;
    }

    // Swap elements, and move left and right indices
    if(left <= right){
      // swap elements
      var temp = array[left];
      array[left] = array[right];
      array[right] = temp;

      left++;
      right--;
    }
  }

  return left;
}
