# typescript-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When was TypeScript introduced?

  - 2012

- Who created TypeScript?

  - Microsoft

- What does the TypeScript `Compiler` do?

  - Compiles the TypeScript code to JavaScript code that can be read by a browser

- How can you compile TypeScript to JavaScript?

  - run the command `tsc HelloWorld.ts`
  - to automatically update your compiled js file, use the command `tsc -w HelloWorld.ts`

- What are some benefits of using TypeScript?
  - It is a strictly typed language, the programmer must be explicit about things like types of data a variable can hold, or types of data a function can return or accept as parameters
  - Errors will be exposed during compile time instead of run time, allowing us to fix mistakes before starting the web app

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```

### Object Typing or Interfacing

```ts
interface Person {
  name: string;
  age: number;
  address?: string; // ? operator means the variable is optional and not required to meet interface or type Person requirements
}

type Person = {
  name: string;
  age: number;
  address?: string;
};
```

### Array Typing

```ts
const arr: number[] = [1, 4, 10, 27]; // arr is an array of numbers

type Person = {
  name: string;
  age: number;
  address?: string;
};

const people: Person[] = [
  // people array will be an array of objects, and each object will have the same structure as the Person type
  {
    name: 'Cairne Bloodhoof',
    age: 99,
    address: 'High Rise, Thunder Bluff, Kalimdor',
  },
];
```

### Typing Functions

```js
function add (x, y) => x + y
```

```ts
// x type number, y type number, return type number
function add (x: number, y: number): number => x + y
```
