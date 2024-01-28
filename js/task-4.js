'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password =
    event.target.elements.password.value.trim();
  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  } else {
    console.log({
      email,
      password,
    });
  }
  form.reset();
}
