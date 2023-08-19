const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event) {
  const username = form.username.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();
  
  // Clear previous error messages
  clearErrorMessages();

  let hasError = false;

  if (username === '') {
    displayErrorMessage('username-error', 'Username is required.');
    hasError = true;
  }

  if (email === '') {
    displayErrorMessage('email-error', 'Email is required.');
    hasError = true;
  } else if (!isValidEmail(email)) {
    displayErrorMessage('email-error', 'Please enter a valid email address.');
    hasError = true;
  }

  if (password === '') {
    displayErrorMessage('password-error', 'Password is required.');
    hasError = true;
  }

  if (hasError) {
    event.preventDefault();
  }
});

function isValidEmail(email) {
  // You can implement a more robust email validation regex if needed
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayErrorMessage(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.color = 'red';
}

function clearErrorMessages() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(element => {
    element.textContent = '';
  });
}
