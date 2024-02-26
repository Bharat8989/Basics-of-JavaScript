/* for a give array with marks of students ->[85,08,44,37,76,60] find the average marks of the entire class.*/
let marks= [56,89,98,78,67,76];
let sum=0;
for(let val of marks){
    sum =sum+val;
}
console.log("total sum :",sum);
let avg = sum/ marks.length;
console.log(`avg marks of the class =${avg}`);

/* seconde practice 
for a give array with prices of 5 item --> [345,300,654,900,50]  all item have an offer of 10% OFF on them. Change the array to store final price after applying offer.*/

let item = [345,300,654,900,50];
let i=0;
for(let val of item){
    console.log(`value at index ${i}=${val}`);
    let offer = val/10;
    item[i]=item[i]-offer;
    console.log(`value of after offer =${item
    [i]}`);
    i++;
}