// JavaScript functionality for the calculator

// Get references to the input and buttons
const input = document.getElementById('input');
const buttons = document.querySelectorAll('.button');
const clearButton = document.getElementById('clear');
const eraseButton = document.getElementById('erase');
const equalButton = document.getElementById('equal');

// Variable to store the current expression
let currentExpression = "";

// Function to update the display
function updateDisplay() {
    input.value = currentExpression || "0";
}

// Add event listeners to digit and operation buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        currentExpression += button.value;
        updateDisplay();
    });
});

// Clear button functionality
clearButton.addEventListener('click', () => {
    currentExpression = "";
    updateDisplay();
});

// Erase button functionality
eraseButton.addEventListener('click', () => {
    currentExpression = currentExpression.slice(0, -1);
    updateDisplay();
});

// Equal button functionality
equalButton.addEventListener('click', () => {
    try {
        // Evaluate the expression and update the display
        currentExpression = eval(currentExpression).toString();
    } catch (error) {
        // Handle invalid expressions
        currentExpression = "Error";
    }
    updateDisplay();
});
