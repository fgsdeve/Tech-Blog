console.log("signup.js is loaded");

const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("Form submitted", event.target);

  const username = $('#username-signup').val().trim();
  const password = $('#password-signup').val().trim();

  console.log("Username:", username);
  console.log("Password:", password);

  if (username && password) {
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        console.log("Signup successful");
        document.location.replace('/');
      } else {
        const result = await response.json();
        console.error("Signup failed:", result);
        alert('Failed to sign up.');
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert('Failed to sign up due to an error.');
    }
  } else {
    alert('Please fill out both fields.');
  }
};

$(document).ready(() => {
  console.log("Document is ready");
  $('.signup-form').on('submit', signupFormHandler);
});
