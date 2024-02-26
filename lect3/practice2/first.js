/* prompt the user to enter their full name. generate  a username for them based on the input. start username with @, followe by theri fulll name eith the fullanee lenght */
let fullName = prompt("Enter your fullName without spaces:");
let username = "@" + fullName + fullName.length;
// console.log(fullName);
console.log(username);