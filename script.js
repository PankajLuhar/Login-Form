let uesrname = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

function validateForm(){
    if(uesrname.value == ""){
        document.getElementById("userError").innerHTML = "User Name is empty";
        flag = 0;
    }else if(uesrname.value.length < 3){
        document.getElementById("userError").innerHTML = "User Name required minimum 3 char";
        flag = 0;
    }else{
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }
    if(password.value == ""){
        document.getElementById("passError").innerHTML = "Password is empty";
        flag = 0;
    }else{
        document.getElementById("passError").innerHTML = "";
        flag = 1;
    }
    
    if(flag){
        return true;
    }else{
        return false;
    }
}