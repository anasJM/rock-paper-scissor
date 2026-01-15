// getComputerChoice function

function getComputerChoice() {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return "rock";


        case 2:
            return "paper";

        
        case 3:
            return "scissor";

    }
}

// getHumanChoice() function

function getHumanChoice() {
    let humanChoice = window.prompt("write your choice, rock, paper or scissor'");
    return humanChoice;
}

// variables

let humanScore = 0;
let computerScore = 0;

// playRound() function

function playRound(computerChoice, humanChoice) {

    if (humanChoice == 'rock' && computerChoice == 'scissor') {
        humanScore += 1;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    }
    
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore += 1;
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }

    if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore += 1;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    }
    
    if (humanChoice == 'paper' && computerChoice == 'scissor') {
        computerScore += 1;
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }
    
    if (humanChoice == 'scissor' && computerChoice == 'paper') {
        humanScore += 1;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    }
    
    if (humanChoice == 'scissor' && computerChoice == 'rock') {
        computerScore += 1;
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }

    if (humanChoice == computerChoice) {
        console.log("it's a tie");
    }

}

// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();

// playRound(computerChoice, humanChoice);
// console.log(humanScore + " - " + computerScore);


// playGame() function - 5 rounds

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i + ":");
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice);
        console.log("human: " + humanScore + ", computer: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! you beat the computer, Score: " + humanScore + " - " + computerScore);
    } else if (humanScore < computerScore) {
        console.log("hard luck! the computer beat you, Score: " + computerScore + " - " + humanScore); 
    }
}

console.log("the game started!")
playGame();