console.log("hello Bharat kadam");
for (let count = 1; count <= 5; count++) {
    console.log("hey Bharat kadam");
}
document.write("hell o");
document.write("hello bharat");

// for loop 
console.log("hello Bharat kadam");
for (let count = 1; count <= 5; count++) {
    console.log("hey Bharat kadam");
}
document.write("hell o");
document.write("hello bharat");

// calculate sum of 1 to 5 
let sum = 0;
let n = 5;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log("sum of=", sum);
console.log("loop has ended");

// while loop 
let i = 1;
while (i <= 10) {
    console.log("while loop", i);
    i++;
}

// do while loop
let j = 1;
do {
    console.log("do-while loop", j);
    j++; // Corrected from i++ to j++
} while (j <= 5);

// for of loop
let str = "javascript";
let size = 0;
for (let val of str) {
    console.log("val", val);
    size++;
}
console.log("string size :", size);
 
//for-in loop 
//student object
let student = {
    name: "John",
    age: 25,
    grade: "A"
};

for (let key in student) {
    console.log("key=", key, "value=", student[key]);
}
