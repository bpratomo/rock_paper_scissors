console.log("hello world!");

//Define the rules from the first player's perspective

let rules = {
  rockpaper: 0,
  rockscissors: 1,
  rockrock: 2,

  paperscissors: 0,
  paperrock: 1,
  paperpaper: 2,

  scissorsrock: 0,
  scissorspaper: 1,
  scissorsscissors: 2,
};

let possibleMove = ["rock", "paper", "scissors"];

//Get computer's input
function computerPlay() {
  let index = Math.floor(Math.random() * 2);
  return possibleMove[index];
}

//Who wins this round?
function game(
  playerSelection,
  computerSelection,
  [playerScore, computerScore]
) {
  if (!possibleMove.includes(playerSelection)) {
    console.log("Selection not valid!");
  } else {
    let result = rules[playerSelection + computerSelection];
    if (result == 1) {
      console.log(`You win!${playerSelection} beats ${computerSelection}`);
      playerScore++;
    } else if (result == 0) {
      console.log(
        `You lose! ${playerSelection} is defeated by ${computerSelection}`
      );
      computerScore++;
    } else if (result == 2) {
      console.log("Draw!");
    }
  }

  return [playerScore, computerScore];
}

let prevScoreBoard = [0, 0];
let gameOn = true;
//Who wins the game
while (gameOn) {
  //Get player's input
  let playerSelection = prompt("What's your input");
  console.log(playerSelection);
  let computerSelection = computerPlay();
  let scoreBoard = game(playerSelection, computerSelection, prevScoreBoard);
  console.log(scoreBoard);
  if (scoreBoard[0] == 5 || scoreBoard[1] == 5) {
    gameOn = false;
    scoreBoard[0] == 5
      ? console.log("Player wins!")
      : console.log("Computer wins!");
  }
  prevScoreBoard = scoreBoard;
}
