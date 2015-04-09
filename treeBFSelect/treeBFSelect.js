/**
 *
 * Implement a `BFSelect` method on this Tree class.
 *
 * BFSelect accepts a filter function, calls that function on each of the nodes
 * in Breadth First order, and returns a flat array of node values of the tree
 * for which the filter returns true.
 *
 * Example:
 *   var root1 = new Tree(1);
 *   var branch2 = root1.addChild(2);
 *   var branch3 = root1.addChild(3);
 *   var leaf4 = branch2.addChild(4);
 *   var leaf5 = branch2.addChild(5);
 *   var leaf6 = branch3.addChild(6);
 *   var leaf7 = branch3.addChild(7);
 *   root1.BFSelect(function (value, depth) {
  *     return value % 2;
  *   })
 *   // [1, 3, 5, 7]
 *
 *   root1.BFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
 *   // [2, 3]
 *
 */

/*
 * Basic tree that stores a value.
 */

var BFTree = function(value) {
  this.value = value;
  this.children = [];
};

BFTree.prototype.addChild = function(value){
  this.children.push(new BFTree(value));
};

BFTree.prototype.BFSelect = function(callback){
  var activeQueue = [{node: this, depth: 0}];
  var result = [];

  while(activeQueue.length > 0){
    var obj = activeQueue.shift();
    if(callback(obj.node.value, obj.depth)){
      result.push(obj.node.value)
    }

    for(var i=0;i<obj.node.children.length;i++){
      activeQueue.push({node: obj.node.children[i], depth: obj.depth + 1});
    }
  }

  return result;
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
 */

/**
 * add an immediate child
 * (wrap values in Tree nodes if they're not already)
 */
BFTree.prototype.addChild = function(child) {
  if(!child || !(child instanceof BFTree)) {
    child = new BFTree(child);
  }

  if(!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
 * check to see if the provided tree is already a child of this
 * tree __or any of its sub trees__
 */
BFTree.prototype.isDescendant = function(child) {
  if(this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for(var i = 0; i < this.children.length; i++) {
      if(this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
 * remove an immediate child
 */
BFTree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
