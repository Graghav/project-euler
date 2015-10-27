// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
// we can see that the 6th prime is 13.
// What is the 10 001st prime number?


var len   = 1; 
var i     = 2;
var j     = 3;
var count = 10001;
var res   = 0;

for(j=3;len<count;j++,i=2) {
	while(j%i) {
		i++;
		if(i==j) {
			len++;
		}
	}

	if(len == count) {
		res = i;
	}
}

console.log(res);