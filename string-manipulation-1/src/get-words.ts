/* exported getWords */

const getWords = (string: string): string[] => {
  if (!string) {
    return [];
  }
  return string.split(' ');
};
