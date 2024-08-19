/* exported filterOutStrings */

const filterOutStrings = (values: any[]): any[] => {
  const result: any[] = [];
  for (const i of values) {
    if (typeof i !== 'string') {
      result.push(i);
    }
  }
  return result;
};
