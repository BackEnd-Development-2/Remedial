const email = document.getElementById('email')
const emailError = document.querySelector('#email + span.error')
const password = document.getElementById('password')
const passwordError = document.querySelector('#password + span.error')
const btnSubmit = document.getElementById('submit')

btnSubmit.disabled = true

let emailValid = false
let passwordValid = false

const emailValidation = email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.textContent = ''
        email.className = ''
        emailError.className = 'error'
        emailValid = true
    } else {
        showEmailError()
    }
    btnDisabled()
})

const showEmailError = () => {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }

    email.className = "input invalid"
    emailError.className = 'error active'
}

const passwordValidation = password.addEventListener('input', () => {
    if (password.validity.valid) {
        passwordError.textContent = ''
        password.className = ''
        passwordError.className = 'error'
        passwordValid = true
    } else {
        showPasswordError();
    }
    btnDisabled()
})

const showPasswordError = () => {
    if (password.validity.valueMissing) {
        passwordError.textContent = "You need to enter password.";
    } else if (password.validity.tooShort) {
        passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
    }

    password.className = "input invalid"
    passwordError.className = 'error active'
}

const btnDisabled = () => {
    if (emailValid === true && passwordValid === true){
        btnSubmit.disabled = false
    }
}

export { emailValidation, passwordValidation}