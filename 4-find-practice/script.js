// Created a variable called numbers that stores an array of numbers
const numbers = [-1, 10, 7, 8, 9, 10, 76, 100];

//  Created a function called findElement that takes an array and a condition as parameters.
function findElement(array, condition) {
  //  Created a for loop that loops through my numbers array then runs my conditional which checks if the condition is met within the numbers array.
  for (let i = 0; i < array.length; i++) {
    if (condition(array[i])) {
      // returns the first array index that matches the condtion
      return array[i];
    }
  }
  // returns undefined if no element is found.
  return `The condtion your trying to find doesn't exist. Therefor it's undefined. Sorry...`;
}

// created a variable called results which calls my findElement function and passes in my numbers array and condition as its aruments.
const result = findElement(numbers, (number) => number < 2);

// Displays my result variable in the console. and returns the first index that satisfies the condition.
console.log(result);
