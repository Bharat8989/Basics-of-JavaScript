// print all even numbers from 0 to 100
// let n=100;
//even number
for(let i=0; i<=100;i=i+2){
    console.log(i);
}
for (let j=0;j<=100;j++){
     if(j % 2 !==0){
      //odd number
        console.log("num=",j);
     }
}

/* createe a game where you start with any random game number ask the uer to keep guessing the game number until the user enters correct value */
let gameNum =24;
let userNum =prompt("Guess the game number:");
while(userNum != gameNum){
    userNum=prompt("you enterd wrong number. Guess again:");

}
console.log("congratulations, you entered the right number");