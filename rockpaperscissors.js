const choices = ['rock', 'paper', 'scissors'];


// computer randomly picks rock, paper, or scissors
let computerPlay = function() {
    let random = Math.floor(Math.random()*choices.length);
    return choices[random];
}



// play a round of rock, paper, scissors
let playGame = function(playerSelection, computerSelection) {
    if (computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". Rock beats scissors. You lose!");
        computerScore++;
    } else if (computerSelection == 'rock' && playerSelection.toLowerCase() == 'paper') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". Paper beats rock. You win!");
        playerScore++;
    } else if (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'rock') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". Rock beats scissors. You win!");
        playerScore++;
    } else if (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". Scissors beats paper. You lose!");
        computerScore++;

    } else if (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". Paper beats rock. You lose!");
        computerScore++;
    } else if (computerSelection == 'paper' && playerSelection.toLowerCase() == 'scissors') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". Scissors beats paper. You win!");
        playerScore++;

    } else  if (computerSelection == playerSelection.toLowerCase()) {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". It's a tie!")

    } else {
        console.log("Invalid choice. Please choose rock, paper, or scissors.")
    }
 }

let playerScore = 0;
let computerScore = 0;


// 5 round game of rock paper scissors

let game = function() {
   for (let i = 1; i < 6; i++) {
        const playerSelection = prompt("Choose rock, paper, or scissors.");
        let computerSelection = computerPlay();
        playGame(playerSelection, computerSelection);
        console.log("Round " + i + ". Computer score: " + computerScore + ". Player score: " + playerScore);
    }
    if (computerScore > playerScore) {
        console.log("COMPUTER WINS! BETTER LUCK NEXT TIME.");
    } else if (computerScore < playerScore) {
        console.log("CONGRATULATIONS, YOU WIN!");
    } else {
        console.log("IT'S A TIE!");
    }
}
game();

