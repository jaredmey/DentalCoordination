//use this function after button press to populate table based on employee / day / time constrints
//this functions takes a parameter of the time of the added appointment

var timeslots = [8,9,10,11,12,1,2,3,4]
function populateCalendar(){
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
    //use for loop to append all times in day
    for( var i=0;i<timeslots.length;i++){
        
            //must check array form database to see if the timeslot is taken
            //if(timeslots[i] is in the array) --- fill the slot with the info
            //else
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
                '<td>' +'<span id="addAppointment1" class="btn btn-success" onclick="addAppointment('+timeslots[i]+')">Add appointment</span>'+ '</td>' +
            '</tr>'
            );
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
    //grab the selectors data
    //if none selected don't call populateCalendar
    populateCalendar();
}
function addAppointment(time){
    //this grabs the row of the button pressed
    var row=document.getElementById(""+time)
    //example on how to change data
    row.firstChild.nextSibling.textContent="Not Available"
    //send this appt details to server
}
