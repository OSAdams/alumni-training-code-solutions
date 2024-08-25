/* exported lastChars */

const lastChars = (length: number, string: string): string => {
  if (string.length < length) {
    return string;
  }
  let result: string = '';
  for (let i = string.length - length; i < string.length; i++) {
    result += string[i];
  }
  return result;
};
