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

    handleInteraction(){}

    removeLife(){}

    checkForWin(){}

    gameOver(){}

    //create some phrases to be used in the game
    createPhrases(){
        let arrOfPhrases = []; 
        arrOfPhrases.push(new Phrase("Do your Job"));
        arrOfPhrases.push(new Phrase("Mo money, mo problems"));
        arrOfPhrases.push(new Phrase("Just do it"));
        arrOfPhrases.push(new Phrase("What would Kobe do"));
        arrOfPhrases.push(new Phrase("We talking about practice"));
        return arrOfPhrases;
    }
}