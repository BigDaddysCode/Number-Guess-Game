const max = prompt("Enter the maximum number");
console.log(max);
const random = Math.floor(Math.random() * max) + 1;
console.log(random);
let guess = prompt("Guess the number..");
while(true){
    if(guess == "quit"){
        console.log("User quit..");
        break;
    }
    if(guess == random){
        console.log("You are right congrats...");
        break;
    }
    // hints
    else if(guess<random){
        guess = prompt(" Hint : your guess was too small please try again...");
    }
    else if(guess>random){
        guess = prompt(" Hint : your guess was too large please try again...");
    }
    //hints over here
    else{
        guess = prompt("Your guess was wrong please try again..");
    }
}