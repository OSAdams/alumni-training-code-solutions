/* exported countdown */

const countdown = (num: number): number[] => {
  const result: number[] = [];
  let ourNum: number = num;
  while (ourNum >= 0) {
    result.push(ourNum);
    ourNum--;
  }
  return result;
};
