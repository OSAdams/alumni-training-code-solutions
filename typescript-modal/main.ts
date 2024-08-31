const $openModal = document.querySelector('.open-modal');
if (!$openModal) {
  throw new Error('Query of $openModal failed');
}
const $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) {
  throw new Error('Query of $dismissModal failed');
}
const $dialog = document.querySelector('dialog');
if (!$dialog) {
  throw new Error('Query of $dialog failed');
}

$openModal.addEventListener('click', () => {
  $dialog.showModal();
});

$dismissModal.addEventListener('click', () => {
  $dialog.close();
});
