'use strict';
const $contactForm = document.getElementById('contact-form');
if (!$contactForm) {
  throw new Error('Query for $contactForm failed');
}
const handleSubmit = (e) => {
  e.preventDefault();
  const $formElements = $contactForm.elements;
  const formElements = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('value of formElements: ', formElements);
  $contactForm.reset();
};
$contactForm.addEventListener('submit', handleSubmit);
