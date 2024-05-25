// # TUPLES
// A tuple is a typed array with a pre-defined length and types for each index.
let person: [string, number] = ['john', 25];
let date: readonly [number, number, number] = [12, 1, 3];
let jack: [string, number?] = ['jack'];

// #ENUMS
enum ServerResponseStatus {
  Success,
  Error,
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}
const response = getServerResponse();
// console.log(response);

// #Challenge
// Define an enum named UserRole with members Admin, Manager, and Employee.
// Define a type alias named User with properties id (number), name (string),
// role(UserRole), and contact(a tuple with two elements: email as string and phone as string).
// Define a function named createUser that takes a User object as its parameter and returns a User object.
// Call the createUser function with an object that matches the User type,
// store the result in a variable, and log the variable to the console.;

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User2 = {
  id: number;
  name: string;
  role: UserRole;
  contact: [email: string, phone: string];
};
function createuser(user: User2): User2 {
  return user;
}
const newUser = createuser({
  id: 1,
  name: 'Tomas',
  role: UserRole.Admin,
  contact: ['tomas@tt.dev', '123456'],
});
// console.log(newUser);

//
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;
