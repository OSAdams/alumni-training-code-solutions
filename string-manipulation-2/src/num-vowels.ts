/* exported numVowels */

const numVowels = (string: string): number => {
  let count: number = 0;
  const lowerCaseString: string = string.toLowerCase();
  for (const index of lowerCaseString) {
    if (
      index === 'a' ||
      index === 'e' ||
      index === 'i' ||
      index === 'o' ||
      index === 'u'
    ) {
      count++;
    }
  }
  return count;
};
