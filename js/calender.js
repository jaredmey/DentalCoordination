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