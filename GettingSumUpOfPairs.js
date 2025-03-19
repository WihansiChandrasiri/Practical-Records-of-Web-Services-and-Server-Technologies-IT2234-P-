//arr = [1,2,3,4,5,6]
//target = 7
//Write a code to find all the pairs that sum up to the target

let arr = [1,2,3,4,5,6]
let target = 7
arr.forEach((a) => {
	arr.forEach((b) =>{
		if((a+b) == 7)
		{
			console.log("(" + a + "+" + b + ")")
		}
	})
})