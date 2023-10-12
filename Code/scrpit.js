const number = [Math.floor(Math.random() * 25 +1)];
const guessInput = document.getElementById('input');
const guessButton = document.getElementById('submit');
const gameMessage = document.getElementById('gamemessage');
const restartButton = document.getElementById('restart');

function checkUserGuess() {
       const userGuess = parseInt(guessInput.value);
       if (!userGuess) {
           return;
       }
    if (userGuess > number) {
        gameMessage.innerText = "Guess lower";
        gameMessage.style.color = 'red';
    } else if (userGuess < number) {
        gameMessage.innerText = "Guess higher";
        gameMessage.style.color = 'red';
    } else {
        gameMessage.innerText = "Number correctly guessed";
        gameMessage.style.color = 'green';
        guessInput.disable = true;
        guessButton.disable = true;
    }

}



restartButton.addEventListener('click', () => {
      window.location.reload();
});

function restartGameAlert() {
    alert("The Game Has Been Restarted!!")
}

guessButton.addEventListener('click', checkUserGuess);


