function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeSpan = document.getElementById("closeModal");
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkboxes = document.querySelectorAll('input[name="location"]');
const conditionsCheckbox = document.getElementById("conditions");
const successAlert = document.getElementById("successMsg");
const closeSuccess = document.getElementById("closeSuccess");

const firstNameFormData = document.getElementById("firstNameFormData");
firstNameFormData.setAttribute(
  "data-error",
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
);
const lastNameFormData = document.getElementById("lastNameFormData");
lastNameFormData.setAttribute(
  "data-error",
  "Veuillez entrer 2 caractères ou plus pour le champ du nom."
);
const mailFormData = document.getElementById("mailFormData");
mailFormData.setAttribute(
  "data-error",
  "Veuillez entrer une adresse électronique valide."
);
const birthDateFormData = document.getElementById("birthDateFormData");
birthDateFormData.setAttribute(
  "data-error",
  "Vous devez entrer votre date de naissance."
);
const quantityFormData = document.getElementById("quantityFormData");
quantityFormData.setAttribute("data-error", "Vous devez entrer une quantité.");
const locationFormData = document.getElementById("locationFormData");
locationFormData.setAttribute("data-error", "Vous devez choisir une option.");
const conditionsFormData = document.getElementById("conditionsFormData");
conditionsFormData.setAttribute(
  "data-error",
  "Vous devez vérifier que vous acceptez les termes et conditions."
);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form event
closeSpan.addEventListener("click", closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Close success message event
closeSuccess.addEventListener("click", closeSucess);

// Close success message
function closeSucess() {
  successAlert.style.display = "none";
  sessionStorage.removeItem("showSuccess");
}

// Conditionally show success message
if (sessionStorage.getItem("showSuccess")) {
  successAlert.style.display = "block";
}

function validate(e) {
  let valid = true;
  let checkedLocations = [];

  checkboxes.forEach(function (c) {
    if (c.checked) {
      checkedLocations.push(c.value);
    }
  });

  if (!firstName.value || firstName.value.length < 2) {
    valid = false;
    firstNameFormData.setAttribute("data-error-visible", true);
  }

  if (!lastName.value || lastName.value.length < 2) {
    valid = false;
    lastNameFormData.setAttribute("data-error-visible", true);
  }

  if (!validateEmail(email.value)) {
    valid = false;
    mailFormData.setAttribute("data-error-visible", true);
  }

  if (birthDate.value === "") {
    valid = false;
    birthDateFormData.setAttribute("data-error-visible", true);
  }

  if (!quantity.value || isNaN(quantity.value)) {
    valid = false;
    quantityFormData.setAttribute("data-error-visible", true);
  }

  if (checkedLocations.length === 0) {
    valid = false;
    locationFormData.setAttribute("data-error-visible", true);
  }

  if (!conditionsCheckbox.checked) {
    valid = false;
    conditionsFormData.setAttribute("data-error-visible", true);
  }

  if (!valid) {
    e.preventDefault();
  } else {
    successAlert.style.display = "block";
    sessionStorage.setItem("showSuccess", true);
  }
}

// Email validation function
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
