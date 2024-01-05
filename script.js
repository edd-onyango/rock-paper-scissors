function getComputerChoice () {
   let givenChoices = ["Rock", "Paper", "Scissors"];
   var selectedChoice = givenChoices[Math.floor(Math.random()*givenChoices.length)];
   console.log(selectedChoice);
   return selectedChoice;
}

getComputerChoice();
