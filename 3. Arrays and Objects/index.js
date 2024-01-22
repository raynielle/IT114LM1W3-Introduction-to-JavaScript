/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
var firstItem = numbers[0];
var fifthItem = numbers[4];
var lastItem = numbers[numbers.length - 1];

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
var minNum = Math.min(...numbers);
var maxNum = Math.max(...numbers);
var averageNum = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer:  
/*
In Python, lists are similar to arrays in JavaScript, but there are some differences:

Indexing: In Python, list indices start from 0, just like in JavaScript.

Mutability: Lists in Python are mutable, meaning you can modify their elements after they are created. In JavaScript, arrays are also mutable.

Data Types: Python lists can contain elements of different data types, while JavaScript arrays are typically used to store elements of the same data type.

Built-in Functions: Both Python and JavaScript provide built-in functions to manipulate lists/arrays, such as len(), append(), pop(), etc.
*/

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

let IT114L = {
    courseCode: "IT114L",
    name: "Web Systems and Technologies",
    units: 1,
    numberOfStudents: 30
};

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.professorName = "Sir Job Lipat";
console.log(IT114L.professorName);
console.log(IT114L);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
let courses = [
    { courseCode: "IT114L", units: 1 },
    { courseCode: "CS120", units: 3 },
    { courseCode: "IT133", units: 2 }
];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnits = 0;

for (let course of courses) {
    totalUnits += course.units;
}

console.log(totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 
/*
In Python, the equivalent of objects in JavaScript is dictionaries. Dictionaries in Python are similar to objects in JavaScript, but there are some differences:

Syntax: In JavaScript, objects are defined using curly braces {}, while dictionaries in Python are defined using curly braces {} or the dict() constructor.

Accessing Values: In JavaScript, you can access object properties using dot notation (object.property) or bracket notation (object['property']). In Python, you can access dictionary values using bracket notation (dictionary['key']).

Methods: JavaScript objects have built-in methods and properties, while Python dictionaries have built-in methods such as keys(), values(), and items().
*/

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
let numbersCopy = [...numbers, 69420];

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
let { courseCode, units } = IT114L;
console.log("Course Code:", courseCode);
console.log("Units:", units);
