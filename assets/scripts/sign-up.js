import { eyePassword } from "./eye-password.js";
import { emailValidation, passwordValidation, emailValid, passwordValid } from "./form-validation.js";
import { confPasswordValidation, confPasswordValid } from "./form-validation-confirm-password.js";

const conPasswordInput = document.querySelector("#co-password")
const eyePasCon = document.querySelector("#eye-pasCon")

eyePasCon.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = conPasswordInput.getAttribute("type") === "password" ? "text" : "password"
    conPasswordInput.setAttribute("type", type)
})

const nama = document.getElementById('nama')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confPassword = document.getElementById('co-password')
const confPasswordError = document.querySelector('#co-password + span.error')
const btnSubmit = document.getElementById('submit')
const warning = document.getElementById('warning')

btnSubmit.disabled = true

let namaValid = false
let confPasswordValue = ''

const btnDisabled = () => {
    if (namaValid === true && emailValid === true && passwordValid === true && confPasswordValid === true){
        btnSubmit.disabled = false
    } else {
        btnSubmit.disabled = true
    }
}

const checkMatchPassword = () => {
    if (confPasswordValue === ''){
        confPasswordError.textContent = ''
        confPassword.className = ''
        confPasswordError.className = 'error'
    } else {
        confPasswordValidation()
    }
}

nama.addEventListener('input', () => {
    if (nama.validity.valueMissing){
        namaValid = false
    } else {
        namaValid = true
    }
    btnDisabled()
})

email.addEventListener('input', () => {
    emailValidation()
    btnDisabled()
})

password.addEventListener('input', () => {
    passwordValidation()
    checkMatchPassword()
    btnDisabled()
})

confPassword.addEventListener('input', () => {
    confPasswordValue = confPassword.value
    confPasswordValidation()
    btnDisabled()
})

const addDataUser = async (data) => {
    try {
        const response = await fetch("https://645209d8bce0b0a0f73af0c9.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    
        const result = await response.json();
        window.location.href = 'login.html'
    } catch (error) {
        warning.innerText = `Error: ${error}`
    }
}

btnSubmit.addEventListener('click', () => {
    const data = {
        nama : nama.value,
        email : email.value,
        password : password.value
    }
    
    addDataUser(data)
})
