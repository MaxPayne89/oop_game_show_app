/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.missed = 0,
        this.phrases = this.createPhrases(),
        this.activePhrase = null
    }

    startGame(){
        //hide overlay
        document.querySelector('div#overlay').style.visibility = 'hidden';
        const phrase = this.getRandomPhrase();
        this.activePhrase = phrase;
        phrase.addPhraseToDisplay();
    }

    getRandomPhrase(){
        let arr = this.phrases
        let rand = Math.round(Math.random() * 4)
        return arr[rand]
    }

    handleInteraction(button){
        //disable the button
        button.disabled = true;
        //if not part of the sentence, remove life and add wrong css class to the button
        const phrase = this.activePhrase;
        if(phrase.checkLetter(button.textContent)){
            phrase.showMatchedLetter(button.textContent);
            button.classList = "chosen"
            if(this.checkForWin()){
                this.gameOver(true);
            }
        } else {
            game.removeLife()
            button.classList = "wrong";
        }
    }

    removeLife(){
        this.missed += 1;
        if(this.missed >= 5){
            this.gameOver(this.checkForWin())
        }
        //select the list of hearts
        const hearts = document.querySelectorAll('.tries > img');
        const heartsArr = Array.from(hearts);
        heartsArr[this.missed - 1].setAttribute('src', "images/lostHeart.png");
    }

    checkForWin(){
        const phraseChars = document.querySelectorAll('div#phrase > ul > li');
        const arr = Array.from(phraseChars);
        const numberOfHide = arr.reduce((acc, element) => {
            if(element.classList.contains("hide")){
                return acc + 1
            } else {
                return acc
            }
        },0)
        return numberOfHide === 0
    }

    gameOver(gameWon){
        //show overlay again
        const div = document.querySelector('div#overlay');
        div.style.visibility = 'visible';
        //update game-over message
        const h1 = document.querySelector('#game-over-message');
        if(gameWon){
            h1.textContent = "Good job, mandem";
            div.className = "win"
        } else {
            h1.textContent = "Sorry, mandem. You suck... Get it together next time";
            div.className = "lose"
        }
    }

    //create some phrases to be used in the game
    createPhrases(){
        let arrOfPhrases = [ 
        new Phrase("Do your Job"),
        new Phrase("Mo money mo problems"),
        new Phrase("Just do it"),
        new Phrase("What would Kobe do"),
        new Phrase("We talking about practice")];
        return arrOfPhrases;
    }
}