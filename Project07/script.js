// Grab DOM elements from HTML.

const word = document.getElementById('word');
const wrongLetters = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-conatiner');
const message = document.getElementById('win-loss');
const restartButton = document.getElementById('restart');
const notitification = document.getElementById('slider-container');

const hangmanPart = document.querySelectorAll('.hangman-part');

// An array of words to select form
const wordPool = ['javasript', 'computer', 'facebook', 'youtube', 'hangman', 'tashfeen'];

// Selecting the word at random from the pool
let selectWord = wordPool[Math.floor(Math.random() * wordPool.length)];

// Arrays to classify the the input of the user
const correctLetters = [];
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
    if (wordText === selectWord) {
        message.innerText = 'You Won!';
        popup.style.display = 'flex';

    }
};

// Function to display the sliding notification
function showNotification() {
    notitification.classList.add('show');

    setTimeout(() => { notitification.classList.remove('show'); }, 3000);
}

// Function to update Incorrect Letters

function updateWrongLetters() {
    // update the display for wrong letters
    wrongLetters.innerHTML = `
    ${incorrectLetters.length > 0 ? `<p>Wrong</p>` : ''}
    ${incorrectLetters.map(letter => `<span>${letter}</span>`)}
    
    `;

    // Display Hangman Parts on Incorrect Letter input
    hangmanPart.forEach((part, index) => {
        const errors = incorrectLetters.length;

        if (index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    })

    // Show Popup if lost
    if (incorrectLetters.length === hangmanPart.length) {
        message.innerText = 'You lost';
        popup.style.display = 'flex';
    }

}


// Event Handlers
// 1. Event handler for keyboard Button press
window.addEventListener('keydown', e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;
        if (selectWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displaySelectedWord();
            } else {
                showNotification();
            }
        } else {
            if (!incorrectLetters.includes(letter)) {
                incorrectLetters.push(letter);
                updateWrongLetters();
            } else {
                showNotification();
            }
        }
    }
})

// 2. Event Listner for Restart button
restartButton.addEventListener('click', () => {
    // Empty arrays
    correctLetters.splice(0);
    incorrectLetters.splice(0);

    // Get a new selected word from the pool
    selectWord = wordPool[Math.floor(Math.random() * wordPool.length)];
    displaySelectedWord();

    // Clear the wrong letters
    updateWrongLetters();

    // Hide the popup
    popup.style.display = 'none'


})

displaySelectedWord();
