var name_error = document.getElementById('name-error');
var phone_error = document.getElementById('phone-error');
var email_error = document.getElementById('email-error');
var message_error = document.getElementById('message-error');
var submit_error = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('name').value;
    if (name.length === 0) {
        name_error.innerHTML = "Name is Required";
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        name_error.innerHTML = "Write Full Name";
        return false;
    }

    name_error.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validatePhoneNo() {
    var phoneNo = document.getElementById('phone').value;
    if (phoneNo.length === 0) {
        phone_error.innerHTML = "Phone No is Required";
        return false;
    }

    if (phoneNo.length !== 10) {
        phone_error.innerHTML = "Phone No should be 10 digits";
        return false;
    }

    if (!phoneNo.match(/^[0-9]{10}$/)) {
        phone_error.innerHTML = "Phone No is Required";
        return false;
    }

    phone_error.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;
    if (email.length === 0) {
        email_error.innerHTML = "Email is Required";
        return false;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        email_error.innerHTML = "Email Invalid";
        return false;
    }

    email_error.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateMessage() {
    var message = document.getElementById('message').value;

    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        message_error.innerHTML = left + "More Characters is Required";
        return false;
    }

    message_error.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhoneNo() || !validateEmail() || !validateMessage()) {
        submit_error.style.display = "block";
        submit_error.innerHTML = "Please fix the error to submit";
        setTimeout(function () {
            submit_error.style.display = "none";
        }, 3000)
        return false;
    }
}