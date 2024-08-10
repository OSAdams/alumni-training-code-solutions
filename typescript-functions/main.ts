const convertMinutesToSeconds = (minutes: number): number => minutes * 60;

console.log(`10 minutes converted to seconds = ${convertMinutesToSeconds(10)}`);
console.log(`3 minutes converted to seconds = ${convertMinutesToSeconds(3)}`);

const greet = (name: string): string => 'Hello ' + name + '!';

console.log(greet('Beavis'));
console.log(greet('Jon Snow'));

const getArea = (width: number, height: number): number => width * height;

console.log(`The area of 13 and 37 = ${getArea(13, 37)}`);
console.log(`The area of 6 and 9 = ${getArea(6, 9)}`);

interface Person {
  firstName: string;
  lastName?: string;
}

const getFirstName = (person: Person): string => person.firstName;

console.log(getFirstName({ firstName: 'jon', lastName: 'snow' }));
console.log(getFirstName({ firstName: 'Pizza' }));

const getLastElement = (array: any[]): any => array[array.length - 1];

console.log(`Last element of array [1, 2, 3]: ${getLastElement([1, 2, 3])}`);
console.log(
  `Last element of array [8, 2, 5, 6, true, false]: ${getLastElement([
    8,
    2,
    5,
    6,
    true,
    false,
  ])}`
);
console.log(
  `Last element of array ['everybody', 'wants', 'to', 'rule', 'the', 'world']: ${getLastElement(
    ['everybody', 'wants', 'to', 'rule', 'the', 'world']
  )}`
);

const callOtherFunctions = (aFunction: Function, theArgument: any): any =>
  aFunction(theArgument);

console.log(
  'callOtherFunctions with greet: ',
  callOtherFunctions(greet, 'tom cruise sucks')
);
console.log(
  'callOtherFunctions with getLastElement: ',
  callOtherFunctions(getLastElement, [1, 2, 3, 4, 5])
);
