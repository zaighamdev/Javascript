// Grab DOM elements from HTML.

const word = document.getElementById('word');
const wrongLetters = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-conatiner');
const message = document.getElementById('win-loss');
const restartButton = document.getElementById('restart');
const notitification = document.getElementById('slider-container');

const handmanPart = document.querySelectorAll('.hangman-part');

// An array of words to select form
const wordPool = ['javasript', 'computer', 'facebook', 'youtube', 'hangman'];

// Selecting the word at random from the pool
let selectWord = wordPool[Math.floor(Math.random() * wordPool.length)];

// Arrays to classify the the input of the user
const correctLetters = ['a', 'i', 'o', 'e', 'u', 'f'];
const incorrectLetters = [];

// Fucntion to display the word
function displaySelectedWord() {
    word.innerHTML = `
        ${selectWord
            .split('')
            .map(
                letter => `
                    <span class="letter">
                        ${correctLetters.includes(letter) ? letter : ''}
                    </span>
                `
            )
            .join('')
        }

    `;

    const wordText = word.innerText.replace(/\n/g, '');
    console.log(word.innerText);
    console.log(wordText);
}
displaySelectedWord();