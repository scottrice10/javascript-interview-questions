/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
   for(var i=2;i<=Math.sqrt(n);i++){
      if(n % i === 0){
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
   var primeArray = [];

   if(start <= 2){
      flags[2] = true;
   }

   for(var j=3;j<=end;j+=2){
      flags[j] = true;
   }

   while(prime <= end){
      flags = checkOffFlags(prime,end,flags);

      prime = getNextPrime(prime,end,flags);
   }

   for(var i=start;i<=end;i++){
      if(flags[i]){
         primeArray.push(i);
      }
   }

   return primeArray;
};

function getNextPrime(prime,end,flags){
   var next = prime + 1;

   while(!flags[next] && next <= end){
      next++;
   }

   return next;
}

function checkOffFlags(prime,end,flags){
   for(var l=prime*prime;l<=end;l+=prime){
      flags[l] = false;
   }

   return flags;
}


