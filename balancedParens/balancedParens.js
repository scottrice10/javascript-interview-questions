/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
  var stack = [];
  var parenMap = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for(var i=0;i<input.length;i++){
    if(parenMap[input[i]]){
      stack.push(parenMap[input[i]]);
    }

    if(stack[stack.length - 1] === input[i]){
      stack.pop();
    }
  }

  return stack.length === 0;
};
