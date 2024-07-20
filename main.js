var inptxt = document.getElementById("inptxt");
var Mail = document.getElementById("Mail");
var passwd = document.getElementById("passwd");
var user = document.getElementById("user");
var email = document.getElementById("email");
var password = document.getElementById("password");
// js for btn Form
var btn = document.getElementById("btn");
var form = document.getElementById("form");
btn.onclick = function(){
    form.style.top = "0" ;
}
// js for btn clear
var clear = document.getElementById("clear");
clear.onclick = function(){
    inptxt.value="";
    Mail.value="";
    passwd.value="";
}
// js for btn close
var close = document.getElementById("close");
close.onclick = function(){
    navSide.style.left = "-100%" ;
}
// js for span show
var hide = document.getElementById("hide");
hide.onclick = function(event){
    event.preventDefault();
    if (passwd.type == 'password'){
        passwd.type = 'text'
    }
    else{
        passwd.type = 'password'
    }
}
// js for btn menu
var menu = document.getElementById("menu")
menu.onclick =function(){
    navSide.style.left = "0" ;
}
// js for btn submit
var submit = document.getElementById("submit");
var navSide = document.getElementById("navSide");
var alert = document.getElementById("alert");
submit.onclick = function(event){
    event.preventDefault();
    navSide.style.left = "0" ;

    // var pattern = /^[A-Z][a-zA-Z]{3,}$/;
    // var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (inptxt.value == "" || passwd.value == "" || Mail.value == ""){
        alert.innerHTML = "can not be empty";
        alert.style.color = "red";
        alert.style.right =  "1%"
    }
    else if( inptxt.value.length < 4 ){
        alert.innerHTML = "must be at least 4 letters";
        alert.style.color = "red";
        alert.style.right =  "1%"
    }
    else if (passwd.value.length < 8 ){
        alert.innerHTML = "must be at least contain 8 letters & include */$#%^&*";
        alert.style.color = "red";
        alert.style.right =  "1%"
    }
    else{
        alert.innerHTML = "Registeration succssefully";
        alert.style.right =  "1%"
        alert.style.color = "green";
        user.innerHTML = inptxt.value;
        email.innerHTML = Mail.value;
        password.innerHTML = passwd.value;
        inptxt.value="";
        Mail.value="";
        passwd.value="";
    }
}
// js for alert
alert.onclick = function(){ 
    alert.style.right = "-100%";
}