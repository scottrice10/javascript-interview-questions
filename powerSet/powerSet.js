/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str){
  var result = [""];
  var strArr = [];

  // sort input string
  str = str.split("").sort(function(a,b){
    if(a > b){
      return 1;
    }

    if(a < b){
      return -1;
    }

    if(a === b){
      return 0;
    }
  });

  // filter out duplicates in input string, since returning set
  strArr.push(str[0]);
  for(var i=1;i<str.length;i++){
    if(str[i] !== str[i-1]){
      strArr.push(str[i]);
    }
  }

  var recurse = function(subset, index){

    for(var i=index;i<strArr.length;i++){
      subset += str[i];
      result.push(subset);
      recurse(subset, i + 1);
    }
  };

  recurse("", 0);

  return result;
};
