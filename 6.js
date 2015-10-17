// To find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.

var temp = 0;
var i    = 0;

var sumOfSquares = function (max) {
	temp = 0;
	for(i=0;i<=max;i++) {
		temp += Math.pow(i,2);
	}

	return temp;
}


var squareOfSum = function (max) {
	temp = 0;
	for(i=0;i<=max;i++) {
		temp += i;
	}

	return Math.pow(temp,2);
}

console.log( squareOfSum(100) - sumOfSquares(100) );