// Partial - changes all the properties in an object to be optional.(?)
interface Point {
  x: number;
  y: number;
  z: string;
}
let point: Partial<Point> = {};
point.x = 10;
console.log(point);
// point.z=10 Error

// Required - changes all the properties in an object to be required.(!)
interface Car {
  make: string;
  model: string;
  milege?: number;
}

let car2: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  milege: 12000,
};

//Omit -  removes keys from an object type.
interface Person2 {
  name: string;
  age: number;
  location?: string;
}
let bobo: Omit<Person2, 'age' | 'location'> = {
  name: 'Bob',
};

// Pick - removes all but the specified keys from an object type.
let bobo2: Pick<Person2, 'name'> = {
  name: 'bob',
};

// Exclude - removes types from a union.
type Primitive = string | number | boolean;
const value2: Exclude<Primitive, string> = true;
console.log(value2);
