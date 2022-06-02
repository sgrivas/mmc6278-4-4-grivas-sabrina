var words = [
  "bananas",
  "grapes",
  "carousel",
  "milkshake",
  "javascript",
  "limousine",
  "chocolate",
  "programming",
  "meatloaf",
  "ukulele",
  "mango",
];

var wordToGuessEl = document.getElementById("word-to-guess");
var previousWordEl = document.getElementById("previous-word");
var incorrectLettersEl = document.getElementById("incorrect-letters");
var remainingGuessesEl = document.getElementById("remaining-guesses");
var winsEl = document.getElementById("wins");
var lossesEl = document.getElementById("losses");

var guessedLetters=[];
var guessingWord=[];
var guessCount=10;
var wins=0;
var loses=0;
var randomWord;

resetGame();
updateDisplay();

document.addEventListener(
  "keyup",
  function (event) {
    var letterPressed = event.key;
    //When the user presses a letter key, check whether the letter is included in the word.
    if (randomWord.includes(letterPressed)) {
      //If the letter is included, replace the underscores in the displayed word.
      for (let index = 0; index< randomWord.length; index++) {
        if (letterPressed === randomWord[index]) {
          guessingWord[index] = letterPressed
          if (guessingWord.join('')===randomWord) {
            wins++;
            winsEl.textContent=wins
            previousWordEl.textContent=randomWord;
            resetGame();
            updateDisplay();
          }
        }
        wordToGuessEl.textContent = guessingWord.join('');
      }
    //Letter is not in randomWord
    } else {
        if (guessedLetters.includes(letterPressed)) {
          return
        } else {
          guessedLetters.push(letterPressed)
          guessCount--;
          incorrectLettersEl.textContent=guessedLetters
          remainingGuessesEl.textContent = guessCount;
          if (guessCount===0) {
            loses++;
            lossesEl.textContent=loses
            previousWordEl.textContent=randomWord;
            resetGame();
            updateDisplay();
          }
        }
    }
  },
  false
);
function resetGame(){
  guessingWord=[];
  guessedLetters=[];
  guessCount = 10;
  //Pick a random word, replace characters with underscore, show hidden letter
  randomWord = words[Math.floor(Math.random() * words.length)];
  for (let index = 0; index < randomWord.length; index++) {
    guessingWord.push('_')
  }
}
function updateDisplay(){
  wordToGuessEl.textContent=guessingWord.join('');
  remainingGuessesEl.textContent=guessCount;
  incorrectLettersEl.textContent=guessedLetters;
}