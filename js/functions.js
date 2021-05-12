"use strict"

//Example function:
function DisplayName(name) {
   console.log(name); //this is the logic of the function
}
//The above function takes in a variable, known as the parameter.
//In this example, that variable is name.
//The function then prints to the console the value that is passed in 
DisplayName("Mike");
DisplayName("Ian");
DisplayName("Nevin");
//Example 2
function AddOneToNumber(number) {
   let numberOne = 1;
   let addOne = number + numberOne;
   return addOne;
}
let result = AddOneToNumber(30);
//Above we are now calling the function. This means using the function that we wrote.
//Here we are passing in an actual value. In this case, the value is "mike"


//Problem 1
//Write a function that takes in two numbers
//The logic of the function should add those two numbers together and return a sum
//Capture the returned value in a variable and print it to the console
function sum(num1, num2) {
   return num1 + num2;
}
let grandTotal = sum(500,250)
console.log(grandTotal);


//Problem 2
//Write a function that takes in two strings
//The logic of the function should concatenate those two strings together and return the concatenated result
//Capture the returned value in a variable and print it to the console
function combineString(string1, string2) {
   return string1 + string2;
}
let combinedStrings = combineString('Craig ', 'Satchell');
console.log(combinedStrings);


//Problem 3
//Write a function that takes in a string
//The logic of the function should print each character of the string one at a time to the console
//HINT: for loop is one way to do this
function iterateString(string) {
   for (let i = 0; i < string.length; i++){
      console.log(string[i]);
   }
}

let string = prompt('Type text to iterate: ');
iterateString(string);


//Problem 4
//Write a function that takes in a string
//The logic of the function should print the string to the console but only if that string has three or more characters in it
//If it is less than three characters, then print to the console "we need a larger string to print!"
function validateStringLength(string) {
   if (string.length < 3) {
      console.log(string);
   }
}

let string2 = prompt('Type text to validate length: ');
validateStringLength(string2);