
let screen = document.querySelector('.screen');
const calculator = document.querySelector(".container");
let input = [];
let numberOne;
let numberTwo;
let result;
let operator;

calculator.addEventListener('click', (event) => {
    let target = event.target;
    switch (target.className) {
        case 'point':
            getInput(".");
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
        case 'add':
            numberOne = numberTwo;
            operator = doAdd;
            input = [];
            break;
        case 'subtract':
            numberOne = numberTwo;
            input = [];
            operator = doSubtract;
            break;
        case 'multiply':
            numberOne = numberTwo;
            operator = doMultiply;
            input = [];
            break;
        case 'divide':
            numberOne = numberTwo;
            operator = doDivide;
            input = [];
            break;
        case 'ac':
            input = [];
            screen.textContent = '0';
            break;
        case 'del':
            console.log("del");
            break;
        case 'equals':
            operate(numberOne, numberTwo, operator);
            screen.textContent = result;
            break;
    }
});

   
// FUNCTIONS ____________________________________________________

 function getInput(item) {
     input.push(item)
     screen.textContent = input.join('');
     return numberTwo = (parseFloat(input.join(''))); 
}  

function doAdd(a, b) {
    return a + b;
}
function doSubtract(a, b) {
    return a - b;
}
function doDivide (a, b) {
    return a / b
}
function doMultiply (a, b) {
        return a * b;
}
function operate(inputOne, inputTwo, func) {
    result = func(inputOne, inputTwo);
    return result;
}

