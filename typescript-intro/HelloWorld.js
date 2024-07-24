var helloWorld = function (name) {
  if (!name) return;
  return 'My name is '.concat(name, '! Hello World!');
};
var tscWTest =
  'tsc -w HelloWorld.ts should update HelloWorld.js automatically when we save our file';
var bob = {
  name: 'Bob',
  age: 1337,
  address: '123 The Crossroads Dr, Barrens, Kalimdor',
};
var dog = {
  species: 'Shih Tzu',
  extinct: false,
  location: 'Unnaturally World Wide',
};
console.log('variable bob value', bob);
console.log('variable dog value', dog);
console.log('helloWorld value', helloWorld);
console.log('tscWTest value', tscWTest);
