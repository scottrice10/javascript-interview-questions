/* Implement a tree using prototypal instantiation.
 Your tree should have methods named "addChild" and "contains".
 */

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value) {
   this.value = value || null;
   this.children = [];
};

treeMaker.prototype.addChild = function(value) {
   this.children.push(new treeMaker(value));
};

treeMaker.prototype.contains = function(target) {
   var doesContain = false;
   var recurse = function(node) {
      if(node.value === target) {
         return doesContain = true;
      }

      for(var i = 0; i<node.children.length; i++) {
         recurse(node.children[i]);
      }
   };

   recurse(this);

   return doesContain;
};

