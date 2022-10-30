import randomInteger from "random-int";
import promptSync from "prompt-sync";

const choices = ["Rock", "Paper", "Scissors"];

const userPrompt = "Please Enter 0 for Rock, 1 for Paper, or 2 Scissors.";
let outcome = "Ready to play.";

const computerChoice = randomInteger(0, 2);
const computerChoiceName = choices[computerChoice];

const prompt = promptSync();
const userInput = prompt(userPrompt);
const userChoice = choices[userInput];

if (computerChoiceName === userChoice) {
  outcome = "Draw";
} else if (computerChoiceName === "Rock" && userChoice === "Paper") {
  outcome = "Player Wins";
} else if (computerChoiceName === "Rock" && userChoice === "Scissors") {
  outcome = "Computer Wins";
} else if (computerChoiceName === "Paper" && userChoice === "Rock") {
  outcome = "Computer Wins";
} else if (computerChoiceName === "Paper" && userChoice === "Scissors") {
  outcome = "Player Wins";
} else if (computerChoiceName === "Scissors" && userChoice === "Rock") {
  outcome = "Player Wins";
} else if (computerChoiceName === "Scissors" && userChoice === "Paper") {
  outcome = "Computer Wins";
} else {
  outcome = "Invalid Entry. Please Try Again.";
}

console.log("Computer Chooses " + computerChoiceName);
console.log("Player Chooses " + userChoice);
console.log(outcome);