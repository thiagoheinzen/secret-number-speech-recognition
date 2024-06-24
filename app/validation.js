// Function to validate the guessed number
function validateGuess(guess) {
  const number = +guess; // Convert the guess to a number

  // Check if the guess is invalid (not a number)
  if (isGuessInvalid(number)) {
    guessElement.innerHTML += "<div>Invalid value</div>"; // Display an invalid value message
    return;
  }

  // Check if the guess is out of the allowed range
  if (isNumberOutOfRange(number)) {
    guessElement.innerHTML += `<div>Invalid value: Speak a number between ${lowerValue} and ${upperValue}</div>`;
    return;
  }

  // Check if the guess matches the secret number
  if (number === secretNumber) {
    // Replace the body content with a success message and 'Play Again' button
    document.body.innerHTML = `
            <div class="container">
            <h2>You guessed it!</h2>
            <h3>The secret number was ${secretNumber}</h3>
            <button id="play-again" class="btn-play">Play Again</button>
            </div>
        `;
  } else if (number > secretNumber) {
    // Append a hint that the secret number is smaller
    guessElement.innerHTML += `<div>The secret number is smaller <i class="fa-solid fa-down-long"></i></div>`;
  } else {
    // Append a hint that the secret number is larger
    guessElement.innerHTML += `<div>The secret number is larger <i class="fa-solid fa-up-long"></i></div>`;
  }
}

// Function to check if the guess is not a valid number
function isGuessInvalid(number) {
  return Number.isNaN(number);
}

// Function to check if the guess is out of the allowed range
function isNumberOutOfRange(number) {
  return number > upperValue || number < lowerValue;
}

// Add an event listener to the body to handle 'Play Again' button clicks
document.body.addEventListener("click", (e) => {
  // Reload the page if the 'Play Again' button is clicked
  if (e.target.id === "play-again") {
    window.location.reload();
  }
});
