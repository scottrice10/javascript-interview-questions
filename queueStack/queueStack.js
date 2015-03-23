/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this._storage = [];
  this.length = 0;
};

Stack.prototype.push = function(val){
  this.length += 1;
  this._storage[this.length - 1] = val;
};

Stack.prototype.pop = function(){
  var result = null;
  if(this.length > 0){
    result = this._storage[this.length - 1];
    this.length -= 1;
  }

  return result;
};

/**
  * Queue Class
  */
var Queue = function() {
  this._storage = [];
  this.Stack1 = new Stack();
  this.Stack2 = new Stack();
};

// linear O(n) time complexity
Queue.prototype.enqueue = function(val){
  this.Stack1.push(val);
};

// constant O(1) time complexity
Queue.prototype.dequeue = function(){
  var lengthStack1 = this.Stack1.length;
  for(var i=0;i<lengthStack1;i++){
    this.Stack2.push(this.Stack1.pop());
  }

  var result = this.Stack2.pop();

  var lengthStack2 = this.Stack1.length;
  for(var j=0;j<lengthStack2;j++){
    this.Stack1.push(this.Stack2.pop());
  }

  return result;
};

// constant O(1) time complexity
Queue.prototype.size = function(){
  return this.Stack2.length;
};
