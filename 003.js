var i = 2; 
var large = 600851475143;

while (large > i) {
	if (large % i == 0) {
		large /= i;
	}

	i++;
}

console.log(i);