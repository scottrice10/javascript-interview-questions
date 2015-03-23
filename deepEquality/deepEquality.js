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
  var isEqual = true;

  var recurse = function(appleElem, orangeElem) {
    if((typeof appleElem === "string" || typeof appleElem === "number") &&
    (typeof orangeElem === "string" || typeof orangeElem === "number") &&
    appleElem !== orangeElem) {
      return isEqual = false;
    }

    if(Array.isArray(appleElem)) {
      for(var i = 0; i < appleElem.length; i++) {
        recurse(appleElem[i], orangeElem[i]);
      }
    }

    if(typeof appleElem === "object") {
      for(var key in appleElem) {
        if(appleElem.hasOwnProperty(key)) {
          recurse(appleElem[key], orangeElem[key]);
        }
      }
    }
  };

  recurse(apple, orange);

  return isEqual;
};
