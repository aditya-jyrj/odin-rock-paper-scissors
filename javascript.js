let humanScore    = 0;
let computerScore = 0;

const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");

const buttons = document.querySelectorAll("button");
buttons.forEach(button =>
    button.addEventListener("click", () => playRound(button.className))
);



function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    console.log(`You picked ${humanChoice}!`);
    console.log(`The enemy picked ${computerChoice}!`);

    const winner = decideWinner(humanChoice, computerChoice)
    updatePoints(winner);
}


function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}


function decideWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        return "tie";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win.");
        return "human";
    } else {
        console.log("You lose.");
        return "computer";
    }    
}


function updatePoints(winner) {
    if (winner === "human") {
        humanScore++;
        humanScoreDisplay.textContent = `${humanScore}`;
    } else if (winner === "computer") {
        computerScore++;
        computerScoreDisplay.textContent = `${computerScore}`;
    }
    console.log(`The score is ${humanScore}: ${computerScore}.
        `);
}
