/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations
// const, let
/**
 * I am writing something here
 */
const apples = 65;

console.log(apples);
let books;
books = 10;
console.log(books);

// ~ Types
// -> undefined, null*, boolean, number, string

// ~ Objects
// -> definition, bracket/dot notation, stringify
//Objects - is a collection of values that represents something
const animal = {
  species: "dog",
  name: "Spot",
  age: 5,
  isWellBehaved: true,
};
console.log(animal["age"]);
console.log(animal.name + " is " + animal.age + " years old!"); //concatenation
console.log(`${animal.name} is ${animal.age} years old!`); //interpolation
const something = JSON.stringify(animal); // it works like a String
console.log(something);
console.log(JSON.stringify(animal)); //helps us to print the full object

animal.isWellBehaved = false;
console.log(animal.isWellBehaved);

// ~ Arrays
// -> definition, access, modification
//An array is a list of ordered without names (i.e. keys).
const prices = [10, 4, 1, 2, 5, 7];
prices[0] = 5;
console.log(prices);

console.log(prices);
console.log(JSON.stringify(prices));
console.log(prices.toString());
console.log(prices[2]);

// ~ Conditionals
// if, if-else, if-else-if-else, ternary

const isItSunny = true;
if (isItSunny) {
  console.log("Wear sunglasses!");
} else {
  console.log("Not wear");
}

const action = isItSunny ? "Wear sunglasses!" : "Not wear";
console.log(action);

// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions

/**
 *
 * @param {string} name The person to greet
 * @param {number} day The person's age
 * @returns The number
 */
function sayHello(name, day) {
  //   console.log("Hi, " + name + "! It's " + day + ".");
  return "Hi, " + name + "! It's " + day + ".";
}

console.log(sayHello("Alina", "Monday"));

function square(number) {
  return number * number;
}

const integers = [1, 2, 3, 4];
integers.forEach((number) => {
  console.log(number * number);
});

// ~ Scope
// -> global, local, closures, function hoisting
const x = 1050;

const func = () => {
  console.log(x);
  const a = 2;
};

function otherFunc() {
  const b = 2;
  // console.log(a); //nope
  function otherFunc() {
    console.log(b);
    const c = 3;
    return c;
  }

  // console.log(c);//nope
}

// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
const numbers = [5, 2, 8, 12, 654];

function sum(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
  //   console.log(total);
}

sum(numbers);

//second option
let total = 0;
const numbersSecond = [5, 2, 8, 12, 654];

numbersSecond.forEach((sum) => {
  total += sum;
  return total;
});

console.log("secsecsec");
console.log(total);

// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
const numbersTwo = [5, 2, 8, 12, 654];

let double = (numbersTwo) => {
  let newArray = [];

  for (let i = 0; i < numbersTwo.length; i++) {
    newArray.push(numbersTwo[i] * 2);
  }
  console.log(newArray);
};

double(numbersTwo);

//second option
// numbersTwo.forEach((num, index, arr) => {
//   //   console.log("10 4 64 144 1308");
//   console.log((arr = num * 2));
//   console.log();
// });
const numbersThree = [5, 2, 8, 12, 654];

function doubleWithForEachMethod(numbersThree) {
  numbersThree.forEach((double, index) => {
    numbersThree[index] = double * 2;
  });
  // return numbersThree; // i don't need it
}

console.log("Second option of 2 exercise");
console.log(doubleWithForEachMethod(numbersThree));

// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.
const hyfg = ["ALINA", "ARIEL", "JAMAL", "VINH", "JOHN", "ZAK"];

const lowercase = (words) => {
  const wordsLowerCase = [];

  for (let i = 0; i < words.length; i++) {
    wordsLowerCase.push(words[i].toLowerCase());
  }
  console.log(wordsLowerCase);
};

lowercase(words);
//second option

function lowercasefun(words) {
  words.forEach((word, index) => {
    words[index] = word.toLowerCase();
  });
  return words;
}

console.log("Second option of 3 exercises");
console.log(lowercasefun(hyfg));

/**
 * Splice and slice
 */

let arrayIntegers = [1, 2, 3, 4, 5];

let newArrayIntegers = arrayIntegers.slice(2, 4);
console.log(newArrayIntegers);
console.log(arrayIntegers);

let newArrayIntegersSplice = arrayIntegers.splice(0, 3);
console.log(newArrayIntegersSplice); // i can see what items are removed
console.log(arrayIntegers); //here I see a modified array without removed values

//for each loop we can use of word
// Define your string
let myString = "Hello, world!";

// Iterate over each character using a for...of loop
for (let char of myString) {
  // Analyze each character here
  console.log(char); // For example, printing each character
}

var rooms = {
  first: {
    description: "This is the first room",
    items: {
      chair: "The old chair looks comfortable",
      lamp: "This lamp looks ancient",
    },
  },
  second: {
    description: "This is the second room",
    items: {
      couch: "This couch looks like it would hurt your back",
      table: "On the table there is an unopened bottle of water",
    },
  },
};

console.log(rooms);
