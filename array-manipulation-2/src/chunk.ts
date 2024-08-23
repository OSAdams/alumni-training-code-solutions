/* exported chunk */

const chunk = (array: unknown[], size: number): unknown[] => {
  const result: unknown[] = [];
  let subArray: unknown[] = [];
  let index: number = 0;
  if (array.length === 0 || array.length < size) {
    return result;
  }
  while (index < array.length) {
    subArray.push(array[index]);
    if ((index + 1) % size === 0 || index === array.length - 1) {
      result.push(subArray);
      subArray = [];
    }
    index++;
  }
  return result;
};
