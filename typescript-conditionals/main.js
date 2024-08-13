'use strict';
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
const isUnderFive = (x) => x < 5;
const isEven = (x) => x % 2 === 0;
const startsWithJ = (string) => string[0] === 'J';
const isOldEnoughToDrink = (person) => person.age >= 21;
const isOldEnoughToDrive = (person) => person.age >= 16;
const isOldEnoughToDrinkAndDrive = (person) => false;
const categorizeAcidity = (ph) => {
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
const introduceWarnerBro = (name) => {
  switch (name) {
    case 'wakko':
    case 'yakko':
      return "We're the warner brothers!";
      break;
    case 'dot':
      return "I'm cute~";
      break;
    default:
      return 'Goodnight everybody!';
  }
};
const recommendMovie = (genre) => {
  switch (genre) {
    case 'action':
      return 'Die Hard';
      break;
    case 'sci-fi':
      return 'Terrorizer';
      break;
    case 'horror':
      return 'Terrorizer 2';
      break;
    case 'musical':
      return 'Grease';
      break;
    case 'drama':
      return 'Forest Gump';
      break;
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
};
