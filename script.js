function launchGame () {
   let noOfPlays = 1;
   let computerWinCounter = 0;
   let playerWinCounter = 0;
   let drawCounter = 0;

   while (noOfPlays <= 5){
      let playerChoice = prompt("Please input your choice and press enter").toLowerCase();
      let computerChoice = getComputerChoice();
      let winner = playGame(playerChoice, computerChoice);

      console.log(`Round ${noOfPlays}`);

      if (winner == 1) {
         playerWinCounter++;
      } else if (winner == 0){
         computerWinCounter++;
      } else {
         drawCounter++;
      }

      noOfPlays++;
   }

   if (playerWinCounter > computerWinCounter){
      console.log(`You won the game:`);
      console.log(`Computer: ${computerWinCounter} Player: ${playerWinCounter} Draw:${drawCounter}`);
   } else if (computerWinCounter > playerWinCounter){
      console.log(`The computer won the game:`);
      console.log(`Computer: ${computerWinCounter} Player: ${playerWinCounter} Draw:${drawCounter}`);
   } else {
      console.log(`You drew the game:`);
      console.log(`Computer: ${computerWinCounter} Player: ${playerWinCounter} Draw:${drawCounter}`);
   }
}

function getComputerChoice () {
   let givenChoices = ["rock", "paper", "scissors"];
   let selectedChoice = givenChoices[Math.floor(Math.random()*givenChoices.length)];
   return selectedChoice;
}



function playGame (playerSelection, computerSelection) {
   const choiceRange = ["rock", "paper", "scissors"];
      if ((choiceRange.includes(playerSelection))) {
         if(playerSelection == computerSelection) {
            console.log(`You choose ${playerSelection} while the computer choose ${computerSelection}.Draw.`);
            return -1;
         } 
   
         else if ((playerSelection == "rock" ) && (computerSelection == "scissors")) {
            console.log(`You choose ${playerSelection} while the computer choose ${computerSelection}.Win.`);
            return 1;
         }
   
         else if ((playerSelection == "scissors" ) && (computerSelection == "paper")) {
            console.log(`You choose ${playerSelection} while the computer choose ${computerSelection}.Win.`);
            return 1;
         }
   
         else if ((playerSelection == "paper" ) && (computerSelection == "rock")) {
            console.log(`You choose ${playerSelection} while the computer choose ${computerSelection}.Win.`);
            return 1;
            
         }
         else {
            console.log(`You choose ${playerSelection} while the computer choose ${computerSelection}.Lose.`);
            return 0;
         }
      } else {
         console.log("Only input either 'Rock', 'Paper' or 'Scissors'. Restarting the game")
         launchGame();
      }
}

launchGame();