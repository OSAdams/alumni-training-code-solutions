/* exported swapChars */

const swapChars = (
  firstIndex: number,
  secondIndex: number,
  string: string
): string => {
  const firstChar: string = string[firstIndex];
  const secondChar: string = string[secondIndex];
  let result: string = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += secondChar;
    } else if (i === secondIndex) {
      result += firstChar;
    } else {
      result += string[i];
    }
  }
  return result;
};
