'use strict';
/* exported filterOutNulls */
const filterOutNulls = (values) => {
  const result = [];
  for (const i of values) {
    if (i !== null) {
      result.push(i);
    }
  }
  return result;
};
