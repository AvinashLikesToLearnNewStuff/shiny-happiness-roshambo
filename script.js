function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * (4-1) + 1);
    if (computerChoice == 1){computerChoice = 'rock'}
    else if (computerChoice == 2){computerChoice = 'paper'}
    else {computerChoice = 'scizzor'};
    return computerChoice;
}

function playRound(playerSelection, ComputerSelection){
    playerSelection = playerSelection.toLowerCase();  // converting the player string to lower case
    let computerSelection = getComputerChoice();
    console.log("player " + playerSelection + " computer " + computerSelection);

    if ( (playerSelection == 'rock' && computerSelection == "scizzor")
	 ||  (playerSelection == 'paper' && computerSelection== "rock") ||
	 (playerSelection == 'scizzor' && computerSelection =="paper")
       ) {return `You win! ${playerSelection} beats ${computerSelection}`}


    else if (
	(playerSelection == "rock" && computerSelection == "paper")
	    ||  (playerSelection == "paper" && computerSelection== "scizzor") ||
	    (playerSelection == "scizzor" && computerSelection =="rock")
    ) {return `you lose! ${computerSelection} beats ${playerSelection}`}

    else {
	return `it's a tie, you chose ${playerSelection} and the computer chose ${computerSelection} `}
}

function play5Rounds(){
let playerSelection;
let computerSelection = getComputerChoice();
    for (let i = 0; i < 5; i++){
    console.log(`Round ${i+1}`);
    computerSelection = getComputerChoice();
    playerSelection = prompt("enter rock,paper or scizzor");
        console.log(playRound(playerSelection, computerSelection));
    }
}

play5Rounds();
