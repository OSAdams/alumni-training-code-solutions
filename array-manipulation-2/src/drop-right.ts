/* exported dropRight */

const dropRight = (array: any[], count: number): any[] => {
  const result: any[] = [];
  if (array.length === 0 || array.length < count) {
    return result;
  }
  for (let i = 0; i < array.length - count; i++) {
    result.push(array[i]);
  }
  return result;
};
