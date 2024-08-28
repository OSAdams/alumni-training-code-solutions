/* exported invert */

const invert = (source: Record<string, any>): Record<string, string> => {
  const result: Record<string, string> = {};
  for (const key in source) {
    const newKey: string = source[key].toString();
    result[newKey] = key;
  }
  return result;
};
