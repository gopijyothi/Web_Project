var allInput=document.querySelectorAll("input")
var allSelect=document.querySelectorAll("select")
function storeData()
{
    var fName=allInput[1].value
    var lName=allInput[2].value
    var email=allInput[3].value
    var phno=allInput[4].value
    var pass=allInput[5].value
    var date=allInput[0].value
var month=allSelect[1].value
var year=allSelect[2].value
localStorage.setItem("fName",fName)
localStorage.setItem("lName",lName)
localStorage.setItem("email",email)
localStorage.setItem("phno",phno)
localStorage.setItem("pass",pass)
localStorage.setItem("month",month)
localStorage.setItem("date",date)
localStorage.setItem("year",year)
window.open(../index.html)
}
function gender(gen)
{
    localStorage.setItem("gender",gen)
}