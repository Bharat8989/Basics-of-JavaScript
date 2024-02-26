//collections of arrays
let marks = [98,78,65,87,67,98];
console.log(marks);
console.log(marks.length);// property
console.log(typeof marks);
console.log(marks[3]); 
console.log(marks[6]);//undefinde
console.log(marks[100]);//undefinde
marks[2]=80;
console.log(marks)  ;
let str="hello";
str[3]="k";
console.log(str);// not change // immutable 
 
// looping over an array
//looping all elements of an array
let heroes = ["ironman", "thor" , "hulk", "shaktiman ", "spiderman","antman"];
//for loop
// for(let i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }
//for of
for(let hero of heroes){
    console.log(hero);
}