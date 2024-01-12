function launchGame () {
   
   let computerWinCounter = 0;
   let playerWinCounter = 0;
   let drawCounter = 0;
   let winner = 0;

   document.querySelectorAll('button').forEach(occurence => {

         let id = occurence.getAttribute('id');
         occurence.addEventListener('click', function() {
            let playerChoice = this.id;
            let computerChoice = getComputerChoice();
            winner = playGame(playerChoice, computerChoice);
            if (winner == 1) {
               let playerPoints =  document.getElementById('playerPoints');
               playerPoints.innerHTML = `Player: ${playerWinCounter+=1}`;
               if(playerWinCounter == 5) {
                  let youWon = document.getElementById('results');
                  youWon.innerHTML = 'You Won the game by being the first to reach 5 points';
                  setTimeout(function () {
                     window.location.reload();
                  }, 5000);
               }
            } else if (winner == 0){
               let computerPoints =  document.getElementById('computerPoints');
               computerPoints.innerHTML = `Computer: ${computerWinCounter+=1}`;
               if(computerWinCounter == 5) {
                  let compWon = document.getElementById('results');
                  compWon.innerHTML = 'The Computer won the game by being the first to reach 5 points';
                  setTimeout(function () {
                     window.location.reload();
                  }, 5000);
               }
            } else {
               drawCounter++;
            }

            console.log(playerWinCounter);
            console.log(computerWinCounter);
         });
   }); 
}

function getComputerChoice () {
   let givenChoices = ["rock", "paper", "scissors"];
   let selectedChoice = givenChoices[Math.floor(Math.random()*givenChoices.length)];
   return selectedChoice;
}



function playGame (playerSelection, computerSelection) {
         const element = document.getElementById('results');
         // const compChoice = document.getElementsByClassName('computerChoice');
         let img =  document.getElementById('compImg');

         if(playerSelection == computerSelection) {
            element.innerHTML = `You: ${playerSelection} Computer: ${computerSelection}.You Drew.`;
            if (computerSelection == 'rock') {
               img.src = 'images/rock.png';
               img.style = "width:150px; height:150px; border: none; border-radius: 100px;box-shadow: 0px 0px 1px 2px rgb(161, 161, 161);background: whitesmoke;";
            } else if (computerSelection == 'paper') {
               img.src = 'images/paper.png';
               img.style = "width:150px; height:150px; border: none; border-radius: 100px;box-shadow: 0px 0px 1px 2px rgb(161, 161, 161);background: whitesmoke;";
            } else if (computerSelection == 'scissors') {
               img.src = 'images/scissors.png';
               img.style = "width:150px; height:150px; border: none; border-radius: 100px;box-shadow: 0px 0px 1px 2px rgb(161, 161, 161);background: whitesmoke;";
            }
            return -1;
         } 
   
         else if ((playerSelection == "rock" ) && (computerSelection == "scissors")) {
            img.src = 'images/scissors.png';
            img.style = "width:150px; height:150px; border: none; border-radius: 100px;box-shadow: 0px 0px 1px 2px rgb(161, 161, 161);background: whitesmoke;";
            element.innerHTML = `You: ${playerSelection} Computer${computerSelection}.You Win.`;
            return 1;
         }
   
         else if ((playerSelection == "scissors" ) && (computerSelection == "paper")) {
            img.src = 'images/paper.png';
            img.style = "width:150px; height:150px; border: none; border-radius: 100px;box-shadow: 0px 0px 1px 2px rgb(161, 161, 161);background: whitesmoke;";
            element.innerHTML = `You: ${playerSelection} Computer: ${computerSelection}.You Win.`;
            return 1;
         }
   
         else if ((playerSelection == "paper" ) && (computerSelection == "rock")) {
            img.src = 'images/rock.png';
            img.style = "width:150px; height:150px; border: none; border-radius: 100px;box-shadow: 0px 0px 1px 2px rgb(161, 161, 161);background: whitesmoke;";
            element.innerHTML = `You: ${playerSelection} Computer: ${computerSelection}.You Win.`;
            return 1;
            
         }
         else {
            element.innerHTML = `You:${playerSelection} Computer: ${computerSelection}.You Lose.`;
            if (computerSelection == 'rock') {
               img.src = 'images/rock.png';
               img.style = "width:150px; height:150px; border: none; border-radius: 100px;box-shadow: 0px 0px 1px 2px rgb(161, 161, 161);background: whitesmoke;";
            } else if (computerSelection == 'paper') {
               img.src = 'images/paper.png';
               img.style = "width:150px; height:150px; border: none; border-radius: 100px;box-shadow: 0px 0px 1px 2px rgb(161, 161, 161);background: whitesmoke;";
            } else if (computerSelection == 'scissors') {
               img.src = 'images/scissors.png';
               img.style = "width:150px; height:150px; border: none; border-radius: 100px;box-shadow: 0px 0px 1px 2px rgb(161, 161, 161);background: whitesmoke;";
            }
            return 0;
         }
}

launchGame();