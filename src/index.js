import "./styles/style.css";

const form = document.querySelector("form");
const uName = document.getElementById("uname");
const uNameError = document.querySelector("#uname + span.error");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const phone = document.getElementById("phone");
const phoneError = document.querySelector("#phone + span.error");
const comment = document.getElementById("comment");
const submit = document.getElementById("submit");

uName.addEventListener("input", () => {
  if (uName.validity.valid) {
    uNameError.textContent = "";
    uNameError.className = "error";
  } else {
    showError();
  }
});

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

phone.addEventListener("input", () => {
  if (phone.validity.valid) {
    phoneError.textContent = "";
    phoneError.className = "error";
  } else {
    showError();
  }
});

function showError() {
  // Check Username
  if (uName.validity.valueMissing) {
    uNameError.textContent = "Please enter an Username";
  } else if (uName.validity.patternMismatch) {
    uNameError.textContent = "Please check the spelling";
  }
  // Check Email
  if (email.validity.valueMissing) {
    emailError.textContent = "Please enter your email";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email";
  } else if (email.validity.patternMismatch) {
    emailError.textContent = "Please enter a bigcorp email";
  }
  // Check Phone
  if (phone.validity.valueMissing) {
    phoneError.textContent = "Please enter your phone ";
  } else if (phone.validity.patternMismatch) {
    console.log("working");
    phoneError.textContent = "Please enter a valid number";
  }
}

showError();
