//use this funciton after button press to populate table based on emplyee / day / time constrints
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
    //grab from server
    
        list.append(
         '<tr>' +
            //add data in td's
            '<td>' + '</td>' +
            '<td>' + '</td>' +
            '<td>' + '</td>' +
            '<td>' + '</td>' +
        '</tr>'
        );
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