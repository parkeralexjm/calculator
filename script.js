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
};

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

function reportOutput () {
    if (isFinite(output)) {
        document.getElementById("calcDisplay").innerHTML = Math.round(100000000000000*output)/100000000000000
    } else {
        document.getElementById("calcDisplay").innerHTML = "You cannot divide by zero..."
        clearAll();
        output = "";
    }  
}

// Select all inputs from the DOM
let buttonList = document.querySelectorAll("input");
    // For each input element do the following function
    buttonList.forEach(element => { 
        // When the input is clicked perform the following function
        element.addEventListener("click", function(e) {
            // If input is NaN
            if (isNaN(Number(e.target.value))) {
                // If the input value is "Clear" then clear the variables and reset the calculator
                if (e.target.value == "Clear") {
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
                        reportOutput();
                        clearAll();
                        tempInputOne = output;
                        tempOperator = "add"
                    } 
                    // If tempInputOne does not have a value, store tempInput and operator
                    // and wait for a new input
                    else {
                        tempInputOne = tempInput; 
                        tempOperator = "add";
                        output = 0;
                        reportOutput();
                        tempInput = "";
                    }
                }
                // If the input value is "-"
                else if (e.target.value == "-") {
                    // If tempInputOne has a value, perform the previous function then 
                    // store the new value as tempInput
                    if (tempInputOne !== "") {
                        output = operate(Number(tempInputOne), Number(tempInput), tempOperator);
                        reportOutput();
                        clearAll();
                        tempInputOne = output;
                        tempOperator = "subtract"
                    } 
                    // If tempInputOne does not have a value, store tempInput and operator
                    // and wait for a new input
                    else {
                        tempInputOne = tempInput; 
                        tempOperator = "subtract";
                        output = 0;
                        reportOutput();
                        tempInput = "";
                    }
                }
                // If the input value is 'x'
                else if (e.target.value == "x") {
                    // If tempInputOne has a value, perform the previous function then 
                    // store the new value as tempInput
                    if (tempInputOne !== "") {
                        output = operate(Number(tempInputOne), Number(tempInput), tempOperator);
                        reportOutput();
                        clearAll();
                        tempInputOne = output;
                        tempOperator = "multiply"
                    } 
                    // If tempInputOne does not have a value, store tempInput and operator
                    // and wait for a new input
                    else {
                        tempInputOne = tempInput; 
                        tempOperator = "multiply";
                        output = 0;
                        reportOutput();
                        tempInput = "";
                    }
                }
                // If the input button is '÷'
                else if (e.target.value == "÷") {
                        // If tempInputOne has a value, perform the previous function then 
                        // store the new value as tempInput
                        if (tempInputOne !== "") {
                            output = operate(Number(tempInputOne), Number(tempInput), tempOperator);
                            console.log(output)
                            reportOutput();
                            clearAll();
                            tempInputOne = output;
                            tempOperator = "divide"
                        } 
                        // If tempInputOne does not have a value, store tempInput and operator
                        // and wait for a new input
                        else {
                            tempInputOne = tempInput; 
                            tempOperator = "divide";
                            output = 0;
                            reportOutput();
                            tempInput = "";
                        }
                }
                // If the input button is "="
                else if (e.target.value == "=") {
                    if (tempInput == "" || tempInputOne == "" || tempOperator == "") {
                        document.getElementById("calcDisplay").innerHTML = "Please enter two numbers"
                        clearAll;
                    }
                    else {
                    output = operate(Number(tempInputOne), Number(tempInput), tempOperator);
                    reportOutput();
                    tempInput = output;
                    tempOperator = "equals"
                    }
                }
                // If the input is "." add a decimal point to the number
                else if (e.target.value == ".") {
                    tempInput += ".";
                    document.getElementById("calcDisplay").innerHTML = Math.round(100000000000000*tempInput)/10000000000000
                }
                // If the input is "Delete"
                else {
                    // If the current number is 2 or above, remove the last digit
                    if (tempInput.length >= 2) {
                    tempInput = tempInput.slice(0, -1);
                    document.getElementById("calcDisplay").innerHTML = Math.round(100000000000000*tempInput)/100000000000000
                    } 
                    // If the current number has 1 digit, change it to zero
                    else if (tempInput.length == 1) {
                        tempInput = 0;
                        document.getElementById("calcDisplay").innerHTML = Math.round(100000000000000*tempInput)/100000000000000
                    }
                }
            } else {
            // If input is a number
            // Concatenate the value to tempInput
            if (tempOperator == "equals") {
                clearAll();
                output = 0;
            }
            tempInput += e.target.value;
            document.getElementById("calcDisplay").innerHTML = Math.round(100000000000000*tempInput)/100000000000000
            }
        }) 
    });

    