function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

let a = Number(prompt("What is a?"));
let b = Number(prompt("What is b?"));
let operator = prompt("What's the operator?")

function operate (a, b, operator) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    } else {
        console.log('oops');
    }
}

console.log(operate(a, b, operator));




