// OBJECTS
let car: { brand: string; year: number } = { brand: 'toyota', year: 2000 };

car.brand = 'ford';
// car.color = 'blue';

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 20 };
let notebook = { title: 'notebook' };

let items: { title: string; cost?: number }[] = [book, pen, notebook];
let secondItems: { title: string; readonly cost?: number }[] = [
  book,
  pen,
  notebook,
];
secondItems[0].title = 'new book';
// secondItems[0].cost = 5;
console.log(secondItems);

// FUNCTION & any - confic - type
function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}
sayHi('Erik');

function calculateDisount(price: number): number {
  return price * 0.9;
}
const finalPrice = calculateDisount(200);
console.log(finalPrice);

// ## Challenge
// - Create a new array of names.
// - Write a new function that checks if a name is in your array. This function
// - should take a name as a paramert and return a boolean.
// - Use this function to check if various names  are  in your  array and log the results.

let arrayNames = ['John', 'Partic', 'Maxmiluan', 'Freud'];
function checkName(paramert: string): boolean {
  return arrayNames.includes(paramert);
}

var nameToCheck: string = 'Tomas';
if (checkName(nameToCheck)) {
  console.log(`Name ${nameToCheck} is in the list arrayNames`);
} else {
  console.log(`Name ${nameToCheck} is not in the list arrayNames`);
}

//-----------------------------------------------------

// Optional paramert
function calcualtePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calcualtePrice(10);
console.log(`price after discount is ${priceAfterDiscount}`);

// Default paramert
function message(name: string = 'user') {
  return `Hello ${name}`;
}
console.log(message('Tomas')); // Hello Tomas
console.log(message()); // Hello  user

// rest paramerts
function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  const totalN = numbers.reduce((prev: number, curr: number): number => {
    return prev + curr;
  }, 0);
  return `${message}${totalN}`;
}
let result = sum('Total is: ', 1, 2, 3, 4, 5);
// console.log(result);

// #Object as paramert

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return {
    id,
    isActive: id % 2 == 0,
  };
}
const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first);
console.log(second);

// #Challange
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: true }
): string | number {
  if (typeof input === 'number') {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
  }
}

console.log(processData(5, { reverse: true }));
console.log(processData('Hallo', { reverse: false }));
console.log(processData('Hallo', { reverse: true }));
