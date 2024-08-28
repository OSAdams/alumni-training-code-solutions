/* exported omit */

const omit = (
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> => {
  const result: Record<string, unknown> = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
};
