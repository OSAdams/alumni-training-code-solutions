'use strict';
const $textSpans = document.querySelectorAll('span');
if (!$textSpans) {
  throw new Error('Query for $textSpans failed');
}
const $dialog = document.querySelector('dialog');
if (!$dialog) {
  throw new Error('Query for $dialog failed');
}
const $accuracyText = document.querySelector('.accuracy-text');
if (!$accuracyText) {
  throw new Error('Query for $accuracyText failed');
}
const $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) {
  throw new Error('Query for $dismissModal failed');
}
const $resetText = document.querySelector('.reset-text');
if (!$resetText) {
  throw new Error('Query for $resetText failed');
}
let character = 0;
let accuracy = 0;
const keydownTracker = (e) => {
  if ($textSpans.length - 1 === character) {
    $textSpans[character].className = 'correct';
    $accuracyText.textContent =
      'Your accuracy is: ' + Math.floor((accuracy / character) * 100) + '%';
    $dialog.showModal();
  } else if ($textSpans[character].textContent === e.key) {
    $textSpans[character].className = 'correct';
    $textSpans[character + 1].className = 'current';
    character++;
    accuracy++;
  } else if ($textSpans[character].textContent !== e.key) {
    $textSpans[character].className = 'incorrect';
    accuracy--;
  }
};
const reset = () => {
  character = 0;
  accuracy = 0;
  $textSpans[0].className = 'current';
  for (let i = 1; i < $textSpans.length; i++) {
    $textSpans[i].className = '';
  }
  $dialog.close();
};
const closeModal = () => {
  $dialog.close();
};
document.addEventListener('keydown', keydownTracker);
$resetText.addEventListener('click', reset);
$dismissModal.addEventListener('click', closeModal);
