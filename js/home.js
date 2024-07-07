var displayusername=document.getElementById("displayusername")
var logoutuser=document.getElementById("logout")
if(localStorage.getItem("username") !=null)
    {
displayusername.innerHTML =`welcome ${localStorage.getItem("username")}`
}
function logout(){
    window.location.href="index.html"
    localStorage.removeItem("username")
}
logoutuser.addEventListener("click",logout)
console.log(logoutuser);