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
  this.head = this.makeNode();
  this.tail = this.makeNode();
};

LinkedList.prototype.addToTail = function(value) {
  if(!this.head.value) {
    return this.head.value = value;
  }

  var listContext = this;
  var recurse = function(node) {
    if(!node.next) {
      listContext.tail.value = value;
      node.next = listContext.makeNode(value);
      return;
    }

    recurse(node.next);
  };

  return recurse(this.head);
};

LinkedList.prototype.removeHead = function() {
  var result = this.head.value;
  if(this.head.next) {
    this.head = this.head.next;
  } else {
    this.head = this.makeNode();
  }

  return result;
};

LinkedList.prototype.contains = function(target) {
  if(this.head === null) {
    return false;
  }

  var isContain = false;
  var recurse = function(node) {
    if(node.value === target) {
      return isContain = true;
    }

    if(!node.next) {
      return isContain = false
    }

    recurse(node.next);
  };

  recurse(this.head);

  return isContain;
};

LinkedList.prototype.makeNode = function(value) {
  return {
    value: value || null,
    next: null
  }
};
