/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;

  result.insert = function(key,val) {
    var i = getIndexBelowMaxForKey(key,storageLimit);

    if(storage[i]){
      var bucket = storage[i];
      var tupleFound = false;

      for(var j=0;j<bucket.length;j++){
        var tuple = bucket[j];

        if(tuple[0] === key){
          tupleFound = true;
          tuple[1] = val;
          break;
        }
      }

      if(!tupleFound){
        bucket.push([key,val]);
      }
    } else {
      storage[i] = [[key,val]];
    }
  };

  result.retrieve = function(key) {
    var i = getIndexBelowMaxForKey(key,storageLimit);

    if(storage[i]){
      var bucket = storage[i];

      for(var j=0;j<bucket.length;j++){
        var tuple = bucket[j];

        if(tuple && tuple[0] === key){
          return tuple[1]
        }
      }
    }

    return null;
  };

  result.remove = function(key) {
    var i = getIndexBelowMaxForKey(key,storageLimit);

    if(storage[i]){
      var bucket = storage[i];

      for(var j=0;j<bucket.length;j++){
        var tuple = bucket[j];

        if(tuple[0] === key){
          delete bucket[j];
          break;
        }
      }
    }
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for(var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
