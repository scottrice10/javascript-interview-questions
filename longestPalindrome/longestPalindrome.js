/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

var longestPalindrome = function(string) {
  var result = "";
  var length = string.length;

  var findPalindrome = function(left, right) {
    while(left >= 0 && right < length && string[right] === string[left]) {
      left--;
      right++
    }

    return string.slice(left + 1, right);
  };

  for(var i = 0; i < string.length; i++) {
    // e.g., 'aa'
    var evenPalindrome = findPalindrome(i, i + 1);

    // e.g., 'aba'
    var oddPalindrome = findPalindrome(i - 1, i + 1);

    if(evenPalindrome.length > result.length) {
      result = evenPalindrome;
    }

    if(oddPalindrome.length > result.length) {
      result = oddPalindrome;
    }
  }

  return result;
};
