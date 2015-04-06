/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

var longestPalindrome = function(string) {
   var result = "";

   for(var i = 0; i < string.length; i++) {
      var evenLongest = findEvenLongestPalindrome(string, i);
      var oddLongest = findOddLongestPalindrome(string, i);

      if(evenLongest.length > result.length) {
         result = evenLongest;
      }

      if(oddLongest.length > result.length) {
         result = oddLongest;
      }
   }

   return result;
};

var findOddLongestPalindrome = function(string, index) {
   var left = index;
   var right = index;

   while(string[left] === string[right]) {
      right++;
      left--;
   }

   return string.slice(left + 1, right);
};

var findEvenLongestPalindrome = function(string, index) {
   var left = index;
   var right = index;

   while(string[left] === string[right]) {
      right++;
   }

   return string.slice(left, right);
};
