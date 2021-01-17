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
const closeSpan = document.querySelector(".close");
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const checkboxes = document.querySelectorAll('input[name="location"]');
const conditionsCheckbox = document.getElementById("conditions");

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
    console.log("firstname invalid");
  }

  if (!lastName.value || lastName.value.length < 2) {
    valid = false;
    console.log("lastName invalid");
  }

  if (!validateEmail(email.value)) {
    valid = false;
    console.log("email invalid");
  }

  if (!quantity.value || isNaN(quantity.value)) {
    valid = false;
    console.log("quantity invalid");
  }

  if (checkedLocations.length === 0) {
    valid = false;
    console.log("checkedLocations invalid");
  }

  if (!conditionsCheckbox.checked) {
    valid = false;
    console.log("conditionsCheckbox invalid");
  }

  if (!valid) {
    console.log("Invalid!");
    e.preventDefault();
  }
}

// Email validation function
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
