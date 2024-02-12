var passInput = document.getElementById("password-input");

// Function to validate username input
function validateUsername() {
  const username = $("#username").val().trim(); // Get the trimmed value of the username input
  const usernamePattern = /^[a-z]{3,}$/; // Regex pattern for username

  // Check if the username is empty
  if (username === "") {
    $("#username-error").html("");
    return true;
  }

  // Check if the username matches the regex pattern
  if (usernamePattern.test(username)) {
    $("#username-error").html("");
    return true; // Return true if username is valid
  } else {
    $("#username-error").html(`<div class="alert alert-danger" role="alert">
      <p>Username must contain at least 3 lowercase letters.</p>
      </div>`); // Display error message
    return false; // Return false if username is invalid
  }
}

// Function to validate email input
function validateEmail() {
  const email = $("#email").val().trim(); // Get the trimmed value of the email input
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com)$/; // Regex pattern for email

  // Check if the email is empty
  if (email === "") {
    $("#email-error").html("");
    return true;
  }

  // Check if the email matches the regex pattern
  if (emailPattern.test(email)) {
    $("#email-error").html("");
    return true; // Return true if email is valid
  } else {
    $("#email-error").html(
      `<div class="alert alert-danger" role="alert">
      <p>Please enter a valid email address (e.g., example@example.com).</p>
      </div>`
    ); // Display error message
    return false; // Return false if email is invalid
  }
}

// Function to toggle login button based on input validity
function toggleLoginButton() {
  const usernameValid = validateUsername();
  const emailValid = validateEmail();
  const passwordValid = $("#password-input").val().trim() !== ""; // Check if password is not empty

  // Enable login button only if both username/email and password are valid
  $("#submit").prop(
    "disabled",
    !(usernameValid || emailValid) || !passwordValid
  );
}

// Event listener for input event on the username or email field
$("#username, #email").on("input", function () {
  toggleLoginButton(); // Toggle login button based on input validity
});

// Event listener for input event on the password field
$("#password-input").on("input", function () {
  toggleLoginButton(); // Toggle login button based on input validity
});

// Password hide/show functionality
function togglePasswordVisibility() {
  var passInput = document.getElementById("password-input");
  var passwordToggle = document.querySelector(".password-toggle");
  if (passInput.type === "password") {
    passInput.type = "text";
    passwordToggle.style.backgroundImage = "url('/img/myeyeslash.svg')";
  } else {
    passInput.type = "password";
    passwordToggle.style.backgroundImage = "url('/img/myeye.svg')";
  }
}
