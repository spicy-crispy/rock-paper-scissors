const choices = ['rock', 'paper', 'scissors'];


// computer randomly picks rock, paper, or scissors
let computerPlay = function() {
    let random = Math.floor(Math.random()*choices.length);
    return choices[random];
}

// play a round of rock, paper, scissors
let playGame = function(playerSelection, computerSelection) {
    if (computerSelection == 'rock' && playerSelection.toLowerCase() == 'rock') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". It's a tie!");
    } else if (computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". Rock beats scissors. You lose!");
    } else if (computerSelection == 'rock' && playerSelection.toLowerCase() == 'paper') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". Paper beats rock. You win!");

    } else if (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'rock') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". Rock beats scissors. You win!");
    } else if (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'scissors') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". It's a tie!");
    } else if (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". Scissors beats paper. You lose!");

    } else if (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". Paper beats rock. You lose!");
    } else if (computerSelection == 'paper' && playerSelection.toLowerCase() == 'scissors') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". Scissors beats paper. You win!");
    } else if (computerSelection == 'paper' && playerSelection.toLowerCase() == 'paper') {
        console.log("Computer played: " + computerSelection + ". You played: " + playerSelection.toLowerCase() + ". It's a tie!");
    } else {
        console.log("Invalid choice. Please choose rock, paper, or scissors.")
    }
}

//const playerSelection = "PAPER";
const computerSelection = computerPlay();
// playGame(playerSelection, computerSelection);

// 5 round game of rock paper scissors

let game = function() {
    const playerSelection = prompt("Choose rock, paper, or scissors.");
    playGame(playerSelection, computerSelection);
}
game();
