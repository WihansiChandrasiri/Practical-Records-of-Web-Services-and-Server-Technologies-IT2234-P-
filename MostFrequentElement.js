//[4,8,3,4,3,2,1,8,4]
//Find the most frequent element in the array

let arr2 = [4, 8, 3, 4, 3, 2, 1, 8, 4];
let frequency = {};
let maxCount = 0;
let mostFrequentElement;

arr2.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostFrequentElement = num;
    }
});

console.log("Most frequent element:", mostFrequentElement);