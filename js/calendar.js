//must set this after successful login. Either a string or number
//alert(userType);
//alert(username);

//the user that is logged in. For appointment puposes
var User;

//must make methods to show/hide certian things/buttons based on the user type
var timeslots = [8, 9, 10, 11, 12, 1, 2, 3, 4];

//example appointments struture
var appointmentBlank = {day: "x", time: 0, empl: "x", customer: "x"};
var appts = [];
function populateCalendar(dateString, Employee) {
    //clear appts
    var i, j, time, list = $("table#calendarTable");
    for (j = 0; j < timeslots.length; j = j + 1) {
        appts.push(appointmentBlank);
        appts[j].time = Number(timeslots[j]);
        console.log(appts[j].time);
    }
    
    //table header
    list.append(
        '<tr>' +
        //add data in td's
            '<th>' + "Time" + '</th>' +
            '<th>' + "Employee" + '</th>' +
            '<th>' + "Customer" + '</th>' +
            '<th>' + '</th>' +
            '</tr>'
    );
    //
    //
    //
    //
    //This is where you take the two parameters (dateString,Employee) to load all of the corresponding appointments into an array or object array.
    //sql call to grab appointments 'where employee = Employee and date = dateString' 
    //
    //
    //
    //
    //
    //
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

            list.append(
                '<tr id="' + timeslots[i] + '">' +
                //add data in td's
                    '<td>' + time + '</td>' +
                    '<td>' + appts[i].empl + '</td>' +
                    '<td>' + appts[i].customer + '</td>' +
                    '<td>' + '<span id="deleteAppointment' + timeslots[i] + '" class="btn btn-danger" onclick="deleteAppointment(' + timeslots[i] + ')">Delete appointment</span>' + '</td>' +
                    '</tr>'
            );
        }
            //else do below
            else {
            //console.log("TS= "+timeslots[i]+" appts = "+appts[i].time);
            
            //Show am or pm
                if (timeslots[i] > 4) {
                    time = timeslots[i] + ":00 AM";
                } else {
                    time = timeslots[i] + ":00 PM";
                }

                list.append(
                    '<tr id="' + timeslots[i] + '">' +
                //add data in td's
                        '<td>' + time + '</td>' +
                        '<td>' + "Available" + '</td>' +
                        '<td>' + "Available" + '</td>' +
                        '<td>' + '<span id="addAppointment' + timeslots[i] + '" class="btn btn-success" onclick="addAppointment(' + timeslots[i] + ')">Add appointment</span>'+ '</td>' +
                        '</tr>'
                );
            }
    }
    
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
    console.log(employee);
    var date = document.getElementById("date");
    console.log(date.value);
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
    //example on how to change data
    row.firstChild.nextSibling.nextSibling.nextSibling.textContent="Not Available";
    //removing add button after press
    $("#addAppointment" + time).remove();
    //
    //
    //
    //send this appt details to DB
    //
    //
    //
    //re populate the page
}
function deleteAppointment(time) {
    //delete the appointment
    //re populate the page - may need little wait
}
