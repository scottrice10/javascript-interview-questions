/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var hashtableResizing = function() {
   var obj = {};
   var _size = 4;
   var _storage = [];
   
   obj.insert = function(key,val){
      var i = getIndexBelowMaxForKey(key,_size);
      
      if(_storage[i]){
         var bucket = _storage[i];
         var keyExists = false;
         var itemAdded = false;
         
         for(var j=0;j<bucket.length;j++){
            if(bucket[j] && bucket[j][0] === key){
               keyExists = true;
               bucket[j][1] = val;
               break;
            }
         }
         
         if(!keyExists){
            itemAdded = true;
            _storage[i].push([key,val]);
         }
      } else {
         itemAdded = true;
         _storage[i] = [[key,val]];
      }
      
       if(itemAdded && _storage.length > _size * 0.75){
         resize(_size * 2);
      }
   }
   
   obj.retrieve = function(key){
      var i = getIndexBelowMaxForKey(key, _size);
      
      if(_storage[i]){
         for(var j=0;j<_storage[i].length;j++){
            if(_storage[i][j] && _storage[i][j][0] === key){
               return _storage[i][j][1];
            }
         }
      }
      
      return null;
   }
   
   obj.remove = function(key){
      var i = getIndexBelowMaxForKey(key, _size);
      var itemRemoved = false;
      
      if(_storage[i]){
         for(var j=0;j<_storage[i].length;j++){
            if(_storage[i][j] && _storage[i][j][0] === key){
               itemRemoved = true;
               delete _storage[i][j];
            }
         }
      }
      
      if(itemRemoved && _storage.length < _size * 0.25){
         resize(_size / 2);
      }
   }
   
   function resize(newSize){
      var tempStorage = [];
      
      for(var i=0;i<_storage.length;i++){
         var bucket = _storage[i];
         if(bucket){
            for(var j=0;j<bucket.length;j++){
               var tuple = bucket[j];
               
               tempStorage.push([tuple[0],tuple[1]])
            }
         }
      }
      
      _storage = [];
      _size = newSize;
      
      for(var k=0;k<tempStorage.length;k++){
         obj.insert(tempStorage[k][0], tempStorage[k][1]);
      }
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
