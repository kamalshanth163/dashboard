// Form 1 elements

const step_1 = document.getElementById("step_1");
const form1 = document.getElementById("form1");

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");


// Form 2 elements

const step_2 = document.getElementById("step_2");
const form2 = document.getElementById("form2");

const company_name = document.getElementById("company_name");
const company_email = document.getElementById("company_email");
const company_phone = document.getElementById("company_phone");
const position = document.getElementById("position");


// Form 3 elements

const step_3 = document.getElementById("step_3");
const form3 = document.getElementById("form3");

const monday_start = document.getElementById("monday_start");
const monday_end = document.getElementById("monday_end");
const tuesday_start = document.getElementById("tuesday_start");
const tuesday_end = document.getElementById("tuesday_end");
const wednesday_start = document.getElementById("wednesday_start");
const wednesday_end = document.getElementById("wednesday_end");
const thursday_start = document.getElementById("thursday_start");
const thursday_end = document.getElementById("thursday_end");
const friday_start = document.getElementById("friday_start");
const friday_end = document.getElementById("friday_end");


// State of form validation
var formValidation = {
    form1: false,
    form2: false,
    form3: false,
};


// Initial settings 
function setInitialSettings(){
    step_1.style.display = "block";
    step_2.style.display = "none";
    step_3.style.display = "none";
}
setInitialSettings();

// Show input error messages
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success colour
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Get FieldName
function getFieldName(input) {
  var value = input.id.charAt(0).toUpperCase() + input.id.slice(1);
  value = value.replace("_", " ");
  return value;
}

// Check email is valid
function checkEmail(form, input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not invalid");
  }
}

// Check Required fields
function checkRequired(form, inputArr) {
  var inputValidations = [];
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      inputValidations.push(false);
      showError(input, `${getFieldName(input)} is required`);
    } else {
      inputValidations.push(true);
      showSuccess(input);
    }
  });

  formValidation[form] = !inputValidations.some((value) => value === false);
  console.log(formValidation);
}

// Check form validation
function checkFormValidation(formId) {
  return formValidation[formId];
}

//Event Listeners
form1.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired("form1", [firstname, lastname, email, phone, address]);
  checkEmail("form1", email);
});

form2.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired("form2", [
    company_name,
    company_email,
    company_phone,
    position,
  ]);
  checkEmail("form2", company_email);
});

form3.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired("form3", [
        monday_start,
        monday_end,
        tuesday_start,
        tuesday_end,
        wednesday_start,
        wednesday_end,
        thursday_start,
        thursday_end,
        friday_start,
        friday_end,
    ]);
});


// Manage form display
function stepForward(from, to, form) {
  var isFormValid = checkFormValidation(form);

  if (isFormValid) {
    var currentStep = document.getElementById("step_" + from);
    var nextStep = document.getElementById("step_" + to);

    currentStep.style.display = "none";
    nextStep.style.display = "block";
  }
}

function stepBack(from, to) {
  var currentStep = document.getElementById("step_" + from);
  var nextStep = document.getElementById("step_" + to);

  currentStep.style.display = "none";
  nextStep.style.display = "block";
}

