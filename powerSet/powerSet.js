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
   var charSet = {};
   var charArray = [];

   for(var j=0;j<str.length;j++){
      charSet[str[j]] = true;
   }
   charArray = Object.keys(charSet);

   var recurse = function(tempString, index){
      if(index === str.length){
         return;
      }

      for(var i=index;i<charArray.length;i++){
         var currRes = tempString + charArray[i];
         result.push(currRes);
         recurse(currRes, i + 1);
      }
   };

   recurse("", 0);

   return result;
};
