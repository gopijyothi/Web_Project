var inputtags=document.querySelectorAll("input")
function loginFun()
{
    var userEmail=inputtags[0].value
    var userPass=inputtags[1].value
    var storedEmail=localStorage.getItem("email")
    var storedPass=localStorage.getItem("pass")
    if(userEmail==storedEmail && userPass==storedPass)
    {
        window.open("./html/home.html")
    }
    else{
        document.getElementById("message").innerHTML="User Id and Password is wrong"
    }
}