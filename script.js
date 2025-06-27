
let screen = document.querySelector('.screen');
const calculator = document.querySelector(".container");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");

let input = [];
let numberOne = null;
let numberTwo = null;
let result;
let operator;
let operatorIsClicked = false;

   
// FUNCTIONS ____________________________________________________
function doAdd(a, b) {
    return a + b;
}
function doSubtract(a, b) {
    return a - b;
}
function doDivide (a, b) {
    return a / b;
}
function doMultiply (a, b) {
        return a * b;
}
function getInput(item) {
    input.push(item)
    screen.textContent = input.join('');
}
function clear() {
    input = [];
    screen.textContent = null;
    operator = undefined;
    numberOne = null;
    numberTwo = null;
    operatorIsClicked = false;
    result = 0;   
}

function selectOperator(event) {
    let target = event.target;
    let useFunction;
    switch (target.className) {
        case 'add':
            useFunction = doAdd;
            break;
        case 'subtract':
            useFunction = doSubtract;
            break;
        case 'multiply':
            useFunction = doMultiply;
            break;
        case 'divide':
            useFunction = doDivide;
            break;
    }
    if (input.length === 0) {
        event.preventDefault();
    } else {
        if (operatorIsClicked && input.length !== 0) {
            numberTwo = parseFloat(input.join(''));
            operate(numberOne, numberTwo, operator);
            operatorIsClicked = true;
            operator = useFunction;
            screen.textContent = result;
            numberOne = result;

        } else if (operatorIsClicked && input.length === 0) {
            event.preventDefault();
            operator = useFunction;
        } else {
            operatorIsClicked = true;
            operator = useFunction
            numberOne = parseFloat(input.join(''));
            input = [];
        }
    }
}

function operate(inputOne, inputTwo, func) {
    if (numberTwo === 0 && operator === doDivide) {
        alert("Damn you!! How dare you divide a number with zero?!?! Nice try =)");
        clear();
    } else {
        result = func(inputOne, inputTwo);
        input = [];
        operatorIsClicked = false;
    } 
    return result
}
// END OF FUNCTIONS

// EVENTLISTENERS
window.addEventListener("keydown", event => {
    console.log(event.code);
})
calculator.addEventListener('click', (event) => {
    let target = event.target;
    switch (target.className) {
        case 'point':
            if (input.length === 0) {
                event.preventDefault();
            } else if (input.includes(".")) {
                event.preventDefault();
            } else {
                getInput(".");
            }
            break;
        case 'zero':
            getInput(0);
            break;
        case 'one':
            getInput(1);
            break;
        case 'two':
            getInput(2);
            break;
        case 'three':
            getInput(3);
            break;
        case 'four':
            getInput(4);
            break;
        case 'five':
            getInput(5);
            break;
        case 'six':
            getInput(6);
            break;
        case 'seven':
            getInput(7);
            break;
        case 'eight':
            getInput(8);
            break;
        case 'nine':
            getInput(9);
            break;
        
        case 'ac':
            clear();
            break;
        case 'del':
            input.pop();
            screen.textContent = input.join('');

            break;
        case 'equals':
            if (numberOne !== null && input.length !== 0) {
                numberTwo = parseFloat(input.join(''));
                operate(numberOne, numberTwo, operator);
                if (result !== Math.floor(result)) {
                    screen.textContent = result.toFixed(2);
                } else {
                    screen.textContent = result;
                }
                operator = undefined;
                numberOne = null;
                numberTwo = null;
                result = null;
                break;
            }
            
    }
});

add.addEventListener("click", selectOperator);
subtract.addEventListener("click", selectOperator);
multiply.addEventListener("click", selectOperator);
divide.addEventListener("click", selectOperator);

