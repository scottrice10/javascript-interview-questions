/**
 * Given two words of equal length in a dictionary write a method to transform one word into another by changing only
 * one letter at a time. The new word you get in each step must be in the dictionary.
 * Cracking the Coding Interview, Fifth Edition, p.476
 * */

function transformDictionaryWords(startWord, stopWord, dictionary) {
   var backTrackMap = null;
   var wordsTried = {};

   var recurse = function(currWord, currBackTrackMap) {
      if(currWord === stopWord) {
         backTrackMap = currBackTrackMap;
         return;
      }

      var oneEditWords = getOneEditWords(currWord, dictionary, wordsTried);

      for(var i = 0; i < oneEditWords.length; i++) {
         recurse(oneEditWords[i], currBackTrackMap.concat(oneEditWords[i]));
      }
   };

   recurse(startWord, [startWord]);

   return backTrackMap;
}

function getOneEditWords(word, dictionary, wordsTried) {
   var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var words = [];

   for(var j = 0; j < word.length; j++) {
      var temp = word[j];
      for(var i = 0; i < alphabet.length; i++) {
         // substitute one letter
         word = word.slice(0, j) + alphabet[i] + word.slice(j + 1);

         if(dictionary[word] && !wordsTried[word]) {
            wordsTried[word] = true;
            words.push(word);
         }
      }

      //switch letter back
      word = word.slice(0, j) + temp + word.slice(j + 1);
   }

   return words;
}

