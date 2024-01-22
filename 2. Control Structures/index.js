/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing
console.log(randomNumber);
// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if (randomNumber > 50) {
    console.log("more than fifty");
  }

// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here

if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    console.log("fizzbuzz");
  } else if (randomNumber % 3 === 0) {
    console.log("fizz");
  } else if (randomNumber % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(randomNumber);
  }

let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd";
console.log("toDisplay", toDisplay);


// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: Switch statements are used to perform different actions based on different conditions. They are useful when there are multiple conditions to be checked against a single value, providing a more organized and readable alternative to multiple if-else statements.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for (var i = 1; i <= n; i++) {
    console.log(i);
  }

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
var index = 0;
while (index < list.length){
    console.log(list[index]);
    index++;
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: The main difference is that a while loop checks the condition before the code block is executed, while a do-while loop checks the condition after the code block is executed. This means that a do-while loop will always execute its code block at least once, regardless of the condition.

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
for (const balyu of list){
    console.log(balyu);
}
// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
for (const balyu in list){
    console.log(list[balyu]);
}


// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach(item => {
    console.log(item);
  });

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing


try {
    if (denominator === 0) {
      throw new Error("Division by zero error");
    } else {
      console.log(numerator / denominator);
    }
  } catch (error) {
    console.error(error);
  } finally {
    console.log("end");
  }
