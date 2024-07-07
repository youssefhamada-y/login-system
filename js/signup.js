var username = document.getElementById("signname")
var emailinput = document.getElementById("signemail")
var passwordinput = document.getElementById("signpassword")
var signbutton = document.getElementById("btninput")
var alertmessage = document.getElementById('alert')
let users = []
if (localStorage.getItem('users') != null) {
    users = JSON.parse(localStorage.getItem('users'))
}
function signup() {
    let person = {
        name: username.value,
        email: emailinput.value,
        password: passwordinput.value

    }
    if (checkinputs() == true) {
        getalert('all inputs required', 'red')
    } else {
        if (useremailexistence() == true) {
            getalert('this user exist' ,"red")
        } else {
            users.push(person)
            localStorage.setItem('users', JSON.stringify(users))
            clearform()
            getalert('success', "green")
        }

    }


}
function getalert(text, color) {

    alertmessage.classList.remove("d-none")
    alertmessage.innerHTML = text
    alertmessage.style.color = color

}


function clearform() {
    username.value = ''
    emailinput.value = ''
    passwordinput.value = ''
}
function checkinputs() {
    if (username.value == '' || emailinput.value == '' || passwordinput.value == '') {
        return true
    } else { return false }
}
function useremailexistence() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == emailinput.value) {
            return true
        }
    }
}
signbutton.addEventListener("click", signup

)

