//Find the max of number in the array using foreach

let numbers = [1,3,4,6,7]
let max = 0
numbers.forEach((n) =>
{
	if(max < n){
		max = n
	}
})

console.log(max)