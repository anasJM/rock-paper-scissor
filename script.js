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

// select the parent div
const div = document.querySelector("#div");
// creating a div results and append it to div
const results = document.createElement("div");
results.style.background = "gray";
results.style.padding = "20px"
div.appendChild(results);

// playRound() function

function playRound(humanChoice) {

    let computerChoice = getComputerChoice();

    if (humanChoice == 'rock' && computerChoice == 'scissor') {
        humanScore += 1;
        results.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
        console.log("score: human - " + humanScore + " / computer - " + computerScore);
    }
    
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore += 1;
        results.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
        console.log("score: human - " + humanScore + " / computer - " + computerScore);
    }

    if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore += 1;
        results.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
        console.log("score: human - " + humanScore + " / computer - " + computerScore);
    }
    
    if (humanChoice == 'paper' && computerChoice == 'scissor') {
        computerScore += 1;
        results.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
        console.log("score: human - " + humanScore + " / computer - " + computerScore);
    }
    
    if (humanChoice == 'scissor' && computerChoice == 'paper') {
        humanScore += 1;
        results.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
        console.log("score: human - " + humanScore + " / computer - " + computerScore);
    }
    
    if (humanChoice == 'scissor' && computerChoice == 'rock') {
        computerScore += 1;
        results.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
        console.log("score: human - " + humanScore + " / computer - " + computerScore);
    }

    if (humanChoice == computerChoice) {
        results.textContent = "it's a tie, both chose " + humanChoice + ".";
        console.log("score: human - " + humanScore + " / computer - " + computerScore);
    }

    // checking if someone is reaching 5 in the score

    if (humanScore == 5) {
        results.textContent = "Congrats, you won!        score: human - " + humanScore + " / computer - " + computerScore;
        // reset the scores
        humanScore = 0;
        computerScore = 0;
        return;
    }

    if (computerScore == 5) {
        results.textContent = "Unlucky, you lost!        score: computer - " + computerScore + " / human - " + humanScore;
        // reset the scores
        humanScore = 0;
        computerScore = 0;
        return;
    }

}
 
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorButton = document.querySelector("#scissor-button");

// console.log(computerChoice)

let rock = rockButton.textContent.toLowerCase();
let paper = paperButton.textContent.toLowerCase();
let scissor = scissorButton.textContent.toLowerCase();
// console.log(rock);
// console.log(paper);
// console.log(scissor);

// rockButton.addEventListener('click', playRound(computerChoice, rock));
rockButton.addEventListener('click', (e) => { playRound(rock) });
paperButton.addEventListener('click', (e) => { playRound(paper) });
scissorButton.addEventListener('click', (e) => { playRound(scissor) });

