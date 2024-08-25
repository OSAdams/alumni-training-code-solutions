/* exported capitalizeWord */

const capitalizeWord = (word: string): string => {
  const firstLetter: string = word[0].toUpperCase();
  const lowerCaseWord: string = word.slice(1, word.length).toLowerCase();
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return firstLetter + lowerCaseWord;
};
