/* exported reverse */

const reverse = (array: any[]): any[] => {
  const result: any[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
};
