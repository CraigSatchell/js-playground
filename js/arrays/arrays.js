'use strict'

/*
Arrays and Functions
1.	Write a function that has one parameter: array
a.	Print to the console the value at the 0 index of the array
b.	Return the value at the 0 index of the array
*/

let cars = ['Ford', 'Dodge', 'Chevy']
console.log(cars[0])

/*
2.	Create an array and push the following values into the array: “blue”, “red”, “white”, “green”, “yellow”
a.	Prompt the user to enter a color.
b.	Iterate over the array. If the user inputted color matches any of the colors in the array, print to the console “You found my chosen color!”
*/
let colors = [];
colors.push('blue');
colors.push('red');
colors.push('white');
colors.push('green');
colors.push('yellow');

let inputColor = prompt('Please enter a color: ')
for (let i = 0; i < colors.length; i++) {
  if (colors[i] === inputColor) {
    console.log('You found ' + colors[i] + ' my chosen color!')
    break;
  }
}


/*
3.	Write a function that has one parameter: an array
a.	The array that is passed in needs to be an array of numbers
b.	Find the most frequent value in the array and return that value
*/

let myInts = [1, 4, 5, 5, 3, 2, 9,9,9,9,9, 1, 22, 6, 6, 6, 4, 3, 6, 8, 8,8,8,8,8,8]
myInts.sort() // sort integers
let count = 0;
let maxCount = 0;
let maxInt = '';
for (let i = 0; i < myInts.length; i++) {
  if (i != 0) {
    if (myInts[i] === myInts[i - 1]) {
      count++;
    } else {
      //console.log('myInt: ', myInts[i - 1])
      //console.log('count myInts:', count)
      //count > maxCount ? maxCount = count : maxCount;
      if (count > maxCount) {
        maxCount = count;
        maxInt = myInts[i-1];
      }
      count = 1;
    }
  }
}
console.log('maxInt ', maxInt); // integer with most occurrences
console.log('maxcount: ', maxCount); // number of occurrences



/*
4.	Write a function that has one parameter: an array
a.	The array that is passed in needs to be an array of numbers
b.	Iterate over the array and add up all of the numbers inside of it
c.	If the sum of the numbers is even, return string “Even” from the function
d.	If the sum of the numbers is odd, return string “Odd” from the function
*/

let numbers = [1, 5, 22, 45, 45, 5, 7, 8, 88]
function addAll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + numbers[i];
  }
  if (sum % 2 === 0) {
    console.log(sum, ' Even');
  } else {
    console.log(sum, ' Odd');
  }
}

addAll(numbers) // execute function

/*
5.	Write a function that has two parameters: an array, a number
a.	The array that is passed in needs to be an array of numbers
b.	Iterate over the array and print to the console each value in the array that is greater than the number parameter
*/
let nbrs = [1, 5, 22, 55, 45, 5, 7, 8, 88]
function greaterThan(arr, num) {
  console.log('*** Greater Than ***')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}

greaterThan(nbrs, 15) // execute function

/*
6.	Write a function that has one parameter: an array
a.	The array that is passed in needs to be an array of numbers
b.	Compute the average of the numbers inside the array
c.	Any numbers in the array that are less than the computed average will be pushed into a separate array. That array will then be returned from the function.
*/

numbers = [1, 5, 22, 45, 45, 5, 7, 8, 88]

function findBelowAvg(arr) {
  let belowAvg = [];
  let avg = addAllNumbers(arr) / arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < avg) {
      belowAvg.push(arr[i]);
    }
  }
  return belowAvg;
}

function addAllNumbers(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

console.log('Below Avg: ', findBelowAvg(numbers));

/*
7.	Write a function that has two parameters: an array, a number
a.	Return the value in the array at the index represented by the number parameter
b.	If there is no value at the specified index, print to the console “No value here!”
*/

let vehicles = ['boat', 'car', 'truck', 'bicycle', 'motocycle', 'wagon', 'cart']

function selectVehicle(transport, choice) {
  if (transport[choice] === undefined) {
    console.log('No value here!');
  } else {
    console.log(transport[choice]);
  }
}

selectVehicle(vehicles, '4');

/*
8.	Write a function that has two parameters: an array, an array
a.	Both arrays that are passed in should contain the first names of people
b.	Iterate over the arrays comparing the values at each index from one array to the other. If there is a matching name in both arrays, return that name from the function
c.	For example: [“Nevin”, “David”, “Mike”] and [“Brett”, “Mike”, “Charles]
i.	“Mike” would be returned from the function because it is a match in both arrays
*/

let group1 = 'Michael Charles Brian Boyd Douglas Thomas Pascal'.split(' ');
let group2 = ['Patrick', 'Boyd', 'Pascal', 'Ricard', 'James', 'Douglas'];

function findMatches(arr1, arr2) {
  let matches = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i]) {
        matches.push(arr2[j]);
      }
    }
  }
  return matches; // return an empty array, if no matches
}

console.log('Name matches: ',findMatches(group1, group2)); // execute function