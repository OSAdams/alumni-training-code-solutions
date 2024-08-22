/* exported isVowel */

const isVowel = (character: string): boolean => {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  const char: string = character.toLowerCase();
  for (const index of vowels) {
    if (index === char) {
      return true;
    }
  }
  return false;
};
