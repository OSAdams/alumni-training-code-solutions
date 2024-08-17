/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

const getNumbersToTen = (): number[] => {
  const numbers: number[] = [];
  let currentNumber: number = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
};

console.log('getNumbersToTen: ', getNumbersToTen());

const getEvenNumbersToTwenty = (): number[] => {
  const numbers: number[] = [];
  let currentNumber: number = 2;
  while (currentNumber % 2 === 0 && currentNumber <= 20) {
    numbers.push(currentNumber);
    currentNumber += 2;
  }
  return numbers;
};

console.log('getEvenNumbersToTwenty: ', getEvenNumbersToTwenty());

const repeatWord = (word: string, times: number): any => {
  let count: number = 1;
  let emptyString: string = '';
  while (count <= times) {
    emptyString += word;
    count++;
  }
  return emptyString;
};

console.log('repeatWord: ', repeatWord('hello goober, ', 10));

const logEachCharacter = (str: string): void => {
  for (let i = 0; i < str.length; i++) console.log(str[i]);
};

console.log('logEachCharacter: ', logEachCharacter('helloGoober'));

const doubleAll = (numbers: number[]): number[] => {
  const result: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
};

console.log(
  'doubleAll: ',
  doubleAll([5, 10, 15, 20, 25, 30, 2, 4, 6, 8, 10, 12, 0.5])
);

const getKeys = (obj: Record<string, unknown>): any => {
  const keys: string[] = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
};

console.log(
  'getKeys: ',
  getKeys({ tom_cruise: 'sucks', tom_petty: 'cool', tom_hawkins: 'sucks' })
);

const getValues = (obj: Record<string, unknown>): string[] => {
  const values: string[] = [];
  for (const key in obj) {
    const keyValue: any = obj[key];
    values.push(keyValue);
  }
  return values;
};

console.log(
  'getValues: ',
  getValues({ tom_cruise: 'sucks', tom_petty: 'cool', tom_hawkins: 'sucks' })
);
