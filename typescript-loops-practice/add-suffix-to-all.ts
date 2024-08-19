/* exported addSuffixToAll */

const addSuffixToAll = (words: string[], suffix: string): string[] => {
  const result: string[] = [];
  for (const i of words) {
    result.push(i + suffix);
  }
  return result;
};
