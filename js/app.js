"use strict";

// variables

// 1. Age
let age = 58;
console.log('age: ', age);

// 2. First Name
let firstName;
firstName = prompt("What is your first name? ");

// 3. Last Name
let lastName;
lastName = prompt("What is your last name? ");


// 4. Full name
console.log('My first name is ' + firstName + ' and my last name is ' + lastName + ', which means my full name is ' + firstName + ' ' + lastName)

// 5. Temperature Converter
//(32°C × 9/5) + 32

let celsius = 32;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log('fahrenheit: ', fahrenheit)


// 1. Driving Age
let minimumDrivingAge = 16;
let userAge = prompt('Age of driver? ');

if (userAge >= minimumDrivingAge) {
   console.log('You are legally able to drive.');
} else {
   console.log('You are not old enough to drive yet.')
}

// 2. Random Number & Colors
let randNum = Math.floor(Math.random() * 11);
if (randNum <= 2) {
   console.log('0 or 1 or 2');
} else if (randNum > 2 && randNum <= 5) {
   console.log('3 or 4 or 5');
} else if (randNum > 5 && randNum <= 8) {
   console.log('6 or 7 or 8')
} else if (randNum === 9 || randNum === 10) {
   console.log('9 or 10')
}

// 3. NFL Teams Switch-Case
let team = 'Packers';
team = prompt('Enter a NFL team name: ')

switch (team) {
   case 'Bears':
      console.log('Quarterback much?');
      break;
   case 'Vikings':
      console.log('Loud noises!');
      break;
   case 'Lions':
      console.log('LOL! They bad!');
      break;
   case 'Packers':
      console.log('Best team in the world, actually the universe!');
      break;
   default:
      console.log("Don't know that team!")
}
