function getComputerChoice(){
    let randomnumber = Math.floor(Math.random() * 3)
    const myArray = ["rock", "paper", "scissors"];
    let selection = myArray[randomnumber];
    return selection;    
}

function playround(computerChoice, playerChoice){
    if(computerChoice ===  playerChoice){
        result = "Its a tie.";
        return result;
    } else if(computerChoice === "rock" && playerChoice === "paper" || 
              computerChoice === "paper" && playerChoice === "scissors"||
              computerChoice === "scissors" && playerChoice === "rock"){
        result = `You Win! ${playerChoice} beats ${computerChoice}!`;
        score += 1; 
        return result;   
    } else if(computerChoice === "rock" && playerChoice === "scissors"||
              computerChoice === "paper" && playerChoice === "rock"||
              computerChoice === "scissors" && playerChoice === "paper"){
        result = `You Lose! ${computerChoice} beats ${playerChoice}!`; 
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


