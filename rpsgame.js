let computerChoice = ""
let playerChoice = ""

function getComputerChoice(){
    let randomnumber = Math.floor((Math.random() * 3) +1)
    switch(randomnumber){
        case 1:
            computerChoice = "rock";
            return computerChoice;
            break;
        case 2:
            computerChoice = "paper";
            return computerChoice;
            break;
        case 3:
            computerChoice = "scissors"; 
            return computerChoice;       
    }
}
