'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) {
  throw new Error('Query for $taskList failed');
}
const handleClick = (e) => {
  /*
      note: You can also use angle bracket syntax
      <HTMLElement>e.target
    */
  const eventTarget = e.target;
  console.log('eventTarget: ', eventTarget);
  console.log('eventTarget.tagName: ', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const closestEventTarget = eventTarget.closest('.task-list-item');
    if (!closestEventTarget) {
      throw new Error('The event.target.closest() query failed');
    }
    console.log('closestEventTarget: ', closestEventTarget);
    closestEventTarget.remove();
  }
};
$taskList.addEventListener('click', handleClick);
