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
  var subArray = this;
  var map = {};

  for(var i=0;i<subArray.length;i++){
    if(!map[subArray[i]]){
      if(array.indexOf(subArray[i]) === -1){
        return false;
      }
    }

    // store in hashmap to skip over duplicates
    map[subArray[i]] = true;
  }

  return true;
};
