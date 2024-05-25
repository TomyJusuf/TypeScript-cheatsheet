export {};
import { z } from 'zod';
const url = 'https://jsonplaceholder.typicode.com/todos/';

const mySchema = z.object({
  completed: z.string(),
  id: z.number(),
  title: z.string(),
  userId: z.number(),
  someValue: z.boolean(),
});

type Object = z.infer<typeof mySchema>;

async function fetchData(url: string): Promise<Object[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Object[] = await response.json();
    const result = mySchema.array().safeParse(data);
    if (!result.success) {
      throw new Error('invalid data: ' + result.error);
    }
    return result.data;
  } catch (error) {
    const errorMsg: string =
      error instanceof Error ? error.message : 'there was an error...';
    console.log(errorMsg);
    return [];
  }
}
// fetchData(url);
const responseData: Object[] = await fetchData(url);
responseData.map((test: Object) => {
  console.log(test.someValue);
});

//
//
async function someFunc(): Promise<number | string> {
  const randomN = Math.ceil(Math.random() * 10);
  if (randomN <= 5) {
    console.log(randomN);
    return 'hello string';
  } else {
    console.log(randomN);
    return 6789;
  }
}
async function main() {
  const result = await someFunc();
  console.log(result);
}
main();
