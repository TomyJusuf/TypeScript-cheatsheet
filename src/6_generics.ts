// let array1: string[] = ['apple', 'banana', 'mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ['apple', 'banana', 'mango'];

// function createString(arg: string): string {
//   return arg;
// }
// function createNumber(arg: number): number {
//   return arg;
// }

function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>('hi');
const someNumberValue = genericFunction<number>(123);

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: 'abcs',
  getValue() {
    return this.value;
  },
};

function generateStringArray<T>(lenght: number, value: T): T[] {
  let result: T[] = [];
  result = Array(lenght).fill(value);
  return result;
}

console.log(generateStringArray<string>(6, 'hello'));
console.log(generateStringArray<number>(6, 5));

//
// Multiple paramerts

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

console.log(pair<string, number>('Monday', 27));

function processValue<T extends string | number>(value: T): T {
  console.log(value);
  return value;
}

processValue(1);
processValue('hey');
// processValue(true);
