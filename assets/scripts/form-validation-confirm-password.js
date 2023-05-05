const confPassword = document.getElementById('co-password')
const confPasswordError = document.querySelector('#co-password + span.error')

let confPasswordValid = false

const confPasswordValidation = () => {
    if (password.value === confPassword.value) {
        confPasswordError.textContent = ''
        confPassword.className = ''
        confPasswordError.className = 'error'
        confPasswordValid = true
    } else {
        showConfirmPassError()
        confPasswordValid = false
    }
}

const showConfirmPassError = () => {
    if (confPassword.validity.valueMissing) {
        confPasswordError.textContent = "Masukkan konfirmasi password.";
    } else if (confPassword.value !== password.value) {
        confPasswordError.textContent = "Password yang kamu masukkan tidak sesuai.";
    }

    confPassword.className = "input invalid"
    confPasswordError.className = 'error active'
}

export { confPasswordValidation, confPasswordValid }