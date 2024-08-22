/* exported getValues */

const getValues = (object: Record<string, unknown>): unknown[] => {
  const result: unknown[] = [];
  for (const key in object) {
    result.push(object[key]);
  }
  return result;
};
