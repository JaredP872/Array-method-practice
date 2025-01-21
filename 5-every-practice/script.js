// Created a function called myEvery and then passed the paramter array and callback into it.
function myEvery(array, callback) {
  // Created a for loop to loop through my array.
  for (let i = 0; i < array.length; i++) {
    // Created a conditional that returned false if the callback function returns a falsy value. Such as any index in the array not satisfying the condition. Alternatively the condition will return true if every index in the array satisfies the condition
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

//  Created a variable that holds an array of numbers.
const numbers = [2, 4, 6, 8, 10];
// Created and variable that stored my call back function.
const allEven = myEvery(numbers, (num) => num % 2 === 0);

// Logged the varible allEven to the console in order to see the result of my code.
console.log(allEven);
