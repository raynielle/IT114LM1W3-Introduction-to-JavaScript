/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squares = numbers.map(number => number ** 2);


// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenNumbers = numbers.filter(number => number % 2 === 0);
// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);


// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];

// Your code here
const uppercaseWords = words.map(word => word.toUpperCase());

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const longWords = words.filter(word => word.length > 4);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedString = words.reduce((accumulator, word) => accumulator + word, '');
// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 

/*
Map: The map method is used to create a new array from an existing one by applying a function to each element of the original array. It returns a new array with the results of the function applied to each element. The map method does not modify the original array. It is commonly used to transform or modify the elements of an array.

Filter: The filter method is used to create a new array with all elements that pass a certain condition. It applies a function to each element of the original array and returns a new array with only the elements that satisfy the condition. The filter method does not modify the original array. It is commonly used to select or filter out specific elements from an array based on a condition.

Reduce: The reduce method is used to reduce an array to a single value by applying a function to each element of the array and accumulating a result. It takes an accumulator and a current value as arguments and returns a single value. The reduce method can be used to perform calculations or aggregations on an array, such as finding the sum of all numbers or concatenating all strings in the array. It is commonly used to derive a single value from an array.

*/
