/* exported tail */

const tail = (list: any[]): any[] => {
  const result: any[] = [];
  for (let i = 1; i < list.length; i++) {
    result.push(list[i]);
  }
  return result;
};
