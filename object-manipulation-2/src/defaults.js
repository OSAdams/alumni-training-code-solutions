'use strict';
/* exported defaults */
const defaults = (target, source) => {
  for (const key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
};
