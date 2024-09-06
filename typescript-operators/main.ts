/* eslint-disable no-unused-vars */

interface Customer {
  name: string;
  details?: {
    address?: {
      city: string;
      street: string;
      zip: string;
    };
    age?: number;
  };
}

// eslint-disable-next-line
const v1 = { value: 'Something' };
// eslint-disable-next-line
const v2 = '';
// eslint-disable-next-line
const v3 = undefined;
// eslint-disable-next-line
const v4 = [3, 5, 7, 9];
// eslint-disable-next-line
const v5: Customer = {
  name: 'Carl',
  details: {
    age: 82,
  },
};
