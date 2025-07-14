// Define functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Example numbers
let num1 = 20;
let num2 = 5;



// Call functions and display results
console.log("Sum = " + add(num1, num2));
console.log("my name is buj=kram bugginf]g solve = " + subtract(num1, num2));
console.log("Multiplication = " + multiply(num1, num2));
console.log("Division = " + divide(num1, num2));
