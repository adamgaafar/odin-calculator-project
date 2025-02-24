let firstNum = '';
let operator = '';
let secondNum = '';
let resultDisplayed = false;

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.btn');
    const display = document.querySelector('.calc-screen');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const value = btn.getAttribute('data-value');


            // Number or Decimal Clicked
            if (!isNaN(value) || value === '.') {
                if (resultDisplayed || display.textContent === '0') {
                    // Replace default 0 instead of appending
                    display.textContent = value;
                } else {
                    display.textContent += value;
                }
                resultDisplayed = false;
            }

            // Clear Button Clicked
            else if (value === 'reset') {
                display.textContent = '0';
                firstNum = '';
                secondNum = '';
                operator = '';
            }

            // Operator Clicked
            else if (value === '+' || value === '-' || value === '*' || value === '/') {
                if (firstNum === '') {
                    firstNum = display.textContent;
                }
                operator = value;
                display.textContent = ''; // Prepare for second number input
            }

            // Equals Clicked
            else if (value === '=') {
                if (firstNum && operator) {
                    secondNum = display.textContent;
                    let result = operate(parseFloat(firstNum), parseFloat(secondNum), operator);

                    display.textContent = result;
                    resultDisplayed = true;
                }
            }
        });
    });
});

function operate(x, y, operator) {
    if (operator === "+") return x + y;
    if (operator === "-") return x - y;
    if (operator === "*") return x * y;
    if (operator === "/") return y === 0 ? "Error" : x / y;
}