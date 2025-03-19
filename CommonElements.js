/*
a =[4,5,6,3,7]
b =[8,3,2,1,5]

Find the common elemens between a and b*/

let a = [4,5,6,3,7]
let b = [8,3,2,1,5]

a.forEach((p) =>{
	b.forEach((q) =>{
		if(p==q)
			console.log(p);
	})
})