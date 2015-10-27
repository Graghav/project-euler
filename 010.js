// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

var LIMIT = 2e+6;
var sum   = 0;

var isPrime = function(n) {
	var x = Math.floor(Math.sqrt(n));
    var y = x;

    while (y >= 2) {
      if (n % y === 0) {
        return false;
      }
      y--;
    }

    return true;
}

for(i = 2; i < LIMIT; i++) {
	if(isPrime(i)) {
		sum += i;
	}
}

console.log(sum);
