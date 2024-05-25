// # type Alias
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

type StringOrNumber = string | number;
let value: StringOrNumber;
value = 'hello';
value = 123;

type Theme = 'light' | 'dark';

let theme: Theme;
theme = 'dark';
theme = 'light';

function setTheme(t: Theme) {
  return t;
}
setTheme('dark');

//Challenge
// Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).
// Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).
// Create a Union Type: Define a type Staff that is a union of Employee and Manager.
// Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.
// Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.
// Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.

type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

type Staff = Employee | Manager;
function printStaffDetails(paramert: Staff) {
  if ('employees' in paramert) {
    return `Manager ${paramert.name} manage ${paramert.employees.length} employees`;
  } else {
    return `${paramert.name} is an employee and he/she belong the ${paramert.department} department`;
  }
}

let alice: Employee = {
  id: 1,
  name: 'Alice',
  department: 'manufactury',
};
let steve: Employee = {
  id: 2,
  name: 'steve',
  department: 'contact client',
};
let bob: Manager = {
  id: 3,
  name: 'bob',
  employees: [alice, steve],
};

// console.log(printStaffDetails(bob));

// # Interface
interface Book {
  readonly id: number;
  title: string;
  author: string;
  genre?: string;
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => void;
}
const deepWork: Book = {
  id: 123,
  title: 'Deep work',
  author: 'cal newport',
  genre: 'self-help',
  printAuthor() {
    return console.log(`Author: ${this.author}`);
  },
  printTitle(value) {
    return `${value} ${this.title}`;
  },
  // first option
  // printSomething: function (value) {
  //   console.log(this);
  //   console.log(this.id);
  //   return console.log(value);
  // },
  // second option
  printSomething: (n) => {
    console.log(deepWork.id);
    // console.log(this.id); //will not work because global value of 'this'
    return console.log(` This is some number: ${n}`);
  },
  //  this uvnitř šipkové funkce (=>) neodkazuje na objekt deepWork,
  //  ale místo toho odkazuje na globální objekt(v prohlížeči window, v Node.js global).
};
deepWork.printSomething(0);

// Challenge
// Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
// Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
// Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
// Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
// Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
// Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
// Finally, we can use our object. We can call its upgradeRam method to increase its RAM.

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(para: number): number;
}

const lenovo: Computer = {
  id: 123,
  brand: 'Lonovo STAR',
  ram: 8,
  upgradeRam(n) {
    return (this.ram += n);
  },
};
// console.log(`Upgrade is ${lenovo.upgradeRam(16)}GB`);
lenovo.storage = 256;
// console.log(lenovo);

// Interface - Merging, Extend, TypeGuard

// Merging
interface Person {
  name: string;
  getDetails(): string;
}

interface Person {
  age: number;
}

// Extend
interface NewEmployee extends Person {
  readonly id: number;
  department: string;
}

const person1: Person = {
  name: 'Tomas',
  age: 25,
  getDetails(): string {
    return ` ${this.name} ${this.age}`;
  },
};

const employee: NewEmployee = {
  id: 123,
  department: 'development & IT',
  name: 'Erik',
  age: 27,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.id}, Department: ${this.department}`;
  },
};

// console.log(person1.getDetails());
// console.log(employee.getDetails());

//  #Type Guard
function example(value: string | number) {
  if (typeof value === 'string') {
    console.log('String value: ' + value.toUpperCase());
  } else {
    console.log('Number value: ' + value.toFixed(1));
  }
}
// example('I love you');
// example(153.15);

class Dog {
  bark() {
    console.log('Haaf!');
  }
}

class Cat {
  meow() {
    console.log('Meow!');
  }
}

interface IDog {
  bark(): void;
}

interface ICat {
  meow(): void;
}

function makeSound(animal: ICat | IDog) {
  if ('bark' in animal) {
    animal.bark(); // TypeScript knows animal is a Dog
  } else {
    animal.meow(); // TypeScript knows animal is a Cat
  }
}

makeSound(new Dog());
makeSound(new Cat());
