/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, val) {
    var i = getIndexBelowMaxForKey(key, storageLimit);

    if(storage[i]) {
      var bucket = storage[i];
      var tupleFound = false;

      for(var j = 0; j < bucket.length; j++) {
        var tuple = bucket[j];

        if(tuple[0] === key) {
          tupleFound = true;
          tuple[1] = val;
          break;
        }
      }

      if(!tupleFound) {
        size += 1;
        bucket.push([key, val]);
      }
    } else {
      size += 1;
      storage[i] = [[key, val]];
    }

    if((size / storageLimit) > (3 / 4)) {
      resize(storageLimit * 2)
    }
  };

  result.retrieve = function(key) {
    var i = getIndexBelowMaxForKey(key, storageLimit);

    if(storage[i]) {
      var bucket = storage[i];

      for(var j = 0; j < bucket.length; j++) {
        var tuple = bucket[j];

        if(tuple && tuple[0] === key) {
          return tuple[1]
        }
      }
    }

    return null;
  };

  result.remove = function(key) {
    var i = getIndexBelowMaxForKey(key, storageLimit);

    if(storage[i]) {
      var bucket = storage[i];

      for(var j = 0; j < bucket.length; j++) {
        var tuple = bucket[j];

        if(tuple[0] === key) {
          delete bucket[j];
          size -= 1;
        }
      }
    }

    if(size / storageLimit < (1 / 4) && storageLimit > 4) {
      resize(storageLimit / 2);
    }
  };

  var isResizing = false;
  var resize = function(newSize) {
    if(!isResizing){
      var pairs = [];
      isResizing = true;

      for(var k = 0; k < storage.length; k++) {
        if(!storage[k]) {
          continue;
        }

        for(var l = 0; l < storage[k].length; l++) {
          if(!storage[k][l]) {
            continue;
          }

          pairs.push(storage[k][l]);
        }
      }

      storageLimit = newSize;
      storage = [];
      size = 0;

      for(var m = 0; m < pairs.length; m++) {
        result.insert(pairs[m][0], pairs[m][1]);
      }

      isResizing = false;
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
