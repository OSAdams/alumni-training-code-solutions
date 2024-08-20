/* exported compact */

const compact = (array: any[]): any[] => {
  const result: any[] = [];
  for (const index of array) {
    index && result.push(index);
  }
  return result;
};
