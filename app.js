const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const ageInput = document.getElementById('age');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validation
  let valid = true;
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const age = ageInput.value.trim();

  if (name === '') {
    setErrorFor(nameInput, 'Name cannot be blank');
    valid = false;
  } else if (!isValidName(name)) {
    setErrorFor(nameInput, 'Name can only contain letters');
    valid = false;
  } else {
    setSuccessFor(nameInput);
  }

  if (email === '') {
    setErrorFor(emailInput, 'Email cannot be blank');
    valid = false;
  } else if (!isValidEmail(email)) {
    setErrorFor(emailInput, 'Email is not valid');
    valid = false;
  } else {
    setSuccessFor(emailInput);
  }

  if (phone === '') {
    setErrorFor(phoneInput, 'Phone number cannot be blank');
    valid = false;
  } else if (!isValidPhone(phone)) {
    setErrorFor(phoneInput, 'Phone number is not valid');
    valid = false;
  } else {
    setSuccessFor(phoneInput);
  }

  if (age === '') {
    setErrorFor(ageInput, 'Age cannot be blank');
    valid = false;
  } else if (isNaN(age)) {
    setErrorFor(ageInput, 'Age must be a number');
    valid = false;
  } else if (age < 0) {
    setErrorFor(ageInput, 'Age cannot be negative');
    valid = false;
  } else {
    setSuccessFor(ageInput);
  }

  if (valid) {
    message.innerHTML = 'Form submitted successfully!';
    message.style.color = 'green';
    form.reset();
  } else {
    message.innerHTML = 'Please fill in the required fields';
    message.style.color = 'red';
  }
});

function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector('.error-message');
  formGroup.classList.add('error');
  error.innerText = message;
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove('error');
}

function isValidName(name) {
  return /^[a-zA-Z]+$/.test(name);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^(\+?\d{1,3})?([ -]?\d{10}){1}$/.test(phone);
}
