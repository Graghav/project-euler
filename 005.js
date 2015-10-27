var min     = 1;
var max     = 20;
var temp    = 0;
var isFound = false;
var i       = 1;


while(!isFound) {
	temp += max;

	while((temp % i == 0) && (i <= max)) {
		if(i == max) {
			isFound = true;
		}
		i++;
	}

	i = 1;
}

console.log(temp);