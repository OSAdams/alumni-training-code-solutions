'use strict';
const student = {
  firstName: 'Oweeoweeo',
  lastName: 'Lovemachine',
  age: 69,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'confusion';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log(
  'value of student.previousOccupation: ',
  student.previousOccupation
);
console.log('value of student: ', student);
console.log('typeof student: ', typeof student);
const vehicle = {
  make: 'vw',
  model: 'passat',
  year: 2008,
};
vehicle['color'] = 'black';
vehicle['isConvertable'] = false;
console.log("value of vehicle['color']: ", vehicle['color']);
console.log("value of vehicle['isConvertable']: ", vehicle['isConvertable']);
console.log('value of vehicle: ', vehicle);
console.log('typeof vehicle: ', typeof vehicle);
const pet = {
  name: 'Todd',
  kind: 'Toddcat',
};
delete pet.name;
delete pet.kind;
console.log('value of pet: ', pet);
console.log('typeof pet: ', typeof pet);
