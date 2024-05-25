// TYPE OF VALUES
let awesomeName: string = 'Banana';
let amount: number = 123;
let isAwesome: boolean = true;

// UNION TYPE
let tax: number | string = 10;
tax = 100;
tax = '20e';

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';

// ARRAY
let prices: number[] = [100, 75, 350];
let fruit: string[] = ['apple', 'orange', 'melone'];

let randomValue: any[] = ['babe'];
let emptyValue: [] = []; // can not be assigneble
let array: (string | number)[] = ['apple', 5]; // type must be my parantesis (string|number) other ways it didn't work
