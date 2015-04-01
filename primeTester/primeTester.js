/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  var limit = Math.floor(Math.sqrt(n));

  for(var i=2;i<=limit;i++){
    if(n % i === 0) {
      return false;
    }
  }

  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  var flags = {};
  var prime = 2;

  if(start <= 2){
    flags[2] = true;
  }

  //build hashtable of flags, setting all flags besides 0 and 1
  //start begins with an odd number, and skipping by 2 then only checks odd numbers to halve space used
  for(var i=3;i<=end;i+=2){
    flags[i] = true;
  }

  while(prime <= Math.sqrt(end)){
    // cross of remaining multiples of prime
    crossOff(flags, prime, end, start);

    //find next value which is true
    prime = getNextPrime(flags, prime, end);

    if(prime >= end){
      break;
    }
  }

  var primeArray = [];
  for(var key in flags){
    if(flags[key] && key >= start){
      primeArray.push(key);
    }
  }

  return primeArray;
};

var crossOff = function(flags, prime, end){
  // Start with prime * prime, because for k * prime, where k < prime,
  // this value would would have already been crossed off in previous iteration.
  for(var j=prime * prime;j<=end;j+=prime){
    flags[j] = false;
  }
};

var getNextPrime = function(flags, prime, end){
  var next = prime + 1;
  while (next <= end && !flags[next]){
    next++;
  }

  return next;
};


