console.log('Arrays!!!');

const coolArray = ["Luke", "Matt", "Michael", "Jim", "Greg"];
console.log(coolArray);
console.log(coolArray.join(' | '));
console.log(coolArray);
const popped = coolArray.pop();
console.log('Removed element:', popped);
console.log('After pop: ', coolArray);
const shifted = coolArray.shift();
console.log(shifted);
console.log('After shift: ', coolArray);
coolArray.push('whatever');
console.log('after push: ', coolArray);
coolArray.unshift('Beginning');
console.log(coolArray);


// Challenge 1
// write a function that takes an array and an index and prints out the value of that index
// i.e. for array ["cool", "dude"] and index 0, get 'cool'
const idxVal = (arr, idx) => arr[idx]
console.log(idxVal(["cool", "dude"], 0));


// Challenge 2
// write a function that takes an array of something and tells you if the name 'Luna' is in that array
const names = (arr) => arr.includes('Luna')

myArray = ['max', 'teddy', 'lola']
console.log(`Array: ${myArray} -- 'Luna'?: ${names(myArray)}`);

myArray = ['max', 'teddy', 'lola', 'Luna']
console.log(`Array: ${myArray} -- 'Luna'?: ${names(myArray)}`);