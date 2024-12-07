console.log("SsSs");

const getComputerChoice = function () {
    let randomInt = Math.floor(Math.random() * 3)
    if (randomInt === 0) {
        return 'rock'
    } else if (randomInt === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
};

const getHumanChoice = function () {
    let choice = prompt('type your choice...')
    return choice.toLocaleLowerCase()
};



const playGame = function () {
    let computerScore = 0;
let humanScore = 0;

const playRound = function () {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (computerChoice === humanChoice) {
        console.log('draw')
        return;
    }

    switch (humanChoice) {
        case 'rock':
            if (computerChoice === 'paper') {
                console.log('computer wins')
                computerScore++
            } else {
                console.log('human wins')
                humanScore++
            }
            break;
        
        case 'paper':
            if (computerChoice === 'scissors') {
                console.log('computer wins')
                computerScore++
            } else {
                console.log('human wins')
                humanScore++
            }
            break;
        
        case 'scissors':
            if (computerChoice === 'rock') {
                console.log('computer wins')
                computerScore++
            } else {
                console.log('human wins')
                humanScore++
            }
            break;
        
        default:
            console.log('enter a valid choice')
    }
}

for (let i=0; i<5; i++) {
    playRound()
}

if (computerScore > humanScore) {
    console.log('computer weens')
} else {
    console.log('human weens')
}
}

playGame();