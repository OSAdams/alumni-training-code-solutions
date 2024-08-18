'use strict';
/* exported getStudentNames */
const getStudentNames = (students) => {
  const result = [];
  for (const i of students) {
    result.push(i.name);
  }
  return result;
};
