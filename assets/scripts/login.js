import { emailValidation, passwordValidation, emailValid, passwordValid } from "./form-validation.js"
import { eyePassword } from "./eye-password.js"

const btnSubmit = document.getElementById('submit')

btnSubmit.disabled = true

const btnDisabled = () => {
    if (emailValid === true && passwordValid === true){
        btnSubmit.disabled = false
    } else {
        btnSubmit.disabled = true
    }
}

document.getElementById('email').addEventListener('input', () => {
    emailValidation()
    btnDisabled()
})
document.getElementById('password').addEventListener('input', () => {
    passwordValidation()
    btnDisabled()
})

const getDataUser = async () => {
    const response = await fetch('https://645209d8bce0b0a0f73af0c9.mockapi.io/users')
    if (!response.ok) {
        throw new Error('API request failed')
    }
    const data = await response.json()
    return data
}

const inputUser = {
    email : document.getElementById('email'),
    password : document.getElementById('password')
}

const checkLogin = async () => {
    const dataUsers = await getDataUser()
    
    let a = dataUsers.find((item) => {
        return item.email === inputUser.email.value && item.password === inputUser.password.value
    })

    if (a !== undefined){
        window.location.href = 'home-user.html?username=' + a.nama;
    } else {
        const warning = document.getElementById('warning')
        warning.style.display = 'block'
        warning.innerText = 'username atau password salah'
    }
}


btnSubmit.addEventListener('click', async () => {   
    checkLogin()
})