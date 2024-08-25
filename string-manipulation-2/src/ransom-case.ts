/* exported ransomCase */

const ransomCase = (string: string): string => {
  let result: string = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      result += string[i].toLowerCase();
    } else {
      result += string[i].toUpperCase();
    }
  }
  return result;
};
