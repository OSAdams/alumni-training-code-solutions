interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.getElementById('contact-form') as HTMLFormElement;
if (!$contactForm) {
  throw new Error('Query for $contactForm failed');
}

const handleSubmit = (e: Event): void => {
  e.preventDefault();
  const $formElements = $contactForm.elements as FormElements;
  const formElements = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('value of formElements: ', formElements);
  $contactForm.reset();
};

$contactForm.addEventListener('submit', handleSubmit);
