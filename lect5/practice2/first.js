/* take a number n as input from user create an array of numbers from 1 to n . user the reduce method to calculate sum of all numbers in the array. */
let n = prompt("enter the number:");
let arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(i);
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
}, 0); // Added initial value 0 for the accumulator

console.log(sum);
