// Created a function to test if atleast one index in my array returned true.
function atleastOne(array, callback) {
  // Created a for loop to loop throght every index in my array.
  for (let i = 0; i < numbers.length; i++) {
    // Passed in a condition that checked if my call back function contained the nessary inputs within th\e array then it would return true. Otherwise it would return false.
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

// Created a numbers variable and stored it in an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Created a variable called equalToFour which stored my callback function.
const equalToFour = atleastOne(numbers, (num) => num === 4);

// Logged the result of my callback function that's been passed to my parent function to the console.
console.log(equalToFour);
