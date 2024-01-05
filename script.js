function launchGame () {
   let playerChoice = prompt("Please input your choice and press enter").toLowerCase();
   let computerChoice = getComputerChoice();
   playGame(playerChoice, computerChoice);
   
}

function getComputerChoice () {
   let givenChoices = ["rock", "paper", "scissors"];
   let selectedChoice = givenChoices[Math.floor(Math.random()*givenChoices.length)];
   return selectedChoice;
}



function playGame (playerSelection, computerSelection) {
   choiceRange = ["rock", "paper", "scissors"]
   if ((choiceRange.includes(playerSelection))) {
      // playerSelection = prompt("Kindly choose either 'Rock', 'Paper', or 'Scissors'");
      if(playerSelection == computerSelection) {
         console.log(`The player choose ${playerSelection} while the computer choose ${computerSelection}`);
         console.log("You drew the game, let's play another round");
         launchGame();
      } 

      else if ((playerSelection == "rock" ) && (computerSelection == "scissors")) {
         console.log(`The player choose ${playerSelection} while the computer choose ${computerSelection}`);
         console.log("You won the game! Hurray!");
         launchGame();
      }

      else if ((playerSelection == "scissors" ) && (computerSelection == "paper")) {
         console.log(`The player choose ${playerSelection} while the computer choose ${computerSelection}`);
         console.log("You won the game! Hurray.");
         launchGame();
      }

      else if ((playerSelection == "paper" ) && (computerSelection == "rock")) {
         console.log(`The player choose ${playerSelection} while the computer choose ${computerSelection}`);
         console.log("You won the game! Hurray.");
         launchGame();
      }
      else {
         console.log(`The player choose ${playerSelection} while the computer choose ${computerSelection}`);
         console.log("You lost the game!");
         launchGame();
      }
   } else {
      console.log("Only input either 'Rock', 'Paper' or 'Scissors'");
      launchGame();
   }
}

launchGame();
