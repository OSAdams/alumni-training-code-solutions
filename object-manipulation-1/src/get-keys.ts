/* exported getKeys */

const getKeys = (object: Record<string, unknown>): string[] => {
  const result: string[] = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
};
