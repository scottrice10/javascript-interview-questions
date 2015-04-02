/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  var result = null;
  var skip = false;

  if(romanNumeral.length === 1 && DIGIT_VALUES[romanNumeral]) {
    return DIGIT_VALUES[romanNumeral];
  }

  for(var i = 0; i < romanNumeral.length; i++) {
    if(skip){
      skip = false;
      continue;
    }

    if(DIGIT_VALUES[romanNumeral[i + 1]] && DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i + 1]]) {
      result += DIGIT_VALUES[romanNumeral[i + 1]] - DIGIT_VALUES[romanNumeral[i]];
      skip = true;
    } else {
      result += DIGIT_VALUES[romanNumeral[i]]
    }
  }

  return result;
};
