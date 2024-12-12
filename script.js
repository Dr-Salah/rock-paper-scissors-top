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

    let computerScore = 0;
    let humanScore = 0;
    let comScore = document.querySelector('#com-score');
    let humScore = document.querySelector('#hum-score');
    let scores = document.querySelector('#scores');

    const playRound = function (humanChoice) {

        let computerChoice = getComputerChoice();

        if (computerChoice === humanChoice) {
            console.log('draw')
            return;
        }

        switch (humanChoice) {
            case 'rock':
                if (computerChoice === 'paper') {
                    computerScore++
                } else {
                    humanScore++
                }
                break;
            
            case 'paper':
                if (computerChoice === 'scissors') {
                    computerScore++
                } else {
                    humanScore++
                }
                break;
            
            case 'scissors':
                if (computerChoice === 'rock') {
                    computerScore++
                } else {
                    humanScore++
                }
                break;
            
            default:
                console.log('enter a valid choice')
        }

        comScore.textContent = computerScore;
        humScore.textContent = humanScore;
        
        if (computerScore === 5) {
            scores.textContent = 'computer wins'
        }
        
        if (humanScore === 5) {
            scores.innerHTML = 'human wins'
        }
    }

const rockBTN = document.querySelector('#rock');
const paperBTN = document.querySelector('#paper');
const scissorsBTN = document.querySelector('#scissors');

rockBTN.addEventListener('click', () => {
    playRound('rock')
});
paperBTN.addEventListener('click', () => {
    playRound('paper')
});
scissorsBTN.addEventListener('click', () => {
    playRound('scissors')
});

