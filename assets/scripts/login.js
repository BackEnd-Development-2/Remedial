import { emailValidation, passwordValidation } from "./form-validation.js"
import { eyePassword } from "./eye-password.js"

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
    
    for (const item of dataUsers) {
        if (item.email === inputUser.email.value && item.password === inputUser.password.value){
          window.location.href = 'index.html'
          break
        } else {
          const warning = document.getElementById('warning')
          warning.style.display = 'block'
          warning.innerText = 'username atau password salah'
          break
        }
    }
}

document.getElementById('submit').addEventListener('click', async () => {   
    checkLogin()
})
