
var nameError = document.querySelector("#name-error");
var phoneError = document.querySelector("#phone-error");
var emailError = document.querySelector("#email-error");
var msgError = document.querySelector("#msg-error");
var submitError = document.querySelector("#submit-error");

function validateName() {
    var name = document.querySelector("#contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }

    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}