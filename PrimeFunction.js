//Write a boolean function to find a given number is prime

function prime(x) {
    if (x < 2) {
        return false; 
	}
    
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false; 
        }
    }
    
    return true; 
}

console.log(prime(3))
console.log(prime(5))
console.log(prime(10))
console.log(prime(11))