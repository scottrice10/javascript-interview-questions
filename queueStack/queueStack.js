/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
 * Stack Class
 */
var Stack = function() {
   this._storage = {};
   this._size = 0;
};

Stack.prototype.push = function(val) {
   this._size++;
   this._storage[this._size] = val;
};

Stack.prototype.pop = function() {
   var temp = this._storage[this._size];
   delete this._storage[this._size];
   this._size--;

   return temp;
};

Stack.prototype.size = function() {
   return this._size;
};

/**
 * Queue Class
 */
var Queue = function() {
   this.mainStack = new Stack();
   this.tempStack = new Stack();
   this._size = 0;
};

Queue.prototype.enqueue = function(val) {
   this._size++;
   this.mainStack.push(val);
};

Queue.prototype.dequeue = function() {
   // do not push the last element into temp stack to 'dequeue' (remove) it
   for(var i = 0; i < this.mainStack.size() - 1; i++) {
      this.tempStack.push(this.mainStack.pop());
   }

   var dequeued = this.mainStack.pop();
   this._size--;

   for(var j=0;j<this.tempStack.size();j++){
      this.mainStack.push(this.tempStack.pop());
   }

   return dequeued;
};

Queue.prototype.size = function() {
   return this._size;
};
