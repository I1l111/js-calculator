let lastClicked = 'number';
let firstOperand = 0;
let action = 'assign';


// Adding Event Listeners for numbers.
const numbers = document.getElementsByClassName('number');
for (let number of numbers) {
    let numId = number.id;
    number = document.getElementById(numId);
    number.addEventListener('click', function() {
        num = +number.innerHTML;
        if (parseFloat(document.getElementById('calc--display').innerHTML) === 0 && !document.getElementById('calc--display').innerHTML.includes('.') || lastClicked === 'operator') {
            document.getElementById('calc--display').innerHTML = num;
            lastClicked = 'number';
        } else if (document.getElementById('calc--display').innerHTML.length < 15) {
            document.getElementById('calc--display').innerHTML += num;
        }
    })
};

// Adding Event Listener for point.
const point = document.getElementById('decimal');
point.addEventListener('click', () => {
    if (!document.getElementById('calc--display').innerHTML.includes('.'))
        document.getElementById('calc--display').innerHTML = parseFloat(document.getElementById('calc--display').innerHTML) + '.';
});

const sign = document.getElementById('sign');
sign.addEventListener('click', () => {
    document.getElementById('calc--display').innerHTML = parseFloat(document.getElementById('calc--display').innerHTML) * -1;
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    lastClicked = 'number';
    firstOperand = 0;
    action = 'assign';
    document.getElementById('calc--display').innerHTML = 0
});

// Adding Event Listeners for operators.
const operators = document.getElementsByClassName('operator');
for (let operator of operators) {
    let operatorId = operator.id;
    operator = document.getElementById(operatorId);
    operator.addEventListener('click', function() {
        if (lastClicked === 'number') {
            lastClicked = 'operator';
            document.getElementById('calc--display').innerHTML = action === 'equals' ? parseFloat(document.getElementById('calc--display').innerHTML) : parseFloat(calculateResult(action, firstOperand, parseFloat(document.getElementById('calc--display').innerHTML)));
            firstOperand = parseFloat(document.getElementById('calc--display').innerHTML);
        }
        action = this.id;
    })
}

function calculateResult(action, n1, n2) {
    let result = action === 'multiply' ? n1 * n2 : action === 'divide' ? n1 / n2 : action === 'add' ? n1 + n2 : action === 'subtract' ? n1 - n2 : n2;
    result = parseFloat(result.toFixed(12));
    return result;
}