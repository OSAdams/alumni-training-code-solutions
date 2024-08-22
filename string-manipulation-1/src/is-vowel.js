'use strict';
/* exported isVowel */
const isVowel = (character) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const char = character.toLowerCase();
  for (const index of vowels) {
    if (index === char) {
      return true;
    }
  }
  return false;
};
