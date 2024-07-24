const helloWorld = (name: string): string | undefined => {
  if (!name) return;
  return `My name is ${name}! Hello World!`;
};

const tscWTest: string =
  'tsc -w HelloWorld.ts should update HelloWorld.js automatically when we save our file';

interface Person {
  name: string;
  age: number;
  address?: string;
}

type Animal = {
  species: string;
  extinct: boolean;
  location?: string;
};

const bob: Person = {
  name: 'Bob',
  age: 1337,
  address: '123 The Crossroads Dr, Barrens, Kalimdor',
};

const dog: Animal = {
  species: 'Shih Tzu',
  extinct: false,
  location: 'Unnaturally World Wide',
};

console.log(`variable bob value`, bob);
console.log('variable dog value', dog);
console.log('helloWorld value', helloWorld);
console.log('tscWTest value', tscWTest);
