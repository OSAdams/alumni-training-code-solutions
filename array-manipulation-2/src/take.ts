/* exported take */

const take = (array: any[], count: number): any[] => {
  const result: any[] = [];
  if (array.length === 0) {
    return result;
  }
  let counter: number = 0;
  while (counter < count) {
    result.push(array[counter]);
    counter++;
  }
  return result;
};
