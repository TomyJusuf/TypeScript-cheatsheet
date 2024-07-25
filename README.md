<!DOCTYPE html>
<html>
<head>

</head>
<body>
<div style=" color: black; padding: 20px;">
  <h1 style='color:#d2c4b1;text-transform:uppercase'>Welcome to My Project</h1>
  <p style='color:black; '>
  This is my TypeScript cheatsheet that should help me or anyone else to quickly find hints, 
  </br>syntax and/or correct naming.</p>

<p style='color:black; font-weight: bold;'>- Inside  ./src  folder is couple examples.</p>
<h3 style='color:var(--title)'>#Basic Types</h3>
  <pre style=" color: black; padding-left: 50px;">
<code>
    let isDone: boolean = false;
    let age: number = 30;
    let username: string = "John";
    let list: number[] = [1, 2, 3];
    let tuple: [string, number] = ["hello", 10];
    enum Color { Red, Green, Blue }
    let c: Color = Color.Green;
</code>
</pre>

<h3 style='color:var(--title)'># Variable Declarations</h3>
<pre style=" color: black; padding-left: 10px;">
<code>
    const PI: number = 3.14; // Immutable variable
    let mutableNumber: number = 42; // Mutable variable
</code>
</pre>

<h3 style='color:var(--title)'>## Interfaces</h3>
<pre style=" color: black; padding-left: 10px;">
<code>
    interface User {
        name: string;
        age?: number; // Optional property
        readonly id: number; // Readonly property
    }
</br>
    let user: User = { name: "Alice", id: 1 };

</code>
</pre>

<h3 style='color:var(--title)'># Clases</h3>
<pre style=" color: black; padding-left: 10px;">
<code>
    class Animal {
    privare name: string; // Privare property
    protected age: number; // Protected property
    public static kingdom: string = "Animalia"; // Static property

            constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
            }

        public move(distance: number): void {
        console.log(`${this.name} moved ${distance}m.`);
            }

        }

        class Dog extends Animal {
        constructor(name: string, age: number) {
        super(name, age);
        }

        public bark(): void {
        console.log("Woof! Woof!");
            }

        }

</br>
    let dog = new Dog("Buddy", 3);
    dog.bark();
    dog.move(10);

</code>
</pre>

<h3 style='color:var(--title)'># Functions</h3>
<pre style=" color: black; padding-left: 10px;">
<code>
    function add(x: number, y: number): number {
        return x + y;
    }

</br>
    let myAdd: (x: number, y: number) => number = function (x, y) {
       return x + y;
     };

</code>
</pre>
<h3 style='color:var(--title)'># Generics</h3>
<pre style=" color: black; padding-left: 10px;">
<code>
    function identity<T>(arg: T): T {
        return arg;
    }
</br>
    let output = identity<string>("myString"); // Output: "myString"

</code>
</pre>
<h3 style='color:var(--title)'># Type Assertions</h3>
<pre style=" color: black; padding-left: 10px;">
<code>
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
</code>
</pre>
<h3 style='color:var(--title)'># Modules</h3>
<pre style=" color: black; padding-left: 10px;">
<code>
    // math.ts
    export function add(x: number, y: number): number {
        return x + y;
    }
</code>
</pre>
<span>

---

</span>
<pre style=" color: black; padding-left: 10px;">
<code>
    // main.ts
    import { add } from "./math";
    console.log(add(5, 3));
</code>
</pre>
<h3 style='color:var(--title)'># Type Aliases</h3>
<pre style=" color: black; padding-left: 10px;">
<code>
    type StringOrNumber = string | number;
    let sample: StringOrNumber = "Hello";
    sample = 42;
</code>
</pre>
<h3 style='color:var(--title)'># Union and Intersection Types</h3>
<pre style=" color: black; padding-left: 10px;">
<code>
    // Union Type
    let value: string | number = "Hello";
    value = 42;
</br>
    // Intersection Type
    interface Person {
    name: string;
    }
</br>
    interface Employee {
    employeeId: number;
    }
</br>
    type Staff = Person & Employee;
    let staff: Staff = { name: "Alice", employeeId: 12345 };

</code>
</pre>
<h3 style='color:var(--title)'># Type Guards</h3>
<pre style=" color: black; padding-left: 10px;">
<code>
    function isNumber(value: any): value is number {
        return typeof value === "number";
    }
</br>
    let val: number | string = 5;
</br>
    if (isNumber(val)) {
    console.log(val.toFixed(2)); // Safe to use number methods
    } else {
    console.log(val.toUpperCase()); // Safe to use string methods
    }

</code>
</pre>
<h3 style='color:black'># Async/Await</h3>
<pre style=" color: black; padding-left: 10px;">
<code >
    async function fetchData(url: string): Promise<any> {
    const response = await fetch(url);
    const data = await response.json();
        return data;
    }
</br>
    fetchData("https://api.example.com/data")
    .then(data => console.log(data))
    .catch(error => console.error(error));

</code>

</pre>

</div>

</body>
</html>
