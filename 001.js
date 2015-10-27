var sum = 0;
var count = 1000;
while(count--) {
if(count % 3 == 0 || count % 5 ==0)
     sum +=count;
}
console.log(sum);