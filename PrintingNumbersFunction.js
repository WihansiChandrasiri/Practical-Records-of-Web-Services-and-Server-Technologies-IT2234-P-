//Write a recursive function to print numbers from 1 to n
console.log("------------------------")
console.log("Printing numbers from 1 to 10 using recursive function")
function PrintNumbers(n) {
    if (n<1) {
        return; 
    }
	PrintNumbers(n-1)
	console.log(n)
}


PrintNumbers(10);

