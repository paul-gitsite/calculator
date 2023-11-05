// Calculator

const resultInput = document.getElementById('resultcalc');
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
// Calculator
// bmi
function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight === '' || height === '') {
        alert('Please enter both weight and height to calculate BMI.');
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    let result = '';
    if (bmi < 18.5) {
        result = `Oops your BMI is ${bmi}. So you are underweight. Don't worry, you've got this!`;
    } else if (bmi >= 18.5 && bmi < 25) {
        result = `Hooray your BMI is ${bmi}. Congratulations! You have a normal weight. Keep it up!`;
    } else if (bmi >= 25 && bmi < 30) {
        result = `Hey you foodie! your BMI is ${bmi}. You are overweight. You're taking steps in the right direction!`;
    } else {
        result = `Your BMI is ${bmi}. You are obese. You're on the path to a healthier you! You can do it!`;
    }

    document.getElementById('resultbmi').innerText = result;
}
//   bmi



function generateFibonacci() {
    const number = document.getElementById('num').value;
    let fibSequence = '';
  
    if (number === '') {
        alert('Please enter a number.');
        return;
    }
  
    let a = 0, b = 1, nextTerm;

    for (let i = 1; i <= number; i++) {
        fibSequence += a + ' ';
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
  
    document.getElementById('result').innerText = 'Fibonacci Sequence: ' + fibSequence;
}
