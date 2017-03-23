//use this funciton after button press to populate table based on emplyee / day / time constrints
function populateCalendar(){
    var list=$("table#calendarTable");
    
    
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
//use this method to delete the displayed calender before populating
function removeCalendarRows(){
    var list =document.getElementById("calendarTable");
    while(list.hasChildNodes()){
        list.removeChild(list.lastChild);
    }
}
