/* exported truncate */

const truncate = (length: number, string: string): string =>
  string.slice(0, length) + '...';
