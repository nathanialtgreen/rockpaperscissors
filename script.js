// Declare scoring variables. //
let playerScore = 0;
let computerScore = 0;

// Create function "computerPlay" that will randomly return ‘Rock’, ‘Paper’ or ‘Scissors’ //
function computerPlay(min, max) {
    let choices = Math.floor(Math.random() * (max - min + 1) + min);
    let computerSelection;
    if (choices === 1) {
        computerSelection = 'Rock';
        console.log('The computer chose Rock!');
        return computerSelection;
    }
    else if (choices === 2) {
        computerSelection = 'Paper';
        console.log('The computer chose Paper!');
        return computerSelection;
    }
    else {
        computerSelection = 'Scissors';
        console.log('The computer chose Scissors!');
        return computerSelection;
    }
}

// Create function "playerPlay" that allows the player to make a selection. //
function playerPlay() {
    let playerChoice = prompt('Choose rock, paper, or scissors. ', '').toLowerCase();
    if (playerChoice === 'rock') {
        console.log('You chose rock!');
        return 'Rock';
    }
    else if (playerChoice === 'paper') {
        console.log('You chose paper!');
        return 'Paper';
    }
    else {
        console.log('You chose scissors!');
        return 'Scissors';
    }
}

// Create function that plays a single round. //
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        console.log('You lose! Paper beats Rock.');
        return computerScore++;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log('You win! Rock beats Scissors.');
        return playerScore++;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        console.log('You lose! Scissors beat paper.');
        return computerScore++;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log('You win! Paper beats Rock.');
        return playerScore++;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log('You lose! Rock beats Scissors.');
        return computerScore++;
    }
    else if (playerSelection === 'Scissors' & computerSelection === 'Paper') {
        console.log('You win! Scissors beat paper.');
        return playerScore++;
    }
    else if (playerSelection === computerSelection) {
        console.log('You tied!');
    }
    else {
        console.log('There was an issue. Please try again!');
        return playRound(playerPlay(), computerPlay(1,3));
    }
    
}

// Create a 5-round game that keeps score and reports a winner or loser at the end. //
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerPlay(), computerPlay(1,3));
    }
    if (playerScore > computerScore) {
        console.log(`Congratulations! You won ${playerScore} to ${computerScore}!`);
    }
    else if (playerScore < computerScore) {
        console.log (`Oof. You lost ${playerScore} to ${computerScore}.`);
    }
    else {
        console.log ('You tied!');
    }
}

game();