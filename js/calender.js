var timeslots = [8,9,10,11,12,1,2,3,4]
//example appointments struture
var appointment1 = {day:" ",time:9,empl:"Dr. Behrens",customer:"Nark"};
var appts = [appointment1];
function populateCalendar(dateString,Employee){
    
    var list=$("table#calendarTable");
    //table header
    list.append(
        '<tr>' +
        //add data in td's
            '<th>' +"Time"+ '</th>' +
            '<th>' +"Employee"+ '</th>' +
            '<th>' +"Customer"+ '</th>' +
            '<th>' + '</th>' +
        '</tr>'
    );
    //
    //
    //
    //
    //This is where you take the two parameters (dateString,Employee) to load all of the corresponding appointments into an array or object array.
    //
    //
    //
    //
    //
    //
    //use for loop to append all times in day
    for( var i=0;i<timeslots.length;i++){
        
            //must check array form database to see if the timeslot is taken
            //if(timeslots[i] is in the array) --- fill the slot with the info
        if((timeslots[i]===appts[0].time)){
            var time;
            //Show am or pm
            if (timeslots[i]>4){
                time = timeslots[i]+":00 AM"
            }
            else{
                time = timeslots[i]+":00 PM"
            }

            list.append(
             '<tr id="'+timeslots[i]+'">' +
                //add data in td's
                '<td>' +time+ '</td>' +
                '<td>' +appts[0].empl+ '</td>' +
                '<td>' +appts[0].customer+ '</td>' +
                '<td>' +'<span id="editAppointment'+timeslots[i]+'" class="btn btn-primary" onclick="editAppointment('+timeslots[i]+')">Edit appointment</span>'+ '</td>' +
            '</tr>'
            );
        }
            //else do below
        else{
            var time;
            //Show am or pm
            if (timeslots[i]>4){
                time = timeslots[i]+":00 AM"
            }
            else{
                time = timeslots[i]+":00 PM"
            }

            list.append(
             '<tr id="'+timeslots[i]+'">' +
                //add data in td's
                '<td>' +time+ '</td>' +
                '<td>' +"Available"+ '</td>' +
                '<td>' +"Available"+ '</td>' +
                '<td>' +'<span id="addAppointment'+timeslots[i]+'" class="btn btn-success" onclick="addAppointment('+timeslots[i]+')">Add appointment</span>'+ '</td>' +
            '</tr>'
            );
        }
    }
    
}
//use this method to delete the displayed calender before populating with populateCalendar
function removeCalendarRows(){
    var list =document.getElementById("calendarTable");
    while(list.hasChildNodes()){
        list.removeChild(list.lastChild);
    }
}

function findAppointments(){
    removeCalendarRows();
    var h2=document.getElementById("displayInfo"); //grab the selectors data
    var e = document.getElementById("employeePicker");
    var strUser = e.options[e.selectedIndex].text;
    console.log(strUser);
    var date =document.getElementById("date");
    console.log(date.value);
    //if none selected don't call populateCalendar
    if((date.value ==="")||(strUser==="")){
        h2.textContent="Please Select Employee and date";
    }
    else{
        populateCalendar(date.value,strUser);
        h2.textContent="Appointments on "+date.value+" with "+strUser
    }
    
}
function addAppointment(time){
    //this grabs the row of the button pressed
    var row=document.getElementById(""+time)
    //example on how to change data
    row.firstChild.nextSibling.nextSibling.nextSibling.textContent="Not Available"
    //removing add button after press
    $("#addAppointment"+time).remove();
    //
    //
    //
    //send this appt details to DB
    //
    //
    //
}
