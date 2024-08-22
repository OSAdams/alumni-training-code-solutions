/* exported setValue */

const setValue = (
  object: Record<string, unknown>,
  key: string,
  value: unknown
): unknown => {
  object[key] = value;
  return undefined;
};
