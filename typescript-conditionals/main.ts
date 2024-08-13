/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

const isUnderFive = (x: number): boolean => x < 5;
const isEven = (x: number): boolean => x % 2 === 0;
const startsWithJ = (string: string): boolean => string[0] === 'J';
type Person = {
  name: string;
  age: number;
};
const isOldEnoughToDrink = (person: Person): boolean => person.age >= 21;
const isOldEnoughToDrive = (person: Person): boolean => person.age >= 16;
const isOldEnoughToDrinkAndDrive = (person: Person): boolean => person && false;
const categorizeAcidity = (ph: number): string => {
  if (ph >= 0 && ph < 7) {
    return 'acid';
  } else if (ph === 7) {
    return 'neutral';
  } else if (ph > 7 && ph <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
};
const introduceWarnerBro = (name: string): string => {
  switch (name) {
    case 'wakko':
    case 'yakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
};
const recommendMovie = (genre: string): string => {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'sci-fi':
      return 'Terrorizer';
    case 'horror':
      return 'Terrorizer 2';
    case 'musical':
      return 'Grease';
    case 'drama':
      return 'Forest Gump';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
};
