/**
 * Build a class to represent a range of numbers that takes:
 *   - a beginning index,
 *   - an end index (optional)
 *     If there is no end index, the range should include only the passed-in start value.
 *   - a 'step' (optional)
 *     The step is the interval at which elements are included.
 *     For instance, a step of 1 includes every element in the range,
 *     while a step of 2 includes every other element.
 *
 * The range should have a constructor that accepts these arguments in that order.
 *
 * It should also support the following utility functions:
 *   - size(): return the number of items represented by the range
 *   - each(callback(index)): iterate over the range, passing each value to a callback function
 *   - includes(index): return whether or not the range includes the passed value
 *
 * You should also be aware of the following caveats:
 *   - You should allow a negative value for 'step' to count backwards.
 *     If no step is provided and the start is more than the end, assume we're counting backwards.
 *   - Should return null if we are given no 'start' value.
 *
 * Range should use constant space, even during the `each` method, * i.e. you should *not*
 * use an Array as backing storage.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
 *
 * var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 * console.log("Who do we appreciate!?");
 *
 * evenNumbers.size() should be 4
 * evenNumbers.includes(2) should be true, evenNumbers.include(3) should be false
 */


var Range = function(start, end, step) {
   this.start = start;
   this.end = end || start;
   this.step = step || 1;
};

Range.prototype.size = function() {
   var counter = 0;
   this.each(function(){
      counter++
   });

   return counter;
};

Range.prototype.each = function(callback) {
   if(this.step < 0) {
      for(var i = this.start; i >= this.end; i += this.step) {
         callback(i);
      }
   } else if(!this.step && this.start - this.end > 0) {
      for(var i = this.start; i >= this.end; i--) {
         callback(i);
      }
   } else {
      for(var i = this.start; i <= this.end; i += this.step) {
         callback(i);
      }
   }
};

Range.prototype.includes = function(index) {
   if(this.step < 0) {
      for(var i = this.start; i >= this.end; i += this.step) {
         if(i === index) {
            return true;
         }
      }
   } else if(!this.step && this.start - this.end > 0) {
      for(var i = this.start; i <= this.end; i--) {
         if(i === index) {
            return true;
         }
      }
   } else {
      for(var i = this.start; i <= this.end; i += this.step) {
         if(i === index) {
            return true;
         }
      }
   }

   return false;
};
