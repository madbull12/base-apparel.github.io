const form = document.getElementById("form");
const inputContainer = document.querySelector(".input--container")

const saveEmail = (e) => {
    e.preventDefault();
    let emailVal= document.getElementById("email").value;
    if(!emailVal) {
        errorMsg("Please type your email address");
    } 
    if(!validEmail) {
        errorMsg("Email's not valid");
    }
    
    
}
const validEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const errorMsg = (msg) => {
    const errorIcon = document.querySelector('.error-icon');
    errorIcon.classList.add("active");
    inputContainer.classList.add("active");
    const errorMsg = document.querySelector(".msg")
    errorMsg.innerText = msg;
    setTimeout(() => {
        errorIcon.classList.remove("active");
        inputContainer.classList.remove("active");
        errorMsg.innerText = "";
    }, 1000)
}

form.addEventListener("submit", saveEmail);
