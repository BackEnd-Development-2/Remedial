import { eyePassword, eyeConfPassword } from "./eye-password.js";

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
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
}

const nama = document.getElementById('nama')
const email = document.getElementById('email')
const password = document.getElementById('password')


document.getElementById('submit').addEventListener('click', () => {
    const data = {
        nama : nama.value,
        email : email.value,
        password : password.value
    }
    
    addDataUser(data)
})

