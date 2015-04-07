/**
 * Extend the Number prototype with a new method called `toEnglish`.
 * It should return the number as a string using English words.
 * Examples:
 *   (7).toEnglish(); // > "seven"
 *   (575).toEnglish(); // > "five hundred seventy-five"
 *   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
 *
 * Extra credit: Make your function support decimals.
 * Example:
 *   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
 *
 */

var numbersToWords = {
   0: 'zero',
   1: 'one',
   2: 'two',
   3: 'three',
   4: 'four',
   5: 'five',
   6: 'six',
   7: 'seven',
   8: 'eight',
   9: 'nine',
   10: 'ten',
   11: 'eleven',
   12: 'twelve',
   13: 'thirteen',
   14: 'fourteen',
   15: 'fifteen',
   16: 'sixteen',
   17: 'seventeen',
   18: 'eighteen',
   19: 'nineteen',
   20: 'twenty',
   30: 'thirty',
   40: 'forty',
   50: 'fifty',
   60: 'sixty',
   70: 'seventy',
   80: 'eighty',
   90: 'ninety'
};
var numbersToPlace = {
   1000: 'thousand',
   1000000: 'million',
   1000000000: 'billion',
   1000000000000: 'trillion',
   1000000000000000: 'quadrillion',
   1000000000000000000: 'quintillion'
};

Number.prototype.toEnglish = function() {
   var result = "";
   var number = this.toString();

   if(numbersToWords[number]) {
      return numbersToWords[number];
   }

   if(numbersToPlace[number]) {
      return numbersToPlace[number];
   }

   for(var i = 0; i < number.length; i++) {
      var place = number.length - i;
      if(place % 3 === 0) {
         if(number[i] === "0") {
            continue;
         }

         var hundreds = "";
         if(result.length !== 0) {
            hundreds = " " + hundreds;
         }

         hundreds += numbersToWords[number[i]] + " hundred";
         result += hundreds;
      }

      if(place % 3 === 2) {
         if(number[i] === "0") {
            continue;
         }

         var tens = "";
         if(result.length !== 0) {
            tens = " " + tens;
         }

         var sliceTens = number.slice(i, i + 2);
         if(numbersToWords[sliceTens]) {
            tens += numbersToWords[sliceTens];
         } else {
            tens += numbersToWords[number[i] + "0"];
         }

         result += tens;
      }

      if(place % 3 === 1) {
         var sliceOnes = number.slice(i -1, i + 1);
         if(number[i] === "0" || numbersToWords[sliceOnes]) {
            continue;
         }

         var ones = "";
         if(result.length !== 0 && number[i + 1] !== "0") {
            ones = "-" + ones;
         } else if(result.length !== 0) {
            ones = " " + ones;
         }

         ones += numbersToWords[number[i]];
         var places = Math.pow(10, place - 1);
         if(numbersToPlace[places]) {
            ones += " " + numbersToPlace[places];
         }

         result += ones;
      }
   }

   return result;
};
