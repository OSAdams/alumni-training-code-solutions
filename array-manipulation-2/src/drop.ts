/* exported drop */

const drop = (array: any[], count: number): any[] => {
  const result: any[] = [];
  if (array.length === 0) {
    return result;
  }
  for (let i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};
