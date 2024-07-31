interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

type Vehicle = {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertable?: boolean;
};

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Oweeoweeo',
  lastName: 'Lovemachine',
  age: 69,
};

const fullName: string = student.firstName + ' ' + student.lastName;
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

const vehicle: Vehicle = {
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

const pet: Pet = {
  name: 'Todd',
  kind: 'Toddcat',
};

delete pet.name;
delete pet.kind;

console.log('value of pet: ', pet);
console.log('typeof pet: ', typeof pet);
