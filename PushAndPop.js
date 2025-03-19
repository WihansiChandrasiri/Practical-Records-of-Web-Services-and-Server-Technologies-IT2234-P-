//Array Operations
//Push and pop

let arr = ['a','b','d'];

console.log("Printing the array : ");
console.log(arr);
arr.push('e');

console.log("After pushing a character to the array: ");
console.log(arr);

console.log("After popping a character from the array: ");
arr.pop();
console.log(arr);

console.log();

// Reverse the array using pop and push
// a b c d -> d c b a

console.log("Reverse the array using pop and push");
let reverseArr = ['a','b','c','d']; // No need to redeclare 'arr' again
console.log("Original Array: " + reverseArr);
let reversed = [];

while(reverseArr.length > 0) {
    reversed.push(reverseArr.pop());
}

console.log("Reversed array: " + reversed);
