'use strict';
const orderHistory = [
  {
    orderDate: '08-04-2020',
    orderNumber: '114-3941689-8772322',
    totalPrice: 34.0,
    delivered: true,
    deliverDate: '08-08-2020',
    returnWindow: '09-07-2020',
    product: [
      {
        type: 'book',
        title: 'JavaScript for impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        price: 31.55,
      },
    ],
  },
  {
    orderDate: '07-19-2020',
    orderNumber: '113-9984268-1280257',
    totalPrice: 44.53,
    delivered: true,
    deliverDate: '07-20-2020',
    returnWindow: '08-19-2020',
    product: [
      {
        type: 'book',
        title: 'A Timeless Way of Building',
        author: 'Alexander, Christopher',
        price: 41.33,
      },
    ],
  },
  {
    orderDate: '07-04-2020',
    orderNumber: '114-2875557-9059409',
    totalPrice: 17.22,
    delivered: true,
    deliverDate: '07-07-2020',
    returnWindow: '08-05-2020',
    product: [
      {
        type: 'electronic',
        title:
          'Gamecube Controller Adapter, Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Controller',
        price: 15.98,
      },
    ],
  },
  {
    orderDate: '07-03-2020',
    orderNumber: '113-2883177-2648248',
    totalPrice: 138.93,
    delivered: true,
    deliverDate: '07-05-2020',
    returnWindow: '08-04-2020',
    product: [
      {
        type: 'electronic',
        title:
          'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        manufacturer: 'Nintendo',
        price: 94.95,
      },
      {
        type: 'book',
        title: 'The Art of Sql',
        author: 'Farlout, Stephanie',
        price: 33.99,
      },
    ],
  },
];
console.log('the value of order history: ', orderHistory);
