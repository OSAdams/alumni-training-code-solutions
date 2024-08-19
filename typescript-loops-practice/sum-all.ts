/* exported sumAll */

const sumAll = (numbers: number[]): number => {
  let result: number = 0;
  for (const i of numbers) {
    result += i;
  }
  return result;
};
