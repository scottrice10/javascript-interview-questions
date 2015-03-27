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

  if(x === 0 || y ===0){
    return 0;
  }

  if(x < 0 && y > 0 || x > 0 && y < 0){
    isNegative = true;
  }

  x = Math.abs(x);
  y = Math.abs(y);

  var recurse = function(currProd, times){
    if(y <= times){
      return product = currProd;
    }

    currProd += x;
    times += 1;

    recurse(currProd, times)
  };

  recurse(0, 0);

  if(isNegative){
    product = 0 - product;
  }

  return product;
};

var divide = function(x, y) {
  var quotient = 0;
  var isNegative = false;

  if(x === 0){
    return 0;
  }

  if(y === 0){
    return 'undefined';
  }

  if(x < 0 && y > 0 || x > 0 && y < 0){
    isNegative = true;
  }

  x = Math.abs(x);
  y = Math.abs(y);

  var recurse = function(currDivider, currQuotient){
    if(currDivider <= 0){
      return quotient = currQuotient;
    }

    currDivider -= y;
    currQuotient += 1;

    recurse(currDivider, currQuotient)
  };

  recurse(x, 0);

  if(isNegative){
    quotient = 0 - quotient;
  }

  return quotient;
};

var modulo = function(x, y) {
  var remainder = 0;

  if(x === 0){
    return 0;
  }

  if(y === 0){
    return 'undefined';
  }

  x = Math.abs(x);
  y = Math.abs(y);

  var recurse = function(currDivider, currQuotient){
    if(currDivider <= y){
      return remainder = currDivider;
    }

    currDivider -= y;
    currQuotient += 1;

    recurse(currDivider, currQuotient)
  };

  recurse(x, 0);

  return remainder;
};


