// Created an odd number filter function that takes an array of numbers a returns all of the odd numbers in that array of numbers while excluding the even ones. This function takes an array and a callback function as argumemnts.
function oddNumberfilter(arr, callback) {
  // Created an empty array to store the odd numbers once the even numbers have been filtered out.
  const filteredArray = [];

  // created a for loop to loop through the numbers array then ran a conditional that made it so that if the callback function returns true then the element is passed into the filtered array.
  for (let i = 0; i < numbers.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

// created a variable that stores an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Created a variable that stores my array of numbers an my call back function as arguments.
const oddNumbers = oddNumberfilter(numbers, (num) => num % 2 === 1);

// Used console.log() to display my numbers and oddNumbers variable to my console.
console.log(numbers);
console.log(oddNumbers);
