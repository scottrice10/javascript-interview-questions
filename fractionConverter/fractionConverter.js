/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  var isNegative = false;
  var numerator = 0;
  var denominator = 1;

  if(number < 0) {
    isNegative = true;
    number = Math.abs(number);
  }

  var fraction = function(){
    for(var i=0;i<=10;i++){
      for(var j=1;j<=10;j++){
        if(i/j === number){
          numerator = i;
          denominator = j;
          return;
        }
      }
    }
  };

  fraction();

  var result = numerator + "/" + denominator;

  if(isNegative) {
    result = "-" + result;
  }

  return result;
};
