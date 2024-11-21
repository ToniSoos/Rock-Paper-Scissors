// Rock Paper Scissors Console Game //

const choices = ["Stein", "Papier", "Schere"]

const randomNumber = Math.floor(Math.random() * 3) +0;

const computerChoice = choices[randomNumber]

let winners = []
//



//
function getComputerChoice() {
    const choices = ["Stein", "Papier", "Schere"]

    const randomNumber = Math.floor(Math.random() * 3) +0;

    const computerChoice = choices[randomNumber]
    return computerChoice
}
//

// function getPlayerChoice() {//



 //  let input = prompt("Choose Rock, Paper or Scissors");
  //  while (input == null) {
  //      input = prompt("Choose Rock, Paper or Scissors!");
  //}
  //  input = input.toUpperCase();
    //let check = validInput(input);
    //if (check == true){
    //    return input
    //}
    //while (check == false){
        //input = prompt("Choose Rock, Paper or Scissors!");

        //while (input == null){
            //input = prompt("Choose Rock, Paper or Scissors!");
        //}



        //input = input.toUpperCase();
        //check = validInput(input);
        //if (check == true){
            //return input;
        //}
    //} return input
    //}
//



//
//function validInput(input1) {
    //return (choices.includes(input1));
//}


function checkWinner(choiceC, choiceP){
    if (choiceC === choiceP){
        return "Draw";
    } else if
    (choiceC == "Stein" && choiceP == "Schere" || choiceC == "Papier" && choiceP == "Stein" || choiceC == "Schere"
         && choiceP == "Papier")
    {
        return "Computer";
    } else {
        return "Spieler";
    }


}

function logWinners(){
    let playerWins = winners.filter((item) => item == "Spieler").length
    document.getElementById("playerScoreboard").innerHTML = "Playerscore: " + playerWins

    let computerWins = winners.filter((item) => item == "Computer").length
    document.getElementById("computerScoreboard").innerHTML = "Computerscore: " + computerWins

    if (playerWins == 5) {
        elementEinAusBlenden()
        document.getElementById("winnerMsg").innerHTML = "Du hast gewonnen! Glückwunsch!"
        disEnableButtons(true)

    } else if (computerWins == 5) {
        elementEinAusBlenden()
        document.getElementById("winnerMsg").innerHTML = "Du hast leider verloren, versuch es erneut!"
        disEnableButtons(true)
    }
    



    }

    //let draws = winners.filter((item) => item == "Draw").length
    //console.log("Results:")
    //console.log("Computer wins:", computerWins, "round(s)")
    //console.log("Player wins:", playerWins, "round(s)")
    //console.log("Draws:", draws)

function logRound(computerSelection, winner){
    document.getElementById("computerChose").innerHTML = "Der Computer wählte " + computerSelection +"."  
    if (winner != "Draw"){
        document.getElementById("roundResult").innerHTML = "Der " + winner + " gewinnt diese Runde."
    } else {
        document.getElementById("roundResult").innerHTML = "Unentschieden! Niemand gewinnt die Runde."
    }
}

// GUI


const buttonRock = document.getElementById("buttonRock")
const buttonPaper = document.getElementById("buttonPaper")
const buttonScissors = document.getElementById("buttonScissors")
const scoreboard = document.getElementById("scoreboard");
const pChose = document.getElementById("playerChose")
const buttonRestart = document.getElementById("restartButton")


buttonRock.addEventListener("click",function() {
    playRound(buttonRock.value)
});
buttonPaper.addEventListener("click",function() {
    playRound(buttonPaper.value)
});
buttonScissors.addEventListener("click",function() {
    playRound(buttonScissors.value)
});


// restart methode 
function restart() {
    winners = [];
    playerWins = 0;
    computerWins = 0;
    winnerBlock.classList.remove("active")
    document.getElementById("playerScoreboard").innerHTML = "Playerscore: " + playerWins
    document.getElementById("computerScoreboard").innerHTML = "Computerscore: " + playerWins
    disEnableButtons(false)
    document.getElementById("computerChose").innerHTML = ""
    document.getElementById("roundResult").innerHTML = ""

}

function elementEinAusBlenden() {
    winnerBlock.classList.add("active")
}

buttonRestart.addEventListener("click", function() {
    restart()
});

function disEnableButtons(bool) {
    document.getElementById("buttonRock").disabled = bool;
    document.getElementById("buttonScissors").disabled = bool;
    document.getElementById("buttonPaper").disabled = bool;
}


function playRound(playerSelection){

    const computerSelection = getComputerChoice();
    const winner = checkWinner(computerSelection, playerSelection);
    winners.push(winner);
    logRound(computerSelection, winner);
    logWinners();
}

