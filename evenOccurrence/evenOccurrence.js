/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  var countMap = {};

  for(var i=0;i<arr.length;i++){
    if(!countMap[arr[i]]){
      countMap[arr[i]] = {index: i, count: 1, even: false};
    } else {
      countMap[arr[i]].count += 1;
      countMap[arr[i]].even = (countMap[arr[i]].count % 2 === 0);
    }
  }

  var currLow = arr.length;
  var result = null;
  for(var key in countMap){
    if(countMap[key].even && countMap[key].index < currLow){
      currLow = countMap[key].index;
      result = parseInt(key);
    }
  }

  return result;
};
