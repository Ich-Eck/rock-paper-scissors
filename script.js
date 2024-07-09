function getComputerChoice(num) {
    const randomNumber = Math.floor(Math.random(num) * 3) + 1;
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else if (randomNumber === 3) {
        return 'scissors';
    }
}

console.log(getComputerChoice(1));