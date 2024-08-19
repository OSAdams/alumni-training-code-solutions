/* exported includesSeven */

const includesSeven = (array: number[]): boolean => {
  for (const i of array) {
    if (i === 7) {
      return true;
    }
  }
  return false;
};
