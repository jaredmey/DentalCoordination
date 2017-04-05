//must set this after successful login. Either a string or number
//alert(userType);
//alert(username);
//cols for calendar - user String, employee String, date String, Time int, notes String,
//the user that is logged in. For appointment puposes


//must make methods to show/hide certian things/buttons based on the user type
var timeslots = [8, 9, 10, 11, 12, 1, 2, 3, 4];

//example appointments struture
var appts = [0,1,2,3,4,5,6,7,8];
function populateCalendar(dateString, Employee) {
    //clear appts
    var i, j, time, list = $("table#calendarTable");
    for (j = 0; j < timeslots.length; j = j + 1) {
        appts[j]={day: dateString, time: 0, empl: Employee, customer: "Available",notes:""};
        appts[j].time = Number(timeslots[j]);
    }
    
    //table header
    list.append(
        '<tr>' +
        //add data in td's
            '<th>' + "Time" + '</th>' +
            '<th>' + "Employee" + '</th>' +
            '<th>' + "Customer" + '</th>' + 
            '<th>' + "Appointment Notes" + '</th>' +
            '<th>' + '</th>' +
            '</tr>'
    );
    //
    //
    //
    //
    //This is where you take the two parameters (dateString,Employee) to load all of the corresponding appointments into an array or object array.
    //sql call to grab appointments 'where employee = Employee and date = dateString'
    var e = document.getElementById("employeePicker");
    var employee = e.options[e.selectedIndex].text;
    var date = document.getElementById("date");
    
    
    //Success function will return calendar information in an array of objects, as shown in this image: 
    // http://image.prntscr.com/image/c6025fa03ce94a7281a4487db5fc0259.png
    
    $.ajax({
        url: 'calendarFill.php',
        type: "POST",
        dataType: 'json',
        data: ({employee: employee, date: date.value}),
        success: function(data){

            var i;
            for(i=0; i<data.length;i=i+1){
                var j;
                for(j=0; j<appts.length;j=j+1){
                    if(Number(data[i]["Time"])===appts[j].time){
                        appts[j].customer=data[i]["Username"];
                        appts[j].empl=data[i]["Employee"];
                        appts[j].notes=data[i]["AppointmentNotes"];
                    }
                }
            }
            
            //use for loop to append all times in day
    
            for (i = 0; i < timeslots.length; i  = i + 1) {
                //must check array form database to see if the timeslot is taken
                //if(timeslots[i] is in the array) --- fill the slot with the info
                //check all appts in array not just 0
                if (timeslots[i] === appts[i].time) {

                    //Show am or pm
                    if (timeslots[i] > 4) {
                        time = timeslots[i] + ":00 AM";
                    } else {
                        time = timeslots[i] + ":00 PM";
                    }
                    var add = '<span id="addAppointment' + timeslots[i] + '" class="btn btn-success" onclick="addAppointment(' + timeslots[i] + ')">Add appointment</span>';
                    var del = '<span id="deleteAppointment' + timeslots[i] + '" class="btn btn-danger" onclick="deleteAppointment(' + timeslots[i] + ')">Delete appointment</span>';
                    var addOrDeleteButton,notes;
                    if(appts[i].customer === "Available"){
                        addOrDeleteButton=add;
                        notes='<input id="notes'+timeslots[i]+'" type="text" name="notes" value="">';
                    }
                    else{
                        addOrDeleteButton=del;
                        notes='<input id="notes'+timeslots[i]+'" type="text" name="notes" value="'+appts[i].notes+'">';
                    }
                    list.append(
                        '<tr id="' + timeslots[i] + '">' +
                        //add data in td's
                            '<td>' + time + '</td>' +
                            '<td>' + appts[i].empl + '</td>' +
                            '<td>' + appts[i].customer + '</td>' +
                            '<td>' + notes + '</td>' +
                            '<td>' +addOrDeleteButton+ '</td>' +
                            '</tr>'
                    );
                }
            }
        }
    });
}
//use this method to delete the displayed calender before populating with populateCalendar
function removeCalendarRows() {
    var list = document.getElementById("calendarTable");
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    }
}

function findAppointments() {
    removeCalendarRows();
    var h2 = document.getElementById("displayInfo"); //grab the selectors data
    var e = document.getElementById("employeePicker");
    var employee = e.options[e.selectedIndex].text;
    var date = document.getElementById("date");
    //if none selected don't call populateCalendar
    if( (date.value  === "") || (employee === "") ) {
        h2.textContent="Please Select Employee and date";
    }
    else{
        populateCalendar(date.value,employee);
        h2.textContent="Appointments on "+date.value+" with "+employee;
    }
}
function addAppointment(time){
    //this grabs the row of the button pressed
    var row=document.getElementById(""+time)
    //removing add button after press
    $("#addAppointment" + time).remove();
    var e = document.getElementById("employeePicker");
    var employee = e.options[e.selectedIndex].text;
    var date = document.getElementById("date");
    var appnotes = document.getElementById("notes"+time).value;
    //use 'date.value' for the date and 'employee' for the employee lol 
    //we know the user var, use the var 'time' for time.
    //
    
    $.ajax({
        url: 'calendarAdd.php',
        type: "POST",
        data: ({ username: username, employee: employee, date: date.value, time: time, notes: appnotes}),
        success: function(data){
                    
            //re populate the page - may need little wait
            findAppointments();
        },
        error: function (xhr, errorThrown) {
            alert(xhr.status);
            alert(errorThrown);
        }
    });
}

function deleteAppointment(time) {
    //delete the appointment
    var i;
    for(i=0;i<appts.length;i++){
        //finds correct appt in appts array
        if(appts[i].time===time){
            
            var e = document.getElementById("employeePicker");
            var employee = e.options[e.selectedIndex].text;
            var date = document.getElementById("date");
 
            //delete from db where Time=appts[i].time and Employee appts[i].employee and date= appts[i].day
            $.ajax({
                url: 'calendarDelete.php',
                type: "POST",
                data: ({employee: employee, date: date.value, time: appts[i].time}),
                success: function(data){
                    
                    //re populate the page - may need little wait
                    findAppointments();
                },
                error: function (xhr, errorThrown) {
                    alert(xhr.status);
                    alert(errorThrown);
                }
            });
        }
    }
}
<<<<<<< Updated upstream
=======
function setUser(){
    //userType --- 0=user, 1=hygeniest, 2=doctor, 3=admin
    if(userType!=3){
        $("#AdminPage").hide();
    }
    updateEmployees();
}
function updateEmployees(){
    var s = $("#employeePicker");
    while (s.hasChildNodes()) {
        s.removeChild(s.lastChild);
    }
    //grab all employees names and user types
    //fill it into ex or put in success
    var ex = [{Name:"Bob",userType:1},{name:"Dr Jim",userType:2}];
    //appending Dentist option
    s.append(
    '<optgroup label="Dentist">'
    );
    var name,i;
    for(i=0;i<ex.length;i++){
        if(ex[i].userType===2){
            name=ex[i].name
            s.append(
            '<option>'+name+'</option>'
            );
        }
    }

    //end of dentists
    s.append(
    '</optgroup>'
    );
    //
    //
    //appending the hygienist
    s.append(
    '<optgroup label="hygienist">'
    );
    var name;
    //loop through this one
    for(i=0;i<ex.length;i++){
        if(ex[i].userType===1){
            name=ex[i].name
            s.append(
            '<option>'+name+'</option>'
            );
        }
    }

    //end of hygienist
    s.append(
    '</optgroup>'
    );
}


>>>>>>> Stashed changes
