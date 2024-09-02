'use strict';
const $name = document.getElementById('user-name');
if (!$name) {
  throw new Error('Query for $name has failed');
}
const $email = document.getElementById('user-email');
if (!$email) {
  throw new Error('Query for $email has failed');
}
const $message = document.getElementById('user-message');
if (!$message) {
  throw new Error('Query for $message has failed');
}
const handleFocus = (e) => {
  console.log('focus event fired');
  const eventTarget = e.target;
  console.log('The value of e.target name: ', eventTarget.name);
};
const handleBlur = (e) => {
  console.log('blur event fired');
  const eventTarget = e.target;
  console.log('The value of e.target name: ', eventTarget.name);
};
const handleInput = (e) => {
  console.log('blur event fired');
  const eventTarget = e.target;
  console.log('The value of e.target name: ', eventTarget.name);
  console.log('The value of e.target value: ', eventTarget.value);
};
$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);
$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
