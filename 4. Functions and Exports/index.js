/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name){
    console.log("Hello, " + name + "!");
}

greet("Raynielle");

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here

const calculateArea = function(length, width) {
    return length * width;
  }
  
  // Call the 'calculateArea' function with any length and width as arguments
  var length = 5;
  var width = 10;
  const area = calculateArea(length, width);
  console.log("The area of the rectangle with a length and width of "+ length," and " + width, " is: "+area);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 
/*
A callback function is a function that is passed as an argument to another function
 and is called by that function at a later time. The purpose of a callback function
is to allow the receiving function to perform a specific action or execute additional code when needed.
*/
function doSomething(callback) {
    console.log("Doing something...");
    callback();
  }
  
  function callbackFunction() {
    console.log("Callback function called!");
  }
  
  doSomething(callbackFunction);

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

function modifyArray(array, callback) {
  const modifiedArray = array.map(callback);
  return modifiedArray;
}

// Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
const numbers = [1, 2, 3, 4, 5];
const incrementByOne = function(number) {
  return number + 1;
};
const modifiedNumbers = modifyArray(numbers, incrementByOne);
console.log("Modified array:", modifiedNumbers);
// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

const mathUtils = require('./mathUtils');

// Call the add method with two numbers
const sum = mathUtils.add(5, 3);
console.log('Sum:', sum);

// Display the value of the PI constant
console.log('PI:', mathUtils.PI);



// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
// Import the isPalindrome function
const isPalindrome = require('./isPalindrome');

// Call the isPalindrome function with a word
const word = 'level';
const result = isPalindrome(word);

// Display the result
console.log(`Is "${word}" a palindrome? ${result}`);

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 

/*
The require function and module.exports variable are used in Node.js 
for module management and exporting/importing functionality between different files.

Should we use require and module.exports over the import and export keywords? It depends on the context:

require and module.exports are the standard way of importing and exporting modules in Node.js.
If you are working with Node.js modules or using CommonJS syntax, you should use require and module.exports.
If you are working with modern JavaScript and using ES modules, you can use the import and export keywords, which are supported in newer versions of Node.js.
The choice between require/module.exports and import/export depends on the specific requirements of your project and the version of Node.js you are using.

*/
