//  Created a variable named numbers that stores an array of numbers
const numbers = [10, 22, 30, 346, 27, 12, 1];

// created a variable called sum that stores 0 which will serve as my initial value.
let sum = 0;
// Created a for loop to loop through my numbers array and run the condition after it.
for (let i = 0; i < numbers.length; i++) {
  // my sum variable takes in each index in my numbers array and adds them together storing  them within itself.
  sum += numbers[i];
}

// Logging the sum variable which contains all of the contents added from my array to the console.
console.log(sum);
