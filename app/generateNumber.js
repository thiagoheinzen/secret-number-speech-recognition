// Defining the lower and upper bounds of the possible number range
const lowerValue = 1;
const upperValue = 100;

// Generating a random number within the specified range
const secretNumber = generateRandomNumber();

// Function to generate a random number between 1 and the maximum value (including)
function generateRandomNumber() {
    return Math.floor(Math.random() * upperValue) + 1;
}

// Selecting the HTML element where the minimum value will be displayed
const lowerValueElement = document.getElementById('lower-value');
// Setting the content of the selected element to the minimum value
lowerValueElement.innerHTML = lowerValue;

// Selecting the HTML element where the maximum value will be displayed
const upperValueElement = document.getElementById('upper-value');
// Setting the content of the selected element to the maximum value
upperValueElement.innerHTML = upperValue;
