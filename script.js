let player;
let playerNumber;
const playerSide = document.getElementById("player1");
let computer;
let computerNumber;
const gamefield = document.getElementById("gamefield");
const computerSide = document.getElementById("player2");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// UI setup
//Set up event listeners and initiate shake animation

rock.addEventListener("click", function () {
  playerNumber = 1;
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  playerSide.classList.remove("rock", "paper", "scissors");
  computerSide.classList.remove("rock", "paper", "scissors");
  playerSide.classList.add("shake");
  playerSide.addEventListener("animationend", playerTurn);
  computerSide.classList.add("shake");
  computerSide.addEventListener("animationend", getRandomNumber);
});
paper.addEventListener("click", function () {
  playerNumber = 2;
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  playerSide.classList.remove("rock", "paper", "scissors");
  computerSide.classList.remove("rock", "paper", "scissors");
  playerSide.classList.add("shake");
  playerSide.addEventListener("animationend", playerTurn);
  computerSide.classList.add("shake");
  computerSide.addEventListener("animationend", getRandomNumber);
});
scissors.addEventListener("click", function () {
  playerNumber = 3;
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  playerSide.classList.remove("rock", "paper", "scissors");
  computerSide.classList.remove("rock", "paper", "scissors");
  playerSide.classList.add("shake");
  playerSide.addEventListener("animationend", playerTurn);
  computerSide.classList.add("shake");
  computerSide.addEventListener("animationend", getRandomNumber);
});

// GAME BEGINS!
window.addEventListener("load", startGame);

function startGame() {
  console.log("let's begin the game");
}

//Generates random number - this is computer's turn now

function getRandomNumber() {
  computerNumber = Math.floor(Math.random() * 3) + 1;
  computerTurn();
}

//Player's Turn: Shaking stops and hand sign changes;

function playerTurn() {
  //console.log("player's turn");
  if (playerNumber == 1) {
    player = "rock";
    playerSide.classList.remove("shake");
    playerSide.classList.add("rock");
  } else if (playerNumber == 2) {
    player = "paper";
    playerSide.classList.remove("shake");
    playerSide.classList.add("paper");
  } else if (playerNumber == 3) {
    player = "scissors";
    playerSide.classList.remove("shake");
    playerSide.classList.add("scissors");
  }
  console.log(`player: ${player + playerNumber}!!`);
}

//Computer is processing what has happened

function computerTurn() {
  if (computerNumber == 1) {
    computer = "rock";
    computerSide.classList.remove("shake");
    computerSide.classList.add("rock");
  } else if (computerNumber == 2) {
    computer = "paper";
    computerSide.classList.remove("shake");
    computerSide.classList.add("paper");
  } else {
    computer = "scissors";
    computerSide.classList.remove("shake");
    computerSide.classList.add("scissors");
  }

  console.log(`computer: ${computer + computerNumber}!!!`);
  showResult();
}

//Evaluate choices & Show result
function showResult() {
  if (player == computer) {
    console.log("it's a DRAW");
    document.querySelector("#draw").classList.remove("hidden");
  } else if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) {
    console.log("WIN");
    document.querySelector("#win").classList.remove("hidden");
  } else {
    console.log("LOSE");
    document.querySelector("#lose").classList.remove("hidden");
  }
}
