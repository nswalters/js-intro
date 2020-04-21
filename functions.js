// const chicken = 'chicken';
// console.log(`processed ${chicken}`);

// const cow = 'cow';
// console.log(`processed ${cow}`);

// const pig = 'pig';
// console.log(`processed ${pig}`);

// const tuna = 'tuna';
// console.log(`processed ${tuna}`);


const nuggatizer = (animal) => {
  return `function processed ${animal}`;
}

console.log(nuggatizer('chicken'));
console.log(nuggatizer('cow'));
console.log(nuggatizer('pig'));
console.log(nuggatizer('tuna'));

const dogBreed = (breed) => {
  return `My favorite dog breed is ${breed.toUpperCase()}`;
}

console.log(dogBreed('lab'));
console.log(dogBreed('golden retriever'));


// Challenge 1
// write a function that takes any number and returns that number plus 42
const meaningOfLife = (num) => {
  return num + 42
}

console.log(`Meaning of Life: ${meaningOfLife(10)}`);

// Challenge 2
// write a function that takes the year you were born and calculates how old you will be in 2099
const howOld = (birthYear) => {
  return 2099 - birthYear
}

console.log(`How old will I be in 2099? - ${howOld(1987)}`);