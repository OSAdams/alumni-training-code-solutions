/* exported filterOutNulls */

const filterOutNulls = (values: any[]): any[] => {
  const result: any[] = [];
  for (const i of values) {
    if (i !== null) {
      result.push(i);
    }
  }
  return result;
};
