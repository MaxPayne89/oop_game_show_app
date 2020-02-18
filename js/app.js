/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

//event listener on button
const buttonStartGame = document.querySelector("button#btn__reset");
buttonStartGame.addEventListener('click', () => {
    game = new Game();
    game.startGame()
})