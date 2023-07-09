// Form 1 elements
const form1 = document.getElementById('form1');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');

// Form 2 elements
const form2 = document.getElementById('form2');
const company_name = document.getElementById('company_name');
const company_email = document.getElementById('company_email');
const company_phone = document.getElementById('company_phone');
const position = document.getElementById('position');


//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        showError(input,'Email is not invalid');
    }
}

//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}

//get FieldName
function getFieldName(input) {
    var value = input.id.charAt(0).toUpperCase() + input.id.slice(1);
    value = value.replace("_", " ");
    return value;
}


//Event Listeners
form1.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([firstname, lastname, email, phone, address]);
    checkEmail(email);
});

form2.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([company_name, company_email, company_phone, position]);
    checkEmail(company_email);
});