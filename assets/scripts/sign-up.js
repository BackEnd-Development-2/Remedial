const passwordInput = document.querySelector("#password")
const conPasswordInput = document.querySelector("#co-password")
const eyePas = document.querySelector("#eye-pas")
const eyePasCon = document.querySelector("#eye-pasCon")

eyePas.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
})

eyePasCon.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = conPasswordInput.getAttribute("type") === "password" ? "text" : "password"
    conPasswordInput.setAttribute("type", type)
})