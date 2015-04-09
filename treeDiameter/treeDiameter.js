/**
 * The diameter (or width) of binary tree is the number of tree edges on the longest path between two leaves in the tree.
 * The task is to write function that returns the width for any given binary tree.
 * Nodes in a tree are defined as {left:nodeOrNull,right:nodeOrNull}.
 */

var treeDiameter = function(value, left, right) {
  this.value = value || null;
  this.left = left || null;
  this.right = right || null;
};

function findDiameter(root) {
  var diameter = 0;

  var recurse = function(node){
    var leftMax = 0;
    var rightMax = 0;
    var left = node.left;
    var right = node.right;

    while(left){
      leftMax++;
      left = left.left;
    }

    while(right){
      rightMax++;
      right = right.right;
    }

    if(leftMax + rightMax > diameter){
      diameter = leftMax + rightMax;
    }

    if(node.left){
      recurse(node.left);
    }

    if(node.right){
      recurse(node.right);
    }
  };

  recurse(root);

  return diameter;
}
