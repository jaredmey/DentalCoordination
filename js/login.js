function openRegisterTab(event) {
    document.querySelector('.account-wall-login').style.display = "none";
    document.querySelector('.account-wall-register').style.display = "inline";
}

function openLoginTab(event) {
    document.querySelector('.account-wall-register').style.display = "none";
    document.querySelector('.account-wall-login').style.display = "inline";
}



//this fuction is in place of the submit button. Change button to type submit after
function logIn(){    
    var username=$("#username").val();
    console.log(username);
    var password=$("#password").val();
    //admin account
    if((username === "Admin") && (password === "Admin")){
        //I spelled calendar wrong lol
        window.location = "calender.html";
        
    }
    //JaneDoe account
    if((username === "JaneDoe") && (password === "JaneDoe")){
        window.location = "appointment_form.html";
        
    }
    //Doctor Dan
    if((username === "DoctorDan") && (password === "DoctorDan")){
        window.location = "employee_schedule.html";
    }
    
}