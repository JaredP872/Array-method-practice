// Created an array of names
const names = ["Jared", "Josh", "Jaylon", "Jnae"];
// Created an empty array that will be used to  store my uppercased names.
const uppercasedNames = [];

// created a for loop that will loop through my array of names and run a push my uppercased names to my empty uppercasedNames array.
for (let i = 0; i < names.length; i++) {
  uppercasedNames.push(names[i].toUpperCase());
}
// used console.log() to show both arrays in my console.
console.log(names);
console.log(uppercasedNames);
