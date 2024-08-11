const heroes = ['AOC', 'Bernie Sanders', 'Paul Watson', 'John Stewart'];
const heroesLength = heroes.length;
let randomNumber = Math.random();
randomNumber = randomNumber * heroesLength;
const randomIndex = Math.floor(randomNumber);
const randomHero = heroes[randomIndex];
console.log(`Value of randomHero: ${randomHero}`);
