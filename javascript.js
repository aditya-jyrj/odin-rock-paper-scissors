

/*
let rock = 0;
let paper = 0;
let scissors = 0;

for (let i = 0; i < 100000; i++) {
    let computerChoice = getComputerChoice();
    if (computerChoice == "rock") {
        rock++;
    } else if (computerChoice == "paper") {
        paper++;
    } else {
        scissors++;
    }
}

console.log(`${rock}, ${paper}, ${scissors}`);
*/

humanScore    = 0;
computerScore = 0;

for (let i = 0; i < 5; i++) {
    let result = playRound(getHumanChoice().toLowerCase(), getComputerChoice())
    if (result === "You win!") {
        humanScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }
    console.log(`${result} The current score is ${humanScore}:${computerScore}`);
}

console.log(`The final score is ${humanScore}:${computerScore}!`)


function getComputerChoice() {
    let randomValue = Math.random() * 3
    if (randomValue < 1) {
        return "rock";
    } else if (randomValue < 2) {
        return "paper";
    } else {
        return "scissors"
    }
}


function getHumanChoice() {
    return prompt("What's your move, punk?");
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!"
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }

}