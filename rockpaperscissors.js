const choices = ['pyro', 'hydro', 'dendro'];

let playerSelection = '';
let playerHP = 5;
let computerHP = 5;
let roundCounter = 1;

document.getElementById('pyroBtn').onclick = player;
document.getElementById('hydroBtn').onclick = player;
document.getElementById('dendroBtn').onclick = player;


let computerPlay = function() {
    let random = Math.floor(Math.random()*choices.length);
    return choices[random];
}


function player() {
    let playerSelection = this.name;
    let computerSelection = computerPlay();
    

    document.getElementById("round").innerHTML = "Round: " + roundCounter;
    document.getElementById("computerPick").innerHTML = "Opponent picked: <br>" + computerSelection;
    document.getElementById("youPick").innerHTML = "You picked: <br>" + playerSelection;
    
    roundCounter++;


    console.log("Computer: " + computerSelection);
    console.log(compare(playerSelection, computerSelection));

    function compare(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            document.getElementById("outcome").innerHTML = "It's a tie! No health points were lost.";
        }
        if (playerSelection === 'pyro') {
            if (computerSelection === 'dendro') {
                computerHP--;
                document.getElementById("outcome").innerHTML = 'You dealt 1 HP to your opponent!';
            } else {
                playerHP--;
                document.getElementById("outcome").innerHTML = 'Unfortunately, you lose 1 HP.';
            }
        }
    
        if (playerSelection === 'hydro') {
            if (computerSelection === 'pyro') {
                computerHP--;
                document.getElementById("outcome").innerHTML = 'You dealt 1 HP to your opponent!';
            } else {
                playerHP--;
                document.getElementById("outcome").innerHTML = 'Unfortunately, you lose 1 HP.';
            }
        }
    
        if (playerSelection === 'dendro') {
            if (computerSelection === 'hydro') {
                computerHP--;
                document.getElementById("outcome").innerHTML = 'You dealt 1 HP to your opponent!';
            } else {
                playerHP--;
                document.getElementById("outcome").innerHTML = 'Unfortunately, you lose 1 HP.';
            }
        }
    }

    document.getElementById("yourHP").innerHTML = "Your HP: " + playerHP;
    document.getElementById("computerHP").innerHTML = "Opponent's HP: " + computerHP;

    if (playerHP === 0) {
        document.getElementById("outcome").innerHTML = "Your HP is reduced to 0. You lose!";
        if(confirm('You lost all of your HP! You lose. Replay?')){
            window.location.reload();  
        }
    }
    
    if (computerHP === 0) {
        document.getElementById("outcome").innerHTML = "You reduce your opponent's HP to 0. You win!";
        if(confirm('You reduce your opponent\'s HP to 0! You win. Replay?')){
            window.location.reload();  
        }
    }
        
    
}
