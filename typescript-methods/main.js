'use strict';
const heroes = ['AOC', 'Bernie Sanders', 'Paul Watson', 'John Stewart'];
const heroesLength = heroes.length;
let randomNumber = Math.random();
randomNumber = randomNumber * heroesLength;
const randomIndex = Math.floor(randomNumber);
const randomHero = heroes[randomIndex];
console.log(`Value of randomHero: ${randomHero}`);
const library = [
  { title: 'Fall of Civilizations', author: 'Paul Cooper' },
  { title: 'The Silmarillion', author: 'J.R.R. Tolkien' },
  { title: 'Linux for Beginners', author: 'Nathan Clark' },
];
const lastBook = library.pop();
const firstBook = library.shift();
console.log('value of lastBook: ', lastBook);
console.log('value of firstBook: ', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library: ', library);
const fullName = 'Lalo Adams';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of firstName after toUppercase() is called: ', firstName);
console.log('value of sayMyName: ', sayMyName);
const employee = {
  name: 'Jim Lahey',
  age: 55,
  position: 'Trailer Park Supervisor',
};
const employeeKeys = Object.keys(employee);
console.log('value of employeeKeys: ', employeeKeys);
const employeeValues = Object.values(employee);
console.log('value of employeeValues: ', employeeValues);
const employeePairs = Object.entries(employee);
console.log('value of employeePairs: ', employeePairs);
