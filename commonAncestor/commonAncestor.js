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

var Tree = commonAncestor = function(value) {
  this.children = [];
  this.value = value || null;
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
Tree.prototype.getClosestCommonAncestor = function(root1, root2) {
  var result = null;
  var root1Path = this.getAncestorPath(root1);
  var root2Path = this.getAncestorPath(root2);

  if(!root1Path || !root2Path) {
    return null;
  }

  for(var i = 0; i < root1Path.length; i++) {
    if(root1Path[i] === root2Path[i]){
      result = root1Path[i];
    }
  }

  return result;
};

/**
 * should return the ancestral path of a child to this node.
 * more examples:
 * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
 * 2.) mom.getAncestorPath(me) -> [mom, me]
 * 3.) me.getAncestorPath(me) -> [me]
 * 4.) grandma.getAncestorPath(H R Giger) -> null
 */
Tree.prototype.getAncestorPath = function(targetNode) {
  var result = null;

  var recurse = function(currNode, currPath) {
    if(targetNode.value === currNode.value) {
      return result = currPath;
    }

    currNode.children.forEach(function(child) {
      recurse(child, currPath.concat(child.value));
    });
  };

  recurse(this, [this.value]);

  return result;
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
