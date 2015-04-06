/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function() {
   var obj = {};
   var _size = 4;
   var _storage = [];
   
   obj.insert = function(key,val){
      var i = getIndexBelowMaxForKey(key,_size);
      var keyFound = false;
      
      if(_storage[i]){
         var bucket = _storage[i];
         for(var j=0;j<bucket.length;j++){
            var tuple = bucket[j];
            if(tuple && tuple[0] === key){
               tuple[1] = val;
               keyFound = true;
               break;
            }
         }
         
         if(!keyFound){
            _storage[i].push([key,val]);
         }
      } else {
         _storage[i] = [[key,val]];
      }
   }
   
   obj.remove = function(key){
      var i = getIndexBelowMaxForKey(key,_size);
      
      if(_storage[i]){
         var bucket = _storage[i];
         for(var j=0;j<bucket.length;j++){
            var tuple = bucket[j];
             if(tuple && tuple[0] === key){
                delete bucket[j];
             }
         }
      }
      
      return null;
   }
   
   obj.retrieve = function(key){
      var i = getIndexBelowMaxForKey(key,_size);
      
      if(_storage[i]){
         var bucket = _storage[i];
         for(var j=0;j<bucket.length;j++){
            var tuple = bucket[j];
             if(tuple && tuple[0] === key){
                return tuple[1];
             }
         }
      }
      
      return null;
   }
   
   return obj;
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
