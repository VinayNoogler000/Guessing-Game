// JS file to add functionality to 'index.htm' file

let maxNum = prompt("Enter the Max number in Range:"); //stores the maximum number in range
console.log(`Maximum Number in Range: ${maxNum}`);

const ranNum = Math.floor(Math.random() * maxNum) + 1; //stores the randome number between 1 and maxNum

let guess = prompt(`Guess the Random Number between 1 and ${maxNum}:`); //stores user's guess
console.log(`Your Guess: ${guess}`);

while (guess != 'exit') { //loop will run till user enters 'exit' or guess the right random number.
    if (guess == ranNum) { //if user guess the right random number, then loop will break, and the game will end
        console.log(`Congratulations! You made the right guess. The Random Number is ${ranNum}.`);
        alert(`Congratulations! You made the right guess. The Random Number is ${ranNum}.`);
        break;
    }
    else if (guess != ranNum) { //if user's guess is wrong, then loop/game will continue, by asking the user
        //to guess the random number again.
        console.log("Ooops! You made the Wrong guess.");

        //Hint Feature:
        if (guess < ranNum) { //gives the user a hint that the guess is smaller than the random number
            alert("Ooops! You made the Wrong guess. Your guess is too small.");
        }
        else if (guess > ranNum) { //gives the user a hint that the guess is larger than the random number
            alert("Ooops! You made the Wrong guess. Your guess is too large.");
        }
        guess = prompt(`Guess the random number again, between 1 and ${maxNum}:`);
    }
    console.log(`Your Guess: ${guess}`);
}
if (guess == 'exit') { //if user enter 'exit' the below instructions will be followed.
    console.log("You played well! Better luck next time.");
    alert("You played well! Better luck next time.");
}
