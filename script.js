// getComputerChoice function

function getComputerChoice() {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return "rock";
            break;

        case 2:
            return "paper";
            break;
        
        case 3:
            return "scissor";
            break;
    }
}

// getHumanChoice() function

function getHumanChoice() {
    let humanChoice;
    return humanChoice = window.prompt("write your choice, rock, paper or scissor'");
}

// variables

let humanScore = 0;
let computerScore = 0;

// playRound() function

function playRound(computerChoice, humanChoice) {

    if (humanChoice === 'rock' && computerChoice === 'scissor') {
        humanScore += 1;
        return "You win! " + humanChoice + " beats " + computerChoice + ".";
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        return "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }

    if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        return "You win! " + humanChoice + " beats " + computerChoice + ".";
    } else if (humanChoice === 'paper' && computerChoice === 'scissor') {
        computerScore += 1;
        return "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }

    if (humanChoice === 'scissor' && computerChoice === 'paper') {
        humanScore += 1;
        return "You win! " + humanChoice + " beats " + computerChoice + ".";
    } else if (humanChoice === 'scissor' && computerChoice === 'rock') {
        computerScore += 1;
        return "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }

}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(playRound(computerChoice, humanChoice));