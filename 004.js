var temp      = 0;
var sol 	  = 0;

var isPalindrome = function(str) {
	return (str == str.split('').reverse().join('')) ? true : false;
}

for(i=100; i<=999; i++) {
	for(j=i; j<=999; j++) {
		temp = i * j;
		if((temp > sol) && (isPalindrome(temp.toString()))) {
			sol = temp;
		}
	}
}

console.log(sol);