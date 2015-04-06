// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
   var product = 0;
   var isNegative = false;

   if(x < 0 || y < 0 && !(x < 0 && y < 0)){
      isNegative = true;
   }

   x = Math.abs(x);
   y = Math.abs(y);

   var recurse = function(currProd, multiplier){
      if(multiplier === y){
         return product = currProd;
      }

      recurse(currProd + x, multiplier + 1);
   };

   recurse(product, 0);

   if(isNegative){
      product = 0 - product;
   }

   return product;
};

var divide = function(x, y) {
   var quotient = 1;
   var isNegative = false;

   if(x < 0 || y < 0 && !(x < 0 && y < 0)){
      isNegative = true;
   }

   x = Math.abs(x);
   y = Math.abs(y);

   var recurse = function(currQuot){
      if(multiply(currQuot,y) === x){
         return quotient = currQuot;
      } else if(multiply(currQuot,y) > x){
         return quotient = currQuot - 1;
      }

      recurse(currQuot + 1);
   };

   recurse(quotient);

   if(isNegative){
      quotient = 0 - quotient;
   }

   return quotient;
};

var modulo = function(x, y) {
   var quotient = divide(x,y);

   return x - multiply(quotient,y);
};


