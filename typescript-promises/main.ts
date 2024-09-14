import { takeAChance } from './take-a-chance.js';

takeAChance('Owen')
  .then((res) => console.log(res))
  .catch((error) => console.log(error.message));
