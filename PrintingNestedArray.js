//Printing a nested array

let arr1 = [[1,2,3] , [5,6] , [8,5,3]]
arr1.forEach((n) =>
{
	console.log(n)
})


console.log("------------------")

//Another way
arr1.forEach((s) => {
	s.forEach((u) =>{
	    console.log(u)	
	})
})