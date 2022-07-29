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
var tempInputOne = "";
var tempOperator = "";
var output = 0;

function clearAll () {
    tempInput = "";
    tempInputOne = "";
    tempOperator = "";
}

// Select all inputs from the DOM
let buttonList = document.querySelectorAll("input");
    // For each input element do the following function
    buttonList.forEach(element => { 
        // When the input is clicked perform the following function
        element.addEventListener("click", function(e) {
            // If input is NaN
            if (isNaN(Number(e.target.value))) {
                // If the input value is "AC" then clear the variables and reset the calculator
                if (e.target.value == "AC") {
                    clearAll();
                    document.getElementById("calcDisplay").innerHTML = 0
                    output = 0;
                } 
                // If the input value is "+"
                else if (e.target.value == "+") {
                    // If tempInputOne has a value, perform the previous function then 
                    // store the new value as tempInput
                    if (tempInputOne !== "") {
                        output = operate(Number(tempInputOne), Number(tempInput), tempOperator);
                        document.getElementById("calcDisplay").innerHTML = output;
                        clearAll();
                        tempInputOne = output;
                        tempOperator = "add"
                    } 
                    // If tempInputOne does not have a value, store tempInput and operator
                    // and wait for a new input
                    else {
                        tempInputOne = tempInput; 
                        tempOperator = "add";
                        document.getElementById("calcDisplay").innerHTML = output;
                        tempInput = "";
                    }
                }
                // If the input value is "-"
                else if (e.target.value == "-") {
                    // If tempInputOne has a value, perform the previous function then 
                    // store the new value as tempInput
                    if (tempInputOne !== "") {
                        output = operate(Number(tempInputOne), Number(tempInput), tempOperator);
                        document.getElementById("calcDisplay").innerHTML = output;
                        clearAll();
                        tempInputOne = output;
                        tempOperator = "subtract"
                    } 
                    // If tempInputOne does not have a value, store tempInput and operator
                    // and wait for a new input
                    else {
                        tempInputOne = tempInput; 
                        tempOperator = "subtract";
                        document.getElementById("calcDisplay").innerHTML = output;
                        tempInput = "";
                    }
                }
                // If the input value is 'x'
                else if (e.target.value == "x") {
                    // If tempInputOne has a value, perform the previous function then 
                    // store the new value as tempInput
                    if (tempInputOne !== "") {
                        output = operate(Number(tempInputOne), Number(tempInput), tempOperator);
                        document.getElementById("calcDisplay").innerHTML = output;
                        clearAll();
                        tempInputOne = output;
                        tempOperator = "multiply"
                    } 
                    // If tempInputOne does not have a value, store tempInput and operator
                    // and wait for a new input
                    else {
                        tempInputOne = tempInput; 
                        tempOperator = "multiply";
                        document.getElementById("calcDisplay").innerHTML = output;
                        tempInput = "";
                    }
                }
                // If the input button is '÷'
                else if (e.target.value == "÷") {
                    // If tempInputOne has a value, perform the previous function then 
                    // store the new value as tempInput
                    if (tempInputOne !== "") {
                        output = operate(Number(tempInputOne), Number(tempInput), tempOperator);
                        document.getElementById("calcDisplay").innerHTML = output;
                        clearAll();
                        tempInputOne = output;
                        tempOperator = "divide"
                    } 
                    // If tempInputOne does not have a value, store tempInput and operator
                    // and wait for a new input
                    else {
                        tempInputOne = tempInput; 
                        tempOperator = "divide";
                        document.getElementById("calcDisplay").innerHTML = output;
                        tempInput = "";
                    }
                }
                // If the input button is "="
                else {
                    output = operate(Number(tempInputOne), Number(tempInput), tempOperator);
                    clearAll();
                    tempInputOne = output;
                    document.getElementById("calcDisplay").innerHTML = output;
                }
            } else {
            // If input is a number
            // Concatenate the value to tempInput
            tempInput += e.target.value;
            document.getElementById("calcDisplay").innerHTML = tempInput
            console.log(tempInput)
            }
            console.log(output)
        }) 
    });

    