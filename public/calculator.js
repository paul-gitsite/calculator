const resultInput = document.getElementById('result');
let currentInput = '';

const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

function appendNumber(number) {
    currentInput += number;
    updateResult();
}

function appendOperator(operator) {
    currentInput += ` ${operator} `;
    updateResult();
}

function clearResult() {
    currentInput = '';
    updateResult();
}

function calculate() {
    try {
        // Using eval for simplicity. In a real-world application, you might want to use a more secure way to evaluate expressions.
        const result = eval(currentInput);
        currentInput = result.toString();
        updateResult();
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}

function updateResult() {
    resultInput.value = currentInput;
}