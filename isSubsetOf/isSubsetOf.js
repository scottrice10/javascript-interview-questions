/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
 */

Array.prototype.isSubsetOf = function(array) {
   var hashMap = {};
   var smallArray = this;

   for(var i=0;i<array.length;i++){
      hashMap[array[i]] = true;
   }

   for(var j=0;j<smallArray.length;j++){
      if(!hashMap[smallArray[j]]){
         return false;
      }
   }

   return true;
};
