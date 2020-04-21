console.log('Here is an object!', {});

const str = 'Here is a string it is kinda long!';
console.log(str.length);

const age = 23;

if (age >= 21) {
  console.log('have a beer');
} else {
  console.log('have a juice');
}

// Object Time
const smallExpense = {
  id: 1,
  location: 'Baja Burrito',
  price: 750,
  purpose: 'Lunch back when that was a thing',
  code: '100AB',
}

const largeExpense = {
  id: 1,
  location: 'Baja Burrito',
  price: 1750,
  purpose: 'Lunch back when that was a thing',
  code: '100AB',
}


// Challenge 1
// write a function that takes in an expense object
// if the 'price' (in pennies) is greater than 1500
// then add a key of approved with a value of false
// else add a key of approved with a value of true
// return the expense object

const expenseApproved = (myExpense) => {
  if (myExpense.price > 1500) {
    myExpense.approved = false;
  } else {
    myExpense.approved = true;
  }
  return myExpense;
}

console.log(expenseApproved(smallExpense));
console.log(expenseApproved(largeExpense));