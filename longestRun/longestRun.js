/**
 * Write a function that, given a string, Finds the longest run of characters
 * and returns an array containing the start and end indices of that run. If
 * there are two runs of equal length, return the first one. For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function(string) {
   var start = 0;
   var end = 0;
   var currStart = 0;
   var currEnd = 0;
   var longest = 1;

   for(var i=0;i<string.length;i++){
      if(string[currStart] !== string[currEnd]){
         if(currEnd - currStart > longest){
            start = currStart;
            end = currEnd - 1;
            longest = currEnd - currStart;
         }

         currStart = currEnd;
      }

      currEnd++;
   }

   return [start, end];
};
