/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures.
 *
 */
var deepEquals = function(apple, orange) {
  var isEquivalent = true;

  if(apple === orange){
    return true;
  }

  if(apple.length !== orange.length){
    return false;
  }

  var recurse = function(subApple, subOrange){
    if(typeof apple !== typeof orange || typeof subApple === 'number' || typeof subApple === 'string'){
      if(subApple !== subOrange){
        isEquivalent = false;
      }

      return;
    }

    if(typeof subApple === 'array'){
      subApple.forEach(function(subSubApple, i){
        recurse(subSubApple, subOrange[i]);
      });
    }

    if(typeof subApple === 'object'){
      for(var key in subApple){
        recurse(subApple[key], subOrange[key]);
      }
    }
  };

  recurse(apple, orange);

  return isEquivalent;
};
