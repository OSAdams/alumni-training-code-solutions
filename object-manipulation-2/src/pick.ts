/* exported pick */

const pick = (
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> => {
  const result: Record<string, unknown> = {};
  for (const key in keys) {
    if (source[keys[key]] !== undefined) {
      result[keys[key]] = source[keys[key]];
    }
  }
  return result;
};
