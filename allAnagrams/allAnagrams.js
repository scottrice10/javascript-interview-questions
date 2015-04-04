/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

// O(n^2) time complexity
var allAnagrams = function(string) {
  var result = [];

  var recurse = function(currStr, remainingChars){
    if(remainingChars.length === 0){
      return result.push(currStr);
    }

    for(var i=0;i<remainingChars.length;i++){
      recurse(currStr + remainingChars[i], remainingChars.slice(0,i) + remainingChars.slice(i + 1))
    }
  };

  recurse("", string);

  return result;
};
