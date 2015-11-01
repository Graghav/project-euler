// What is the value of the first triangle number to have over five hundred divisors?

var findDivisors = function (n) {
 		
 		var count = 0;
 		var limit = Math.sqrt(n);

 		for(i = 1; i < limit; i++) {
 			if( n % i == 0 ) {
 				count += 2;
 			}
 		}

 		if(limit * limit == n) {
 			count++;
 		}

 		return count;
}

var triangle = 0;
var x        = 0;

var findTriangle = function() {

	while(true) {	
		triangle += x;
		if( findDivisors(triangle) > 500) {
			return triangle;
		}
		x++;
	}
}

console.log(findTriangle());







