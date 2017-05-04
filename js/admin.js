var Employees;
function populateEmployees(){
    
    //removeEmployeeRows();
    //Make db call retrieve the employees type=? only. Grab the names only.
    var i,list = $("#employeeTable");
    removeEmployeeRows();
    //replace this later
    
    //DT STUFF
    $.ajax({
        url: 'adminGetEmployees.php',
        type: "POST",
        dataType: "json",
        success: function(data){
            var Employees = [];
            console.log(data);
            var i;
            for (i = 0; i < data.length; i++) {
                console.log(data[i]["Name"]);
                Employees[i] = data[i]["Name"];
            }
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
        },
        error: function(xhr, errorThrown) {
            alert(xhr.status);
            alert(errorThrown);
        }
    });
}
function deleteEmployee(position){
    EmployeeName = $("#employee"+position).text();
    console.log(EmployeeName);
    //delete employee where Name=EmployeeName
    //DB Call
    
    populateEmployees();
}
function addEmployee(){
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var UserType = document.getElementById("UserType").value;
    //figure out how to get all the values from the above
    //add to user DB table
    //call last
    $.ajax({
        url: 'adminAddEmployees.php',
        type: "POST",
        data: ({ name: name, username: username, password: password, usertype: UserType}),
        success: function(data){
                    
            //re populate the page - may need little wait
            populateEmployees();
        },
        error: function (xhr, errorThrown) {
            alert(xhr.status);
            alert(errorThrown);
        }
    });
}
function removeEmployeeRows() {
    var list = document.getElementById("employeeTable");
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    }
}