// Sign Up

function onSubmit(){
    let fname = document.forms["signUpForm"]["fname"].value;
    let lname = document.forms["signUpForm"]["lname"].value;
    let emailId = document.forms["signUpForm"]["email"].value;
    let pass1 = document.forms["signUpForm"]["pass1"].value;
    let pass2 = document.forms["signUpForm"]["pass2"].value;

    if(fname == 0){
        alert("Please fill in first name.");
    }

    else if(lname == 0){
        alert("Please fill in last name.");
    }

    else if(emailId == 0){
        alert("Please fill in email address.");
    }

    else if(pass1 == 0){
        alert("Please fill in password.");
    }

    else if(pass2 == 0){
        alert("Please confirm your password.");
    }

    else if(pass1 != pass2) {
        alert("Password does not match")
    }

    else{
        localStorage.setItem('fname',fname);
        localStorage.setItem('emailId', emailId);
        localStorage.setItem('pass1', pass1);
        alert("Your account has been created.");
    }

    var user = {
        name: fname,
        email: emailId,
        password: pass1,
    }
}

// Login

function onLogin() {
    var storedUser = localStorage.getItem('fname');
    var storedEmail = localStorage.getItem('emailId');
    var storedPassword = localStorage.getItem('pass1');

    var userName = document.getElementById("mailId").value;
    var userPassword = document.getElementById("exampleInputPassword1").value;

    if(userName == storedEmail && userPassword == storedPassword) {
        alert("You are logged in.")
        document.getElementById("user").innerHTML = 'Welcome ' +  storedUser;
    } else {
        alert("Account details not found.")
    }

}

