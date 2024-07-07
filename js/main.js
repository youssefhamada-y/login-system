var loginemail = document.getElementById("loginemail")
var loginpassword = document.getElementById("loginpassword")
var loginbutton = document.getElementById("loginbutton")
var alertmessage = document.getElementById("alert")
var usercontainer = [];
if (localStorage.getItem("users") != null) {
    usercontainer = JSON.parse(localStorage.getItem("users"))
}
function login() {
    if (checkemailandpassword() == true) {
        window.location.href = "homepage.html"
    } else {
        getalert("email or password not correct","red")
    }
}
function checkemailandpassword() {
    for (var i = 0; i < usercontainer.length; i++) {
        if (usercontainer[i].email == loginemail.value && usercontainer[i].password == loginpassword.value) {
            localStorage.setItem('username', usercontainer[i].name)
            return true
        }
    }
}
function getalert(text, color) {

    alertmessage.classList.remove("d-none")
    alertmessage.innerHTML = text
    alertmessage.style.color = color

}
loginbutton.addEventListener("click", login)