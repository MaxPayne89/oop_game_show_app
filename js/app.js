/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

//event listener on button
const buttonStartGame = document.querySelector("button#btn__reset");
buttonStartGame.addEventListener('click', () => {
    game = new Game();
    //clean up before starting a new game
    removePhraseFromDisplay();
    enableAllButtons();
    resetHearts();
    //start new game
    game.startGame();
});


const keyboard = document.querySelector('div#qwerty');
keyboard.addEventListener('click', (e) => {
    if(e.target.classList.contains("key")) {
        game.handleInteraction(e.target);
    }
});

//helper methods
const removePhraseFromDisplay = () => {
    const ulWithChars = document.querySelector('div#phrase > ul');
    ulWithChars.innerHTML = '';
}

const enableAllButtons = () => {
    const buttons = document.querySelectorAll('div.keyrow > button');
    const buttonsArr = Array.from(buttons);
    buttonsArr.map(button => {
        button.classList = 'key';
        button.disabled = false;
    })
}

const resetHearts = () => {
    const hearts = document.querySelectorAll('.tries > img');
    const heartsArr = Array.from(hearts);
    heartsArr.map(heart => {
        heart.setAttribute('src', 'images/liveHeart.png');
    })
}
