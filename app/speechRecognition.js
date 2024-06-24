// Selecting the HTML element where the guess will be displayed
const guessElement = document.getElementById('guess');
// Selecting the HTML element for the 'Play Again' button
const playAgainButtonElement = document.getElementById('play-again');

// Setting up SpeechRecognition (including vendor prefix for compatibility)
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

// Creating a new instance of SpeechRecognition
const recognition = new SpeechRecognition();
// Setting the language for speech recognition to English (United States)
recognition.lang = 'en-US';
// Starting speech recognition
recognition.start();

// Adding an event listener to handle the speech result
recognition.addEventListener('result', onSpeak);

// Function to handle the speech result event
function onSpeak(e) {
    // Getting the spoken text from the result
    const spokenText = e.results[0][0].transcript;
    // Extracting numbers from the spoken text
    const numbers = spokenText.match(/\d+/g);

    if (numbers) {
        // Joining extracted numbers into a single string
        const number = numbers.join('');
        // Displaying the guess on the screen
        displayGuessOnScreen(number);
        // Checking if the guess is a valid number
        validateGuess(number);
    } else {
        // Displaying a message if no number was recognized
        displayGuessOnScreen('No number recognized');
    }

    // Displaying the 'Play Again' button
    displayPlayAgainButton();
}

// Function to display the 'Play Again' button
function displayPlayAgainButton() {
    playAgainButtonElement.style.display = 'block';
}

// Function to display the guess on the screen
function displayGuessOnScreen(guess) {
    guessElement.innerHTML = `
        <div>You said:</div>
        <span class="box">${guess}</span>
    `;
}

// Restarting speech recognition when it ends
recognition.addEventListener('end', () => recognition.start());
