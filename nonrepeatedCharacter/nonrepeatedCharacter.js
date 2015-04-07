/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function (string) {
   var charMap = {};

   for(var i=0;i<string.length;i++){
      if(!charMap[string[i]]){
         charMap[string[i]] = 0;
      }

      charMap[string[i]]++;
   }

   for(var j=0;j<string.length;j++){
      if(charMap[string[j]] === 1){
         return string[j];
      }
   }

   return null;
};
