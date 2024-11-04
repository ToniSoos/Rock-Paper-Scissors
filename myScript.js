// Rock Paper Scissors Console Game //

const choices = ["ROCK", "PAPER", "SCISSORS"]

const randomNumber = Math.floor(Math.random() * 3) +0;

const computerChoice = choices[randomNumber]

const winners = []
//



//
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"]

    const randomNumber = Math.floor(Math.random() * 3) +0;

    const computerChoice = choices[randomNumber]
    return computerChoice
}
//

//
function getPlayerChoice() {
    
    

    let input = prompt("Choose Rock, Paper or Scissors");
    while (input == null) {
        input = prompt("Choose Rock, Paper or Scissors!");
    }
    input = input.toUpperCase();
    let check = validInput(input);
    if (check == true){
        return input
    }
    while (check == false){
        input = prompt("Choose Rock, Paper or Scissors!");

        while (input == null){
            input = prompt("Choose Rock, Paper or Scissors!");   
        }



        input = input.toUpperCase();
        check = validInput(input);
        if (check == true){
            return input;
        }   
    } return input
    }
     

    

//
function validInput(input1) {
    return (choices.includes(input1));
}


function checkWinner(choiceC, choiceP){
    if (choiceC === choiceP){
        return "Draw";
    } else if 
    (choiceC == "ROCK" && choiceP == "SCISSORS" || choiceC == "PAPER" && choiceP == "ROCK" || choiceC == "SCISSORS" && choiceP == "PAPER")
    {
        return "Computer";
    } else {
        return "Player";
    }


}

function playRound(round){
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    const winner = checkWinner(computerSelection, playerSelection);
    winners.push(winner);
    logRound(computerSelection, playerSelection, winner, round)
}

function playGame(){
    for(let i = 1; i <= 5; i++){
        playRound(i);
    }
    logWinners();
    
}
function logWinners(){
    let playerWins = winners.filter((item) => item == "Player").length
    let computerWins = winners.filter((item) => item == "Computer").length
    let draws = winners.filter((item) => item == "Draw").length
    console.log("Results:")
    console.log("Computer wins:", computerWins, "round(s)")
    console.log("Player wins:", playerWins, "round(s)")
    console.log("Draws:", draws)
}

function logRound(computerSelection, playerSelection, winner, round){
    console.log("Round:", round)
    console.log("Computer chose:", computerSelection)
    console.log("Player chose:", playerSelection)
    if (winner != "Draw"){
        console.log(winner, "won this round.")
    } else {
        console.log("Draw! No winner.")
    }


    console.log("*-------------------------*")
}





playGame();