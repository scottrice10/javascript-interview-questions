var treeDiameter = function(value, left, right) {
  this.value = value || null;
  this.left = left || null;
  this.right = right || null;
};

function findDiameter(root) { // returns max distance found in the tree.
  var diameter = 0;

  function recurse(node, nodeDepth) {
    var leftDepth = node.left ? recurse(node.left, 1) : 0;
    var rightDepth = node.right ? recurse(node.right, 1) : 0;
    var width = leftDepth + rightDepth;
    diameter = Math.max(width, diameter);
    return nodeDepth + Math.max(leftDepth, rightDepth);
  }

  // add together the left max depth and right max depth
  recurse(root, 0);

  return diameter;
}