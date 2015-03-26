var treeDiameter = function(value, left, right){
  this.value = value || null;
  this.left = left || null;
  this.right = right || null;
};

// The diameter (or width) of a binary tree is the number of tree edges on the longest path between two leaves in the tree.
// The task is to write a function that returns the width for any given binary tree.
// Nodes in a tree are defined as {left:nodeOrNull,right:nodeOrNull}. The function looks like this:
function findDiameter(root) { // returns max distance found in the tree.
  var diameter = 0;

  var recurse = function(currNode, nodeDepth){
    if(currNode.left && currNode.right){
      // diameter equals left max depth + right max depth
      var leftDepth = recurse(currNode.left,1);
      var rightDepth = recurse(currNode.right,1);
      var width = leftDepth + rightDepth;
      diameter = Math.max(width,diameter);
      return nodeDepth + Math.max(leftDepth,rightDepth);
    }

    if(currNode.left){
      var leftDepth = nodeDepth + recurse(currNode.left,1);
      diameter = Math.max(leftDepth,diameter);
      return leftDepth;
    }

    if(currNode.right){
      var rightDepth = nodeDepth + recurse(currNode.right,1);
      diameter = Math.max(rightDepth,diameter);
      return rightDepth;
    }
    return nodeDepth;
  };

  // add together the left max depth and right max depth
  recurse(root, 0);

  return diameter;
}