const colors: string[] = ['red', 'white', 'blue'];

for (const i in colors) {
  console.log(`colors[${i}]: ${colors[i]}`);
}

console.log(`America is ${colors[0]}, ${colors[1]}, ${colors[2]}`);

colors[2] = 'green';

console.log(`Mexico is ${colors[0]} ${colors[1]}, ${colors[2]}`);

console.log('Value of colors: ', colors);
console.log('typeof colors: ', typeof colors);

const students: string[] = ['John', 'David', 'Micheal', 'Scott'];

const numberOfStudents: number = students.length;

console.log(`number of students: ${numberOfStudents}`);

const lastIndex: number = numberOfStudents - 1;

const lastStudent: string = students[lastIndex];

console.log(`last student: ${lastStudent}`);

console.log('value of students: ', students);

console.log('typeof students: ', typeof students);
