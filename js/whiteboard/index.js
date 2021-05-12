"use strict";

console.log('<<< Whiteboard Challanges - Pascal >>>');
/*
Whiteboard Challenges
1. Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
   a. Use Case:
      i. Given numbers in an array: [5, 17, 77, 50] 
      ii. Target: 55
      

/*
/*Pseudo
assumptions: You may assume that each input would have exactly one solution, and you may not use the same element twice.


store given numbers to an array
store target value to a number 
outer loop for array
   inner loop for array
      within inner loop make comparison of each outer loop index value to determine whether it equals the target.
if value meets target 
   return to numbers creating the match
*/

function matchTarget() {
   // declare variables
   let numbers = [5, 17, 77, 50];
   let target = 55;
   let match = [];
   let arrLength = numbers.length;

   // perform target comparison
   for (let i = 0; i < arrLength; i++) {
      for (let j = 0; j < arrLength; j++) {
         if (numbers[i] + numbers[j] === target) {
            match.push(numbers[i], numbers[j]);
            return match
         }
      }
   }
}

// output
console.log('*** 1. Perform Target Comparison ***');
console.log('\ttarget = 55: ', matchTarget());



/*
2. Given a number, return the reciprocal of the reverse of the original number, as a double.
   a. Use case: If given 17, return 0.01408 (1/71)

Pseudo:

get number from user input
if input is not valid
   console.log error
   exit function
else
   reverse original number
   get reciprocal of reversed number and return double
   console.log reciprocal reversed number

*/

function reverseStr(string) {
   let newString = '';
   string === undefined ? string = '' : string;
   for (let i = 0; i < string.length; i++) {
      newString += string[string.length - (i + 1)];
   }
   return newString;
}

function getReciprocal() {
   // get user input
   let userInput = prompt('Enter the number to reverse reciprocate: ');
   return calcReciprocal(userInput);

}

function calcReciprocal(input) {
   // check for valid input
   if (parseInt(input) === undefined) {
      return 0;
   } else {    // proceed, if input is valid
      input = reverseStr(input);
      let number = parseInt(input);
      let asDouble = 1 / number;
      return asDouble;
   }
}

// output
console.log('*** 2. Calculate Reciprocal Double ***')
console.log('Reciprocal as double: ', getReciprocal()); //execute main function


/*
3. A briefcase has a four-digit rolling-lock. Each digit is a number from 0-9 that can be rolled either forwards or backwards. Write a method that returns the smallest number of turns it takes to transform the lock from current combination to the target combination. One turn is equivalent to rolling a number forwards or backwards by one.

   a. Use case:
      i.Current lock: 3893
      ii.Target lock: 5296

Pseudo:
store current lock value to variable
store target lock value to variable
calculate fewest turns for each pair of digits in current and target locks
sum the results of each pair digits into fewest turns variable
*/

function fewestComboTurns() {
   let currLock = '3893';
   let targetLock = '5296';
   let turns = 0;

   for (let i = 0; i < currLock.length; i++) {
      if (currLock[i] < targetLock[i]) {
         // roll-down
         turns += parseInt(targetLock[i]) - parseInt(currLock[i]);
      } else if (currLock[i] > targetLock[i]) {
         // roll-up
         turns += (parseInt(targetLock[i]) - parseInt(currLock[i])) + 10;
      }
   }
   return turns;
}

console.log('*** 3. Briefcase Combo Fewest Turns ***');
console.log('\tfewest turns: ', fewestComboTurns());


/*
4. Given a list of integers, return a bool that represents whether or not all integers in the list can form a sequence of incrementing integers

   a. Use case:
      i. {5, 7, 3, 8, 6}  false (no 4 to complete the sequence)
      ii.{17, 15, 20, 19, 21, 16, 18}  true

Pseudo:

sort array of numbers
check for sequential numbers
return true or false

*/

function isSequential(arr) {
   arr.sort((a, b) => a - b); // sort array
   for (let i = 0; i < arr.length; i++) {
      if (i != 0 && (arr[i] != arr[i - 1] + 1)) {
         return false;
      }
   }
   return true;
}
console.log('*** 4. Does Array Contain Sequential Numbers? ***');
console.log('\t', isSequential([5, 7, 3, 8, 6])); // use case i
console.log('\t', isSequential([17, 15, 20, 19, 21, 16, 18])); // use case ii



/*
5. Create a method that takes an array of positive and negative numbers. Return an array where the first element is the count of the positive numbers and the second element is the sum of negative numbers.

   a. Use case: [7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21]

Pseudo:
   store values to an array
   for each item in the array determine whether neg or pos
   sum neg items in one variable and sum pos items in another
   return an array with two elements, one for sum of pos and one for sum of neg.
*/

function sumArrNegPos() {
   let arr = [7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21];
   let sumPos = 0;
   let sumNeg = 0;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
         sumNeg += arr[i];
      } else {
         sumPos += arr[i];
      }
   }
   return [sumNeg, sumPos];
}

console.log('*** 5. Sum Array of Negative and Positive Numbers ***')
console.log(sumArrNegPos());


/*
6. Create a method that accepts a string of space separated numbers and returns the highest and lowest number as a string

   a. Use case: “3 9 0 1 4 8 10 2”  “0 10”

   Pseudo:
   get user input and store to string variable
   parse string variable into array containing numbers
   sort string array
   convert each element from string array into a number and store to new array containing numbers
   return first array element - lowest value
   return last array element - highest value
   console.log results
*/

function highLow() {
   // get user input
   let userInput = prompt('Enter string of numbers  each separated by a space: ');
   // declare local variables
   userInput === undefined ? userInput = ' ' : userInput;
   let arrStrings = userInput.split(' ');
   let arrNumbers = [];
   // populate numbers array with values from string array
   for (let i = 0; i < arrStrings.length; i++) {
      arrNumbers.push(parseInt(arrStrings[i]));
   }
   
   let high = Math.max(...arrNumbers);
   let low = Math.min(...arrNumbers);
   return [high, low, arrNumbers];
}

console.log('*** 6. Find Highest and Lowest Numbers of Array ***');
let [high, low, arr] = highLow(); // execute function
console.log('\tnumbers: ', arr, 'high value: ', high, '   low value: ', low);



/*
7. Create a method that accepts a string, check if it’s a valid email address and returns either true or false depending on the valuation. Think about what is necessary to have a valid email address.

   a. Use case:
      i.“mike1@gmail.com”  true
      ii.“gmail.com”  false

Pseudo:
   pass value to function
   check for valid email using regex expression
   console.log result
      */


// check if email address is in a valid format
function isValidEmail (email) {
   let regex = /\b[a-z0-9/./-]+@[a-z0-9/./-]+[/.][a-z]+/i

   if (email === email.match(regex)[0]) {
      return true;
   } else {
      return false;
   }
}


console.log('*** 7. Check for valid email address format ***')
console.log('\t', isValidEmail('Craig.satchell@gmail.com'));
console.log('\t', isValidEmail('jasmej-abc@firefox.gov'));
console.log('\t', isValidEmail('-diamondjones@gmail.com'));




/*
8. Create a method that takes in a string and replaces each letter with its appropriate position in the alphabet and returns the string

   a.Use case:
      i.“abc”  “1 2 3”
      ii.“coding is fun”  “3 15 4 9 14 7 9 19 6 21 14”

get input from user and store in a variable
store the letters of the alphabet sequentially in an array
convert user input to uppercase
outer loop thru each letter in string from the user's input
   inner loop thru array containing alphabets
      if input string letter === alphabet current index
         append index position + 1 to indices array
return array of indices
*/

function convertAlpha() {
   let userInput = prompt('Enter string to alpha convert: ');
   let alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ');
   userInput === undefined ? userInput = ' ' : userInput;
   if (userInput != '') {
      userInput = userInput.toUpperCase(); // convert input to uppercase
      let alphaIndices = []; // indexes converted from user input.

      for (let i = 0; i < userInput.length; i++) {
         for (let j = 0; j < alphabet.length; j++) {
            if (userInput[i] === alphabet[j]) {
               alphaIndices.push(j + 1);
            }
         }
      }

      return [alphaIndices, userInput];
   } else {
      return [0, 'invalid user input'];
   }
}

// output
let [indices, input] = convertAlpha();
console.log('*** 8. Convert Alpha to Alphabet Position ***');
console.log('\tUser Input: ', input, '-> conversion: ', indices);



