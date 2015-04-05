/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing only the unique characters found in both strings, in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


var commonCharacters = function(string1, string2) {
  var result = "";
  var charMap = {};

  for(var i=0;i<string2.length;i++){
    if(string2[i] !== " "){
      charMap[string2[i]] = true;
    }
  }

  for(var j=0;j<string1.length;j++){
    if(charMap[string1[j]]){
      charMap[string1[j]] = false;
      result += string1[j];
    }
  }

  return result;
};
