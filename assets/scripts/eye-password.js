const passwordInput = document.querySelector("#password")
const eyePas = document.querySelector("#eye-pas")
const conPasswordInput = document.querySelector("#co-password")
const eyePasCon = document.querySelector("#eye-pasCon")

const eyePassword = eyePas.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
})

const eyeConfPassword = eyePasCon.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = conPasswordInput.getAttribute("type") === "password" ? "text" : "password"
    conPasswordInput.setAttribute("type", type)
})

export { eyePassword, eyeConfPassword }