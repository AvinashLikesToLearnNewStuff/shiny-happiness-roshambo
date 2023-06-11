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
//    console.log("player " + playerSelection + " computer " + computerSelection); //this is here for debugging 

    if ( (playerSelection == 'rock' && computerSelection == "scizzor")
	 ||  (playerSelection == 'paper' && computerSelection== "rock") ||
	 (playerSelection == 'scizzor' && computerSelection =="paper")
       ) {console.log( `You win! ${playerSelection} beats ${computerSelection}`);return 1;}


    else if (
	(playerSelection == "rock" && computerSelection == "paper")
	    ||  (playerSelection == "paper" && computerSelection== "scizzor") ||
	    (playerSelection == "scizzor" && computerSelection =="rock")
    ) {console.log( `you lose! ${computerSelection} beats ${playerSelection}`); return -1;}

    else {
	console.log( `it's a tie, you chose ${playerSelection} and the computer chose ${computerSelection} `);return 0;}
}

let score = document.querySelector('.score'); 
       let playerScore=0;
       let computerScore=0;
let currentPlayerSelection = '';
      function play5Rounds(playerSelection){

// console.log(playerSelection);


       let computerSelection = getComputerChoice();

	   let scoreOfThisRound = playRound(currentPlayerSelection, computerSelection);

	   if (scoreOfThisRound == 1){playerScore++;}
	   else if (scoreOfThisRound==-1){computerScore++;}
	   else{}
	   console.log(`playerScore = ${playerScore} and computerScore = ${computerScore}`);   
	    score.innerHTML = `<p>player's Score = ${playerScore} and computer's Score = ${computerScore}</p>`
	  
	}   

/*
       for (let i = 0; i < 5; i++){
	   console.log(`Round ${i+1}`);
	   computerSelection = getComputerChoice();
//	   playerSelection = prompt("enter rock,paper or scizzor");

	   let scoreOfThisRound = playRound(playerSelection, computerSelection);

	   if (scoreOfThisRound == 1){playerScore++;}
	   else if (scoreOfThisRound==-1){computerScore++;}
	   else{}
	   console.log(`playerScore = ${playerScore} and computerScore = ${computerScore}`);   

       }
       whoWon(playerScore, computerScore);
   }
  */

function whoWon(playerScore,computerScore){
     if(playerScore>computerScore) {console.log("player Wins!!");}
      else if(playerScore<computerScore) {console.log("computer Wins");}
      else {console.log("its a tie");}
}

const buttons = document.querySelectorAll('.game');//selecting all the buttons
const rock = document.querySelector('.rock');//attaching all the event listgenteris
const paper = document.querySelector('.paper');
const scizzor = document.querySelector('.scizzor');


let round = 0;
rock.addEventListener('click',function(){
runGame();

if(round==5){
round = 0;
console.log("reset");
whoWon(playerScore,computerScore);

	
	playerScore=0;
	computerScore=0;
	console.log(`player score is resetted to ${playerScore} and computer score is reset to ${computerScore}`);
	    score.innerHTML = `<p>player's Score = ${playerScore} and computer's Score = ${computerScore}</p>`
};
});

paper.addEventListener('click',function(){
runGame();

if(round==5){
round = 0;
console.log("reset");
whoWon(playerScore,computerScore);

	
	playerScore=0;
	computerScore=0;
	console.log(`player score is resetted to ${playerScore} and computer score is reset to ${computerScore}`);
	    score.innerHTML = `<p>player's Score = ${playerScore} and computer's Score = ${computerScore}</p>`
};
});
scizzor.addEventListener('click',function(){
runGame();

if(round==5){
round = 0;
console.log("reset");
whoWon(playerScore,computerScore);

	
	playerScore=0;
	computerScore=0;
	console.log(`player score is resetted to ${playerScore} and computer score is reset to ${computerScore}`);
	    score.innerHTML = `<p>player's Score = ${playerScore} and computer's Score = ${computerScore}</p>`
};
});



function runGame(){
currentPlayerSelection = event.target.innerHTML.trim().toLowerCase();
round++;
console.log("round: "+ round);
play5Rounds(currentPlayerSelection);
return round;
};
