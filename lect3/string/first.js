let str = "bharakadam";
console.log("length of string:", str.length);
console.log("position of 'k':", str[9]);

//Template listerals

let obj = {
    item :"pen",
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("the cost of",obj.item, "is", obj.price);
//Template listerals
let specialString =`This is a Template listeral`;
console.log(typeof specialString);
console.log( specialString);

//string methods in js
//these are built in functions to manipulate a string

let main="bharaTkadam";
let mainUppercase=main.toUpperCase();

console.log(main);
console.log(mainUppercase);
//str.trim ()   // it remove whitespaces
let str1= "              bharat         kadam        is        goodboy   ";
console.log(str1.trim());
var str2="hello";
console.log(str2.slice(0 , 3));

//str1.concat(str2) // joins str2 with str1
let str3 = "Bharat";
let str4= "kadam";
let res = str3.concat(str4);
console.log(res);
//str.charAt(idx)
let str6="hello";
console.log(str6.replace("h" , "y"));//replace

//str.charAt(idx)
let str7= "IloveJavascript";
console.log(str7.charAt(4)); //e

  
  