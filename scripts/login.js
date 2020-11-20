
let loginButton = document.getElementById("login");
let username = document.getElementById("username");
let password = document.getElementById("password");
let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".error-modal");
backdrop.addEventListener("click", closeModal);
loginButton.addEventListener("click", loginFun);

function loginFun () {

let uname = username.value;
let pwd = password.value;
console.log(uname +' '+ pwd)
if (uname === 'ayush' && pwd === 'test')
{
    window.location.replace("file:///C:/Javascript/serp_training_JS_assignment/to_do_app.html");
}
else
{
    modal.classList.add("open");
    backdrop.classList.add("open");
}


};


function closeModal() {
    
    modal.classList.remove("open");
    backdrop.classList.remove("open");
}

