'use strict';
const $lightBulb = document.querySelector('.light-bulb');
if (!$lightBulb) {
  throw new Error('Query for $lightBulb failed');
}
const $bulbContainer = document.querySelector('.bulb-container');
if (!$bulbContainer) {
  throw new Error('Query for $bulbContainer failed');
}
const handleClick = () => {
  if ($lightBulb.className === 'light-bulb off') {
    $lightBulb.className = 'light-bulb on';
    $bulbContainer.className = 'bulb-container light';
  } else {
    $lightBulb.className = 'light-bulb off';
    $bulbContainer.className = 'bulb-container dark';
  }
};
$lightBulb.addEventListener('click', handleClick);
