'use strict';
const colors = ['red', 'white', 'blue'];
for (let i in colors) {
  console.log(`colors[${i}]: ${colors[i]}`);
}
console.log(`America is ${colors[0]}, ${colors[1]}, ${colors[2]}`);
colors[2] = 'green';
console.log(`Mexico is ${colors[0]} ${colors[1]}, ${colors[2]}`);
console.log('Value of colors: ', colors);
console.log('typeof colors: ', typeof colors);
const students = ['John', 'David', 'Micheal', 'Scott'];
const numberOfStudents = students.length;
console.log(`number of students: ${numberOfStudents}`);
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log(`last student: ${lastStudent}`);
console.log('value of students: ', students);
console.log('typeof students: ', typeof students);
