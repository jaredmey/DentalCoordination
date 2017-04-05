var Employees;
function populateEmployees(){
    
    //removeEmployeeRows();
    //Make db call retrieve the employees type=? only. Grab the names only.
    var i,list = $("#employeeTable");
    removeEmployeeRows();
    //replace this later
    Employees=["Dr Behrens","Dr Meyer", "Dr Porzio"];
    //put this in the success finction
    list.append(
        '<tr>'+
        '<th>' + "Employee Name" + '</th>' +
        '<th>' + "" + '</th>' +
        '</tr>'
        );
    for (i=0;i<Employees.length;i++){
        list.append(    
        '<tr>' +
        '<td id="' + "employee"+i + '">' + Employees[i] + '</td>' +
        '<td>' + '<span class="btn btn-lg btn-danger" onclick="deleteEmployee('+i+')">Delete Employee</span>' + '</td>' +
        '</tr>'
        );
    }
}
function deleteEmployee(position){
    EmployeeName = $("#employee"+position).text();
    console.log(EmployeeName);
    //delete employee where Name=EmployeeName
    //DB Call
    
    populateEmployees();
}
function addEmployee(){
    var name=$("name"), username=$("username"), password=$("password"), userType=$("UserType");
    //figure out how to get all the values from the above
    //add to user DB table
    //call last
    populateEmployees();
}
function removeEmployeeRows() {
    var list = document.getElementById("employeeTable");
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    }
}