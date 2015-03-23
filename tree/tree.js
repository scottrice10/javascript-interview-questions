/* Implement a tree using prototypal instantiation.
 Your tree should have methods named "addChild" and "contains".
 */

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value) {
  var tree = Object.create(treeMaker.methods);
  tree.value = value;
  tree.children = [];
  return tree;
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value) {
  this.children.push(value);
};

treeMaker.methods.contains = function(target) {
  return this.children.indexOf(target) > -1;
};

