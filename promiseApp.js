/*
Promise 
OBJECT from a operation

mention the status of the operation

3states

1.pending / waiting
2.fulfilled / resolved  
3.Rejected / error
*/

const fs = require('fs').promises;

const readFile=(filepath)=>{
    return fs.readFile('file.txt','utf8') //return a promise
}

readFile('file.txt').then((data)=>{
    console.log(data)
})

.catch((err)=>{
    console.error(err);
})