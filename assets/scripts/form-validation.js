const email = document.getElementById('email')
const emailError = document.querySelector('#email + span.error')
const password = document.getElementById('password')
const passwordError = document.querySelector('#password + span.error')

let emailValid = false
let passwordValid = false

const emailValidation = () => {
    if (email.validity.valid) {
        emailError.textContent = ''
        email.className = ''
        emailError.className = 'error'
        emailValid = true
    } else {
        showEmailError()
        emailValid = false
    }
}

const showEmailError = () => {
    if (email.validity.valueMissing) {
        emailError.textContent = "Masukkan alamat email kamu.";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Masukkan alamat email yang valid.";
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email minimal ${email.minLength} karakter.`;
    }

    email.className = "input invalid"
    emailError.className = 'error active'
}

const passwordValidation = () => {
    if (password.validity.valid) {
        passwordError.textContent = ''
        password.className = ''
        passwordError.className = 'error'
        passwordValid = true
    } else {
        showPasswordError()
        passwordValid = false
    }
}

const showPasswordError = () => {
    if (password.validity.valueMissing) {
        passwordError.textContent = "Masukkan password kamu.";
    } else if (password.validity.tooShort) {
        passwordError.textContent = `Password minimal ${password.minLength} karakter.`;
    }

    password.className = "input invalid"
    passwordError.className = 'error active'
}

export { emailValidation, passwordValidation, emailValid, passwordValid}