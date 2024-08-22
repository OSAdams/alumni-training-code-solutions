/* exported reverseWord */

const reverseWord = (string: string): string => {
  let result: string = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
};
