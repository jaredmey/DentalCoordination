function findEmployees(){
    var e = document.getElementById("employeePicker");
    var employee = e.options[e.selectedIndex].text;
}
var Employees;
function populateEmployees(){
    //Make db call retrieve the employees type=? only. Grab the names only.
    var i;
    //replace this later
    var data=["Dr Behrens","Dr Meyer", "Dr Porzio"];
    //put this in the success finction
    for (i=0;i<data.length;i++){
        list.append(    
        '<tr id="' + "employee"+i+ + '">' +
        '<td>' + data[i] + '</td>' +
        '<td>' + '<span id="deleteEmployee' + i + '" class="btn btn-danger" onclick="deleteEmployee(' + i + ')">Delete Employee</span>' + '</td>' +
        '</tr>'
        );
    }
}
function deleteEmployee(position){
    
}
function addEmployee(){
    
}