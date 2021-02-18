var add = function(num1,num2){
    return num1 + num2;
};

var num1 = parseInt(prompt("Enter a number: "))
var num2 = parseInt(prompt("Enter another number: "))
var result = add(num1,num2);
alert("The sum of your numbers is " + result);

// Subtraction
var subtract = function(num1,num2){
    return num1 - num2;
};
var subtract_result = num1 - num2;
alert("The difference of your numbers is " + subtract_result); 

// Multipliction
var multiply = function(num1,num2){
    return num1 * num2;
};
var multiply_result = num1 * num2;
alert("The multiple of your numbers is " + multiply_result); 