// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

var a = 0;
var b = 0;
var c = 0;

var triplet = function () {
	for(a = 1; a < 1000; a++) {
		for(b = a+1; b < 1000; b++) {
			c = 1000-a-b;
			if( a*a + b*b == c*c) {
				return a*b*c;
			}
		}
	}
}

console.log(triplet());
