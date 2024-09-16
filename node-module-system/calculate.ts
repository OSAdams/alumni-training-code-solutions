import { add } from './add';
import { subtract } from './subtract';
import { divide } from './divide';
import { multiply } from './multiply';

if (process.argv[3] === 'plus') {
  const result: number = add(
    parseInt(process.argv[2]),
    parseInt(process.argv[4])
  );
  console.log('Result: ', result);
} else if (process.argv[3] === 'minus') {
  const result: number = subtract(
    parseInt(process.argv[2]),
    parseInt(process.argv[4])
  );
  console.log('Result: ', result);
} else if (process.argv[3] === 'over') {
  const result: number = divide(
    parseInt(process.argv[2]),
    parseInt(process.argv[4])
  );
  console.log('Result: ', result);
} else if (process.argv[3] === 'times') {
  const result: number = multiply(
    parseInt(process.argv[2]),
    parseInt(process.argv[4])
  );
  console.log('Result: ', result);
} else {
  console.log('Invalid operation.');
}
