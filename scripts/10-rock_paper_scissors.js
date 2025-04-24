let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}

updateScore();

function result(playerChoice) {
    computer = computerChoice();

    let result = '';

    if (playerChoice === 'rock') {
        if (computer === 'paper') {
            result = 'You lose.';
        } else if (computer === 'rock') {
            result = 'Tie.';
        } else {
            result = 'You win.';
        }
    } else if (playerChoice === 'paper') {
        if (computer === 'scissors') {
            result = 'You lose.';
        } else if (computer === 'paper') {
            result = 'Tie.';
        } else {
            result = 'You win.';
        }
    } else {
        if (computer === 'rock') {
            result = 'You lose.';
        } else if (computer === 'scissors') {
            result = 'Tie.';
        } else {
            result = 'You win.';
        }
    }
    
    if (result === 'You win.') {
        score.wins++;
    } else if (result === 'Tie.') {
        score.ties++;
    } else {
        score.losses++;
    }
    
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img class="css-moves" src="../images/${playerChoice}-emoji.png">  <img class="css-moves" src="../images/${computer}-emoji.png"> Computer`;
    updateScore();

    localStorage.setItem('score', JSON.stringify(score)); //only takes string value

    //             alert(`your choice was ${playerChoice} and computers choice was ${computer} and ${result}
    // wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`);

}

function updateScore() {
    document.querySelector('.js-scoreboard').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function computerChoice() {
    const number = Math.random();

    let computerChoice = '';

    if (number > 0 && number <= 1 / 3) {
        computerChoice = 'rock';
    } else if (number > 1 / 3 && number <= 2 / 3) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice;

}