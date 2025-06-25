

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

const buttons = document.querySelectorAll("button");
buttons.forEach(button =>
    button.addEventListener("click", () => {
        console.log(button.className);
        const humanChoice = button.className;
        const computerChoice = getComputerChoice();
    })
);

humanScore    = 0;
computerScore = 0;

// let result = playRound(getHumanChoice().toLowerCase(), getComputerChoice())
// if (result === "You win!") {
//     humanScore++;
// } else if (result === "You lose!") {
//     computerScore++;
// }
// console.log(`${result} The current score is ${humanScore}:${computerScore}`);

// console.log(`The final score is ${humanScore}:${computerScore}!`)


function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}



// function playRound(humanChoice, computerChoice) {
//     if (humanChoice.target === computerChoice) {
//         return "It's a tie!"
//     }

//     if (
//         (humanChoice === "rock" && computerChoice === "scissors") ||
//         (humanChoice === "paper" && computerChoice === "rock") ||
//         (humanChoice === "scissors" && computerChoice === "paper")
//     ) {
//         return "You win!";
//     } else {
//         return "You lose!";
//     }

// }