'use strict';
/* exported filterOutStrings */
const filterOutStrings = (values) => {
  const result = [];
  for (const i of values) {
    if (typeof i !== 'string') {
      result.push(i);
    }
  }
  return result;
};
