/* exported getIndexes */

const getIndexes = (array: any[]): number[] => {
  const result: number[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(i);
  }
  return result;
};
