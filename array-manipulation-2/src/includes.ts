/* exported includes */

const includes = (array: any[], value: any[]): boolean => {
  for (const index of array) {
    if (index === value) {
      return true;
    }
  }
  return false;
};
