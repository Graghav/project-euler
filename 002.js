// Series starting with 1 and 2
var series = [1,2];
// Sequence limit shouldnt exceed 4M
var limit = 4e+6; 
// Init Sum
var sum = 2;

var n = 0;

var nextNum = function(fib,length) {
	return fib[length - 1] + fib[length - 2];
};

while( series[series.length - 1] <= limit ) {
	n = nextNum(series,series.length)
	series.push(n);
	if(n%2 == 0) {
		sum += n;
	}
}

console.log(sum);
