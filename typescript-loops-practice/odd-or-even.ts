/* exported oddOrEven */

const oddOrEven = (numbers: number[]): string[] => {
  const result: string[] = [];
  for (const i of numbers) {
    if (i % 2 === 0) {
      result.push('even');
    } else {
      result.push('odd');
    }
  }
  return result;
};
