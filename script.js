// For each function accept two arguments and apply the operator according to
// the function title.

const add = function() {
    return (arguments[0] + arguments[1])
};

const subtract = function() {
	return (arguments[0] - arguments[1])
};

const multiply = function(array) {
	return (arguments[0] * arguments[1])
};

const divide = function() {
    return (arguments[0] / arguments[1])
}

// Function takes two numbers and an operator as input then calls the 
// appropriate function.
const operate = function(a, b, operator) {
    // If the operator is add then perform this action
    console.log(a)
    console.log(b)
    console.log(operator)
    
    if (operator == 'add') {
        return add (a, b);
    }
    // If the operator is subtract then perform this action
    else if (operator == 'subtract') {
        return subtract (a, b);
    } 
    // If the operator is multiply then perform this action
    else if (operator == 'multiply') {
        return multiply (a, b);
    } 
    // If the operator is divide then perform this action
    else {
        return divide (a, b);
    }
    
};

// Create a function to store the number dialed in by the user
var tempInput = "";

// Select all inputs from the DOM
let buttonList = document.querySelectorAll("input");
    // For each input element do the following function
    buttonList.forEach(element => { 
        // When the input is clicked perform the following function
        element.addEventListener("click", function(e) {
            // If input is NaN
            if (isNaN(Number(e.target.value))) {
                // If the input value is "AC" then clear the tempInput variable and reset the calculator
                if (e.target.value == "AC") {
                    tempInput = ""
                    document.getElementById("calcDisplay").innerHTML = 0;
                }
            } else {
            // If input is a number
            // Concatenate the value to tempInput
            tempInput += e.target.value;
            document.getElementById("calcDisplay").innerHTML = tempInput
            console.log(tempInput);
            }
            
        }) 
    });
