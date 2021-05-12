'use strict'

/*
1.Happy Numbers
a. A happy number is a number defined by the following process: startingwith any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1. An example of a happy number is 19
b. https://en.wikipedia.org/wiki/Happy_number
*/

let result = 0;
let next = 0;
let isHappy = false;

let number = prompt('Check for Happy Number: '); // get number to check from user
let checkNumber = number;
// loop to check for happy number
while (next < 50) {
  for (let i = 0; i < countDigits(number); i++) {
    result = result + sqrt(parseInt(number.toString()[i]));
  }
  if (result === 1) {
    console.log(checkNumber + ' is Happy!!!')
    break;
  } else {
    number = result;
    result = 0;
    next++;
  }
}

// find square root of number
function sqrt(num) {
  return num * num;
}

// count the digits in a number
function countDigits(num) {
  return num.toString().length;
}

/*
2.Prime Numbers
a. A prime number is a number that is only divisible by one and itself.
b. Write a function that prints out all prime numbers between 1 and 100 
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 
67, 71, 73, 79, 83, 89, 97*/

// identify prime number
function isPrime(num) {
  for (let i = 2; i < 10; i++){
    
  }
}


// print prime numbers
for (let i = 1; i <= 100; i++) {
  console.log(i, isPrime(i));
}

/*
3.Fibonacci
a. A series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
b.Write a method that does the Fibonacci sequence starting at 1
c.HARDER VERSION: Write a function that does the Fibonacci sequence starting at a number that a user inputs
*/
console.log('*** Fibonacci ***')
function fibonacci(num) {
  let num1 = 1;
  let num2 = 0;
  let tmp;
  let seq = [];

  while (num >= 0) {
    tmp = num1;
    num1 = num1 + num2;
    num2 = tmp;
    num--;
    seq.push(num2);
  }
  return seq;
}


function fibonacci2() {
  // get user input
  let num1 = prompt("Fibonacci: Starting value (default=1) : ");
  let times = prompt("Nbr of iterations (default=10) : ");
  
  // convert input to integers
  num1 = parseInt(num1);
  times = parseInt(times);

  // declare local varibles
  let num2 = 0;
  let tmp;
  let seq = [];

  // set defaults for undefined parameters
  isNaN(num1) || num === 0 ? num1 = 1 : num1;
  isNaN(times) ? times = 10 : times;

  // run fibonacci sequence
  for (let i = 0; i < times; i++) {
    tmp = num1;
    num1 = num1 + num2;
    num2 = tmp;
    seq.push(num2);
  }
  return seq;
}



//console.log(fibonacci(27));
console.log(fibonacci2());
