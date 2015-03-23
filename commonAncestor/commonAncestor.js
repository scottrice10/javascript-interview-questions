/**
 * implement the function `getClosestCommonAncestor` and `getAncestorPath`
 * in the following Tree class
 */

/** example usage:
 * var grandma = new Tree();
 * var mom = new Tree();
 * grandma.addChild(mom);
 * var me = new Tree();
 * mom.addChild(me);
 * grandma.getAncestorPath(me); // => [grandma, mom, me]
 */

var Tree = commonAncestor = function(val) {
  this.children = [];
  this.val = val;
};

/**
 * add an immediate child
 */
Tree.prototype.addChild = function(child) {
  if(!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

/**
 * return the lowest common ancestor of the two child nodes.
 * (assume for these examples that only a women can be the parent of a child)
 * more examples:
 *  1.) between me and my brother -> my mom
 *  2.) between me and my cousin -> my grandma
 *  3.) between my grandma and my grandma -> my grandma
 *  4.) between me and a potato -> null
 */
// The this context needs to be the family matriarch
Tree.prototype.getClosestCommonAncestor = function(person1, person2) {
  var closest = null;
  if(person1 === person2) {
    return person1.val;
  }

  var person1Path = this.getAncestorPath(person1);
  var person2Path = this.getAncestorPath(person2);

  if(person1Path && person2Path){
    var index = person2Path.length - 1;
    for(var i = person1Path.length - 1; i >= 0; i--) {
      if(person2Path[index] && person2Path[index] === person1Path[i]) {
        closest = person1Path[i];
        break;
      }

      index -= 1;
    }
  }

  return closest;
};

/**
 * should return the ancestral path of a child to this node.
 * more examples:
 * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
 * 2.) mom.getAncestorPath(me) -> [mom, me]
 * 3.) me.getAncestorPath(me) -> [me]
 * 4.) grandma.getAncestorPath(noOne) -> null
 */
Tree.prototype.getAncestorPath = function(person) {
  var path = null;
  if(this === person) {
    return [this.val];
  }

  var ancestorPath = function(node, nodeArray) {
    if(node.children.indexOf(person) !== -1) {
      return path = nodeArray.concat(person.val);
    } else {
      for(var i = 0; i < node.children.length; i++) {
        ancestorPath(node.children[i], nodeArray.concat(node.children[i].val));
      }
    }
  };

  ancestorPath(this, [this.val]);

  return path;
};

/**
 * check to see if the provided tree is already a child of this
 * tree __or any of its sub trees__
 */
Tree.prototype.isDescendant = function(child) {
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
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if(index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};
