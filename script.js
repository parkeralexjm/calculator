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