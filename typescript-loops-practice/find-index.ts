/* exported findIndex */

const findIndex = (array: any[], value: any): number => {
  for (const i in array) {
    if (array[i] === value) {
      return +i;
    }
  }
  return -1;
};
