var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var wordToGuessEl=document.getElementById('word-to-guess');
var previousWordEl=document.getElementById('previous-word');
var incorrectLettersEl=document.getElementById('incorrect-letters');
var remainingGuessesEl=document.getElementById('remaining-guesses');
var winsEl=document.getElementById('wins');
var lossesEl=document.getElementById('losses');

//Pick a random word, replace characters with underscore, show hidden word
var randomWord=words[Math.floor(Math.random() * words.length)];
wordToGuessEl.textContent=randomWord.replace(/[a-z]/g, '_');

var guessCount=10
remainingGuessesEl.textContent=guessCount;



