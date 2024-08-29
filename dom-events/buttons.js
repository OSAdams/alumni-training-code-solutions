'use strict';
const $clickButton = document.querySelector('.click-button');
if (!$clickButton) {
  throw new Error('The $clickButton query failed');
}
const handleClick = (e) => {
  console.log('button clicked!');
  console.log('value of $clickButton event: ', e);
  console.log('value of $clickButton event.target: ', e.target);
};
$clickButton.addEventListener('click', handleClick);
const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) {
  throw new Error('The $hoverButton query failed');
}
const handleMouseover = (e) => {
  console.log('button hovered!');
  console.log('value of $hoverButton event: ', e);
  console.log('value of $hoverButton event.target: ', e.target);
};
$hoverButton.addEventListener('mouseover', handleMouseover);
const $doubleClickButton = document.querySelector('.double-click-button');
if (!$doubleClickButton) {
  throw new Error('The $doubleClickButton query failed');
}
const handleDoubleClick = (e) => {
  console.log('button double clicked!');
  console.log('value of $doubleClickButton event: ', e);
  console.log('value of $doubleClickButton event.target: ', e.target);
};
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
