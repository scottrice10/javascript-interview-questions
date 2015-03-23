/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

// naive solution - 2n time complexity
var characterFrequency = function(string) {
  var charMap = {};

  for(var i=0;i<string.length;i++){
    var char = string[i];

    if(!charMap[char]){
      charMap[char] = 0;
    }

    charMap[char]++;
  }

  var charArray = [];
  for(var key in charMap){
    charArray.push([key, charMap[key]]);
  }

  charArray.sort(function(a,b){
    if(a[1] < b[1]){
      return 1;
    }

    if(a[1] > b[1]){
      return -1;
    }

    if(a[0] < b[0]){
      return -1;
    }

    if(a[0] > b[0]){
      return 1;
    }

    return 0;
  });

  return charArray;
};