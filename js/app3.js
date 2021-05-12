"use strict";

// For loops
// 1.	Write a for loop that will run five times and print “hello!” to the console five times
for (let i = 0; i < 5; i++){
   console.log('hello')
}

// 2. Write a for loop that counts from 0 to 10, with each number being print to the console one at a time
for (let i = 0; i <= 10; i++){
   console.log(i)
}

// 3. Write a for loop that counts from 10 to 0, with each number being print to the console one at a time
for (let i = 10; i >= 0; i--){
   console.log(i)
}

// 4.	Write a for loop that will run as many times as a user wants, with each iteration printing “devCodeCamp” to the console. HINT: you will need to use the JavaScript prompt() function to gather user input
let times = prompt("Enter a number of times to iterate: ")
for (let i = 0; i < times; i++){
   console.log('devCodeCamp')
}


// 5.	Write a for loop that will print each character of the string “Packers” to the console. 
let string = 'Packers'
for (let i = 0; i < string.length; i++){
   console.log(string[i])
}



//While loops
//1.	Write a while loop that will run five times and print “hello!” to the console five times
let i = 0;
while (i < 5) {
   console.log('hello')
   i++
}

//2.	Write a while loop that will prompt a user for their password and will continue to prompt the user until the typed in password is correct. If correct, print to the console “User Validated”

let correctPassword = 'passw0rd'
let inputPassword = ''
while (inputPassword != correctPassword) {
   inputPassword = prompt('password: ')
}
console.log('User Validated')