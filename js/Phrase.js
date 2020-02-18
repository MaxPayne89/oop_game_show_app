/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase()
    }

    addPhraseToDisplay(){
        const arr = this.phrase.split("");
        const arrReducer = arr.reduce((acc, curr) => {
            if(curr !== ' '){
                return acc + `<li class="hide letter ${curr}">${curr}</li>`
            } else {
                return acc + `<li class="space">${curr}</li>`
            }
        }, "")
        const phraseDiv = document.getElementById("phrase")
        phraseDiv.querySelector('ul').insertAdjacentHTML("beforeend",arrReducer);
    }

    checkLetter(letter){
        return this.phrase.includes(letter);
    }

    showMatchedLetter(letter){
        const phraseChars = document.querySelectorAll('div#phrase > ul > li');
        const phraseToArr = Array.from(phraseChars);
        const filtered = phraseToArr.filter(element => {
            return element.textContent === letter
        })
        filtered.map(element => {
            element.className = `show letter ${element.textContent}`
        })
    }
}