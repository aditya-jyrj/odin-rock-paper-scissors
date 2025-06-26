let humanScore    = 0;
let computerScore = 0;

const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const whoWon = document.querySelector(".text")

const buttons = document.querySelectorAll("button");

buttons.forEach(button =>
    button.addEventListener("click", () => playRound(button))
);



function playRound(humanButton) {
    clearHighlights();
    
    let humanChoice = humanButton.dataset.choice;
    let computerChoice = getComputerChoice();
    let computerButton = document.querySelector(`button[data-choice="${computerChoice}"]`);


    console.log(`You picked ${humanChoice}!`);
    console.log(`The enemy picked ${computerChoice}!`);

    updateHighlights(humanButton, computerButton);
    const winner = decideWinner(humanChoice, computerChoice)
    updatePoints(winner);
}


function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function updateHighlights(humanButton, computerButton) {
    if (humanButton === computerButton) {
        humanButton.classList.add("tie-button");
    } else {
        humanButton.classList.add("human-selected-button");
        computerButton.classList.add("computer-selected-button");
    }
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
    let tempText = "It's a tie.";
    if (winner === "human") {
        humanScore++;
        humanScoreDisplay.textContent = `${humanScore}`;
        tempText = "You win!"
    } else if (winner === "computer") {
        computerScore++;
        computerScoreDisplay.textContent = `${computerScore}`;
        tempText = "You lose."
    }
    whoWon.textContent = tempText;
    console.log(`The score is ${humanScore}: ${computerScore}.
        `);
}

function clearHighlights() {
    buttons.forEach(button => {
        button.classList.remove("human-selected-button", "computer-selected-button", "tie-button");
    })
}