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
var guessCount = 10;
var wins=0
var loses=0

//Pick a random word, replace characters with underscore, show hidden letter
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord)
for (let index = 0; index < randomWord.length; index++) {
  guessingWord.push('_')
}

wordToGuessEl.textContent = guessingWord.join('');
remainingGuessesEl.textContent = guessCount;

document.addEventListener(
  "keyup",
  function (event) {
    var letterPressed = event.key;
    //When the user presses a letter key, your code should check whether the letter is included in the word.
    if (randomWord.includes(letterPressed)) {
      //If the letter is included, it should replace the underscores in the displayed word (displayed in the #word-to-guess element) with the instances of that letter.
      var findLetter = randomWord[randomWord.indexOf(letterPressed)];
      console.log(findLetter)
      for (let index = 0; index < randomWord.length; index++) {
        if (letterPressed === randomWord[index]) {
          guessingWord[index] = findLetter
        }
      }
      wordToGuessEl.textContent = guessingWord.join('');
    } else {
      //If the letter is not included, the #word-to-guess element should remain unchanged
      //incorrectly-guessed letter should be added to the #incorrect-letters element and the #remaining-guesses element should reflect one fewer remaining guess.
        if (guessedLetters.includes(letterPressed)) {
          return
        } else {
          guessedLetters.push(letterPressed)
          guessCount--;
          incorrectLettersEl.textContent=guessedLetters
          remainingGuessesEl.textContent = guessCount;
        }
    }
  },
  false
);
