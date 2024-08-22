/* exported toObject */

const toObject = (keyValuePair: [string, unknown]): Record<string, unknown> => {
  const result = {};
  const key: string = keyValuePair[0].toString();
  result[key] = keyValuePair[1];
  return result;
};
