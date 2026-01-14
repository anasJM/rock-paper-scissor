// console.log( Math.floor(Math.random() * 3) + 1 );

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

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice;
    return humanChoice = window.prompt("write your choice, rock, paper or scissor'");
}

console.log(getHumanChoice());