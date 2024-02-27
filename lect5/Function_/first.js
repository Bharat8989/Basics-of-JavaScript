function myfunction(){
    console.log("welcome to apna college");
    console.log("we are3 learing JS");
}
myfunction();
myfunction();
  
function youfunctions(meg){
    //parameter --> input
    console.log(meg);
}
youfunctions("i love javascript");//argument
youfunctions("i love html and css");

//function -->2 numbers ,sum
function sum(x,y){
    console.log(x+y);
}
sum(34,43);

function sum1(x,y){
    s=x+y;
    console.log("before return");
    return s;
}
let val=sum1(34,6);
console.log(val);

//arrow functions
const arrowsum = (a,b) =>{
      console.log(a+b);
};
arrowsum(3,4);

//forEach loop
//arr.Each  
let arr =["beed","wadwani","chandrpur","pune","delhi"];
// arr.forEach(function printVal(val)
arr.forEach((val) =>
{
    console.log(val.toUpperCase());
});
//some more array methods
//map array
let nums = [65, 43, 34];
let squaredNums = nums.map((val) => {
    return val * val;
});

console.log(squaredNums); // Output: [4225, 1849, 1156]
console.log(nums);

//filter array
let arr1= [1,2,3,4,5,6,7,8,976,6];
let evernarray= arr1.filter((val) =>
{
    return val % 2===0;
});
console.log(evernarray);
