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
    var numerator = "";
    var denominator = "";
    var isNegative = false;
    var result = "";
    
    if(number < 0){
        isNegative = true;
    }
    
    var recurse = function(currNum, currDenom){
        if(currNum / currDenom === number){
          numerator = currNum;
          denominator = currDenom;
          return;
        }
        
        if(currNum / currDenom > number){
          recurse(currNum, currDenom + 1);
        } else {
          recurse(currNum + 1, currDenom);
        }
    }
    
    recurse(1,1);
    
    result = numerator + "/" + denominator;
    if(isNegative){
        result = "-" + result;
    }
    
    return result;
};
