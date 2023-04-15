function getComputerChoice(){
    let randomnumber = Math.floor(Math.random() * 3)
    const myArray = ["rock", "paper", "scissors"];
    let selection = myArray[randomnumber];
    return selection;    
}

function playround(computerChoice, playerChoice){
    if(computerChoice === "rock" && playerChoice === "rock"){
        result = "Its a tie.";
        return result;
    } else if(computerChoice === "rock" && playerChoice === "paper"){
        result = "You Win! Paper beats Rock!";
        score += 1; 
        return result;   
    } else if(computerChoice === "rock" && playerChoice === "scissors"){
        result = "You Lose! Rock beats Scissors!"; 
        return result;  
    } else if(computerChoice === "paper" && playerChoice === "rock"){
        result = "You Lose! Paper beats Rock!";
        return result;
    } else if(computerChoice === "paper" && playerChoice === "paper"){
        result = "Its a tie.";
        return result;
    } else if(computerChoice === "paper" && playerChoice === "scissors"){
        result = "You Win! Scissors beat Paper!";
        score += 1;
        return result;
    } else if(computerChoice === "scissors" && playerChoice === "rock"){
        result = "You Win! Rock beats Scissors!";
        score += 1;
        return result;
    } else if(computerChoice === "scissors" && playerChoice === "paper"){
        result = "You Lose! Scissors beats Paper!"; 
        return result;   
    } else if(computerChoice === "scissors" && playerChoice === "scissors"){
        result = "Its a tie."; 
        return result;   
    }
}

function game(){
    let rounds = 1;
    while(rounds <= 5){ 
        console.log("Round: "+ rounds);
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Choose Rock, Paper, or Scissors.").toLowerCase();
        console.log(playround(computerSelection, playerSelection));
        rounds += 1;
        console.log("Score: "+score);
    }
}
let score = 0;
game();


