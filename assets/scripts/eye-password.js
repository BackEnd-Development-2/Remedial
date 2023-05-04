const passwordInput = document.querySelector("#password")
const eyePas = document.querySelector("#eye-pas")

const eyePassword = eyePas.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
})


export { eyePassword }