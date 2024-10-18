let email = document.getElementById("email");
let password = document.getElementById("password");
let login = document.getElementById("login");
let signup = document.getElementsByClassName("signup-btn");
let passImg = document.getElementById("passImg");
let showPass = document.getElementById("password");

let userEmail = "email@gmail.com";
let userPass = "Abcd@1234"

// console.log("helllo");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function emailValid(){
    let emailvalue = email.value;
    // console.log(e);
    
    let isEmailValid = emailRegex.test(emailvalue);
    if(emailvalue ===""){
        document.getElementById("emailError").textContent = "* please fill the fields";
        return false ;
    }
    else if(!isEmailValid){
        document.getElementById("emailError").textContent = "invalid email";
        return false ;
    }
    else if(!(emailvalue === userEmail)){
        document.getElementById("emailError").textContent = "email not find";
        return false;
    }
    else{
        document.getElementById("emailError").textContent = "";
        // emailvalue = ""
        email.value = ""
        return true ;
    }

}

function passwordValid(){
    let passwordValue = password.value;
    // console.log(p);
    
    let isPassValid = passwordRegex.test(passwordValue)
    if(passwordValue ===""){
        document.getElementById("passError").textContent = "* please fill the fields";
        return false ;
    }
    else if(!isPassValid){
        document.getElementById("passError").textContent = "invalid password";
        return false ;
    }
    else if(!(passwordValue === userPass)){
        document.getElementById("passError").textContent = "password doesn't match";
        return false;
    }
    else{
        document.getElementById("passError").textContent = "";
        return true ;
    }
}
function loginUser(){
    let isEmailtrue = emailValid();
    let isPasstrue = passwordValid();
    if( isEmailtrue && isPasstrue  ){
        alert("login success");
        location.href = 'profile.html';
    }
    // else{
    //     alert("invalid fields");
    // }
    
}


function signupUser(){
    location.href = 'signup.html';
}

// toggle password
passImg.addEventListener("click",()=>{

    
    if(showPass.type === "password"){
        showPass.type = 'text'
        passImg.src = "./img/eye.png"
    }
    else{
        showPass.type = 'password';
         passImg.src = "./img/invisible.png"
    }
})