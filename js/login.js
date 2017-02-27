function openRegisterTab(event) {
    document.querySelector('.account-wall-login').style.display = "none";
    document.querySelector('.account-wall-register').style.display = "inline";
}

function openLoginTab(event) {
    document.querySelector('.account-wall-register').style.display = "none";
    document.querySelector('.account-wall-login').style.display = "inline";
}
//changes what happens on the submit


$('#logInForm').submit(function(){
    logIn();
    return false;
});
function logIn(){    
    var username=$("#username").val();
    console.log(username);
    var password=$("#password").val();
    //admin account
    if((username === "Admin") && (password === "Admin")){
        
    }
    //JaneDoe account
    if((username === "JaneDoe") && (password === "JaneDoe")){
        window.location.href = "DentalCoordination/appointment_form.html";
        console.log("In JD account");
    }
    //Doctor Dan
    if((username === "DoctorDan") && (password === "DoctorDan")){
        window.location.href = "DentalCoordination/employee_schedule.html";
    }
    
}