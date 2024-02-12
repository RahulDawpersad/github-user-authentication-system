var usernameInput = document.getElementById("username");
var userError = document.getElementById("user-error");
var emailInput = document.getElementById("email-input");
var emailError = document.getElementById("email-error");
var passInput = document.getElementById("password-input");
var passError = document.getElementById("password-error");
var btnSubmit = document.getElementById("submit");

usernameInput.addEventListener("input", function () {
  this.value = this.value.replace(/\s/g, "");
});

emailInput.addEventListener("input", function () {
  this.value = this.value.replace(/\s/g, "");
});

passInput.addEventListener("input", function () {
  this.value = this.value.replace(/\s/g, "");
});

usernameInput.addEventListener("input", validateUsername);
emailInput.addEventListener("input", validateEmail);
passInput.addEventListener("input", validatePassword);

function validateUsername() {
  let username = usernameInput.value;
  let userPattern = /^[a-z]{3,}$/;

  if (!username.match(userPattern)) {
    userError.innerHTML = `<div class="alert alert-danger" role="alert">
    <p>Invalid Username</p>
   </div>`;
    userError.classList.remove("valid");
    userError.classList.add("error");
    btnSubmit.disabled = true;
  } else {
    userError.innerHTML = `<div class="alert alert-success" role="alert">
    <p>Valid Username</p>
   </div>`;
    userError.classList.remove("error");
    userError.classList.add("valid");
    enableSubmitButton();
  }
}

function validateEmail() {
  let email = emailInput.value;
  let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com)$/;

  if (!email.match(emailPattern)) {
    emailError.innerHTML = `<div class="alert alert-danger" role="alert">
    <p>Invalid Email Address</p>
   </div>`;
    emailError.classList.remove("valid");
    emailError.classList.add("error");
    btnSubmit.disabled = true;
  } else {
    emailError.innerHTML = `<div class="alert alert-success" role="alert">
    <p>Valid Email Address</p>
   </div>`;
    emailError.classList.remove("error");
    emailError.classList.add("valid");
    enableSubmitButton();
  }
}

function validatePassword() {
  let password = passInput.value;
  let passwordPattern =
    /^(?=.*[a-z])(?=.*\d)(?!.*\s).{15,}|^(?=.*[a-z])(?=.*\d)(?!.*\s).{8,}$/;

  if (!password.match(passwordPattern)) {
    passError.innerHTML = `<div class="alert alert-danger" role="alert">
    <p>Invalid Password</p>
   </div>`;
    passError.classList.remove("valid");
    passError.classList.add("error");
    btnSubmit.disabled = true;
  } else {
    passError.innerHTML = `<div class="alert alert-success" role="alert">
    <p>Valid Password</p>
   </div>`;
    passError.classList.remove("error");
    passError.classList.add("valid");
    enableSubmitButton();
  }
}

// Function to enable the submit button if all fields are valid
function enableSubmitButton() {
  if (
    userError.classList.contains("valid") &&
    emailError.classList.contains("valid") &&
    passError.classList.contains("valid")
  ) {
    btnSubmit.disabled = false;
  }
}

// Password hide/show functionality
function togglePasswordVisibility() {
  var passwordToggle = document.querySelector(".password-toggle");
  if (passInput.type === "password") {
    passInput.type = "text";
    passwordToggle.style.backgroundImage = "url('/img/myeyeslash.svg')";
  } else {
    passInput.type = "password";
    passwordToggle.style.backgroundImage = "url('/img/myeye.svg')";
  }
}

// Preloader Functionality
setTimeout(function () {
  $(".wrapper").fadeOut();
}, 3000); //Indicates 3 milliseconds

// Password Strength Functionality
//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js

https: $("input#password-input").on("focus keyup", function () {});

$("input#password-input").blur(function () {});
$("input#password-input").on("focus keyup", function () {
  var score = 0;
  var a = $(this).val();
  var desc = new Array();

  // strength desc
  desc[0] = "Too short";
  desc[1] = "Weak";
  desc[2] = "Good";
  desc[3] = "Strong";
  desc[4] = "Best";
});

$("input#password-input").blur(function () {});
$("input#password-input").on("focus keyup", function () {
  var score = 0;
  var a = $(this).val();
  var desc = new Array();

  // strength desc
  desc[0] = "Too short";
  desc[1] = "Weak";
  desc[2] = "Good";
  desc[3] = "Strong";
  desc[4] = "Best";

  // password length
  if (a.length >= 6) {
    $("#length").removeClass("invalid").addClass("valid");
    score++;
  } else {
    $("#length").removeClass("valid").addClass("invalid");
  }

  // at least 1 digit in password
  if (a.match(/\d/)) {
    $("#pnum").removeClass("invalid").addClass("valid");
    score++;
  } else {
    $("#pnum").removeClass("valid").addClass("invalid");
  }

  // at least 1 capital & lower letter in password
  if (a.match(/[A-Z]/) && a.match(/[a-z]/)) {
    $("#capital").removeClass("invalid").addClass("valid");
    score++;
  } else {
    $("#capital").removeClass("valid").addClass("invalid");
  }

  // at least 1 special character in password {
  if (a.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
    $("#spchar").removeClass("invalid").addClass("valid");
    score++;
  } else {
    $("#spchar").removeClass("valid").addClass("invalid");
  }

  if (a.length > 0) {
    //show strength text
    $("#passwordDescription").text(desc[score]);
    // show indicator
    $("#passwordStrength")
      .removeClass()
      .addClass("strength" + score);
  } else {
    $("#passwordDescription").text("Password not entered");
    $("#passwordStrength")
      .removeClass()
      .addClass("strength" + score);
  }
});

$("input#password-input").blur(function () {});
$("input#password-input").on("focus keyup", function () {
  var score = 0;
  var a = $(this).val();
  var desc = new Array();

  // strength desc
  desc[0] = "Too short";
  desc[1] = "Weak";
  desc[2] = "Good";
  desc[3] = "Strong";
  desc[4] = "Best";

  $("#pwd_strength_wrap").fadeIn(400);

  // password length
  if (a.length >= 6) {
    $("#length").removeClass("invalid").addClass("valid");
    score++;
  } else {
    $("#length").removeClass("valid").addClass("invalid");
  }

  // at least 1 digit in password
  if (a.match(/\d/)) {
    $("#pnum").removeClass("invalid").addClass("valid");
    score++;
  } else {
    $("#pnum").removeClass("valid").addClass("invalid");
  }

  // at least 1 capital & lower letter in password
  if (a.match(/[A-Z]/) && a.match(/[a-z]/)) {
    $("#capital").removeClass("invalid").addClass("valid");
    score++;
  } else {
    $("#capital").removeClass("valid").addClass("invalid");
  }

  // at least 1 special character in password {
  if (a.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
    $("#spchar").removeClass("invalid").addClass("valid");
    score++;
  } else {
    $("#spchar").removeClass("valid").addClass("invalid");
  }

  if (a.length > 0) {
    //show strength text
    $("#passwordDescription").text(desc[score]);
    // show indicator
    $("#passwordStrength")
      .removeClass()
      .addClass("strength" + score);
  } else {
    $("#passwordDescription").text("Password not entered");
    $("#passwordStrength")
      .removeClass()
      .addClass("strength" + score);
  }
});

$("input#password-input").blur(function () {
  $("#pwd_strength_wrap").fadeOut(400);
});

// Information icon Functionality
const infoIcon = document.querySelector(".info-icon");
const rule = document.querySelector(".rule");

infoIcon.addEventListener("click", () => {
  rule.style.display = rule.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (event) => {
  if (!infoIcon.contains(event.target)) {
    rule.style.display = "none";
  }
});
