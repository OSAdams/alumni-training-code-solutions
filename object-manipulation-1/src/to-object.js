'use strict';
/* exported toObject */
const toObject = (keyValuePair) => {
  const result = {};
  const key = keyValuePair[0].toString();
  result[key] = keyValuePair[1];
  return result;
};
