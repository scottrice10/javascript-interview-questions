/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail.value;   //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function() {
   this.head = makeNode();
   this.tail = makeNode();
};

LinkedList.prototype.addToTail = function(val){
   // if no nodes yet in linked list, set head
   if(!this.head.value){
      this.head = makeNode(val);
      this.tail = this.head;
   } else {
      // else, iterate through nodes until next is empty, then set next to point to tail
      var node = this.head;
      while(node.next){
         node = node.next;
      }

      this.tail = makeNode(val);
      node.next = this.tail;
   }
};

LinkedList.prototype.removeHead = function(){
   if(!this.head.value){
      return null;
   }

   var temp = this.head;
   this.head = this.head.next;
   return temp.value;
};

LinkedList.prototype.contains = function(target){
   var node = this.head;
   while(node.next){
      if(node.next.value === target){
         return true;
      }

      node = node.next;
   }

   return false;
};

function makeNode(val){
   return {
      next: null,
      value: val || null
   };
}
