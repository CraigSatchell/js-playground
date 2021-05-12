'use strict'

/*
`Problems to solve using JavaScript
1.	Fizz Buzz
a.	Write a program that prints every number from 0 to 100 to the console
b.	If a number is divisible by 3, print ‘fizz’ instead of the number
c.	If a number is divisible by 5, print ‘buzz’ instead of the number
d.	If a number is divisible by 3 and 5, print ‘fizzbuzz’ instead of the number
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz')
  } else if (i % 3 === 0) {
    console.log('fizz')
  } else if (i % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(i)
  }
}

/*
2.	Reverse a string
a.	Write code that takes a string as input and returns the string reversed
b.	i.e. “Hello” will be returned as “olleH”
*/
let string = 'Hello'
let newString = ''
for (let i = 0; i < string.length; i++) {
  newString = newString + string[string.length - (i + 1)]
}
console.log(newString)

/*
3.	Capitalize letter
a.	Write code that takes a string as input and capitalize the first letter of each word. Words will be separated by only one space. i.e. “hello world” should be outputted as “Hello World”
*/
string = 'hello world'
newString = ''
for (let i = 0; i < string.length; i++) {
  if (i == 0) {
    newString = newString + string[i].toUpperCase()
  } else if (i != 0 && string[i] != ' ' && string[i - 1] === ' ') {
    newString = newString + string[i].toUpperCase()
  } else {
    newString = newString + string[i]
  }
}
console.log('Capital Letter: ', newString)

/*
4.	Compress a string of characters
a.	For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"
*/
string = 'aaabbbbbccccaacccbbbaaabbbaaa'
let compressedString = ''
let repeatString = ''
let count = 0
let key = string[0]

for (let i = 0; i < string.length; i++) {
  repeatString = repeatString + string[i]
  count++
  if (string[i] != string[i + 1]) {
    compressedString = compressedString + count + repeatString[0]
    //console.log(count+repeatString[0])
    count = 0
    repeatString = ''
  }
}
console.log('Compressed String: ', compressedString)

/*
5.	Palindrome
a.	A word, phrase, or sequence that reads the same backward as forward i.e. madam
b.	Write code that takes a user input and checks to see if it is a Palindrome and reports the result
*/
string = prompt('Enter string to check for palindrome: ')
newString = ''
for (let i = 0; i < string.length; i++) {
  newString = newString + string[string.length - (i + 1)]
}
let isPalindrome = newString === string
console.log('Is Palindrone: ', isPalindrome)
