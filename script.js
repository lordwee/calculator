
// const add = document.querySelector(".add");
// const subtract = document.querySelector(".subtract");
// const multiply = document.querySelector(".multiply");
// const divide = document.querySelector(".divide");
// const equals = document.querySelector(".equals");
// const zero = document.querySelector(".zero");
// const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const three = document.querySelector(".three");
// const four = document.querySelector(".four");
// const five = document.querySelector(".five");
// const six = document.querySelector(".six");
// const seven = document.querySelector(".seven");
// const eight = document.querySelector(".eight");
// const nine = document.querySelector(".nine");
// const point = document.querySelector(".point");
// const ac = document.querySelector(".ac");
// const del = document.querySelector(".del");
let screen = document.querySelector('.screen');
const calculator = document.querySelector(".container");
let inputs = [];
let firstNumber = inputs.join();
console.log(inputs);
calculator.addEventListener('click', (event) => {
    let target = event.target;
    switch (target.className) {
        case 'zero':
            if (inputs.length < 12) inputs.push(0);
            
            screen.textContent = inputs.join('');
            break;
        case 'one':
            inputs.push(1);
            screen.textContent = inputs.join('');
            break;
        case 'two':
            inputs.push(2);
            screen.textContent = firstNumber;
            break;
        case 'three':
            inputs.push(3);
            screen.textContent = inputs.join('');
            break;
        case 'four':
            inputs.push(4);
            screen.textContent = inputs.join('');
            break;
        case 'five':
            inputs.push(5);
            screen.textContent = inputs.join('');
            break;
        case 'six':
            inputs.push(6);
            screen.textContent = inputs.join('');
            break;
        case 'seven':
            inputs.push(7);
            screen.textContent = inputs.join('');
            break;
        case 'eight':
            inputs.push(8);
            screen.textContent = inputs.join('');
            break;
        case 'nine':
            inputs.push(9);
            screen.textContent = inputs.join('');
            break;
        case 'add':
            doAdd(firstNumber);
            break;
        case 'subtract':
            doSubtract();
            break;
        case 'multiply':
            doMultiply()
            break;
        case 'divide':
            doDivide()
            break;
        case 'ac':
            inputs = [];
            screen.textContent = '';
            break;
        case 'del':
            console.log("del");
            break;
        case 'point':
            inputs.push('.');
            screen.textContent = inputs.join('');
            break;
        case 'equals':
            console.log("equals")
    }
});
let firstInput;
let secondInput;
let operator;

// FUNCTIONS ____________________________________________________

function doAdd(a, b) {
    console.log(firstNumber);
    
 }
function doSubtract(a, b) {
    return a - b;
 }
function doMultiply(a, b) {
    return a * b;
 }
function doDivide(a, b) {
    
    let result = a / b;
    return result.toFixed(2);
}
function operate(inputOne, inputTwo, operator) {
    
}

