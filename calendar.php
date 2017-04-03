<html>
    <?php
        function setUserType(){
            $mysqli = mysqli_connect("localhost", "user", "password", "JEMDental");

            if ($mysqli->connect_errno) {
                echo 'Cannot connect to server';
            }

            $type = mysqli_query($mysqli, "SELECT UserType FROM Users WHERE isLoggedIn = 1");

            $resType = mysqli_fetch_assoc($type);

            $val = $resType["UserType"];

            $userType = 0;

            if ($val == 1) {
                $userType = 1;
            } 
            else if ($val == 2) {
                $userType = 2;
            }
            else if ($val == 3) {
                $userType = 3;
            }
            
            return $userType;
        }
    
        function setUserName(){
            $mysqli = mysqli_connect("localhost", "user", "password", "JEMDental");

            if ($mysqli->connect_errno) {
                echo 'Cannot connect to server';
            }
            $name = mysqli_query($mysqli, "SELECT Username FROM Users WHERE isLoggedIn = 1");

            $resUser = mysqli_fetch_assoc($name);
            $userName = $resUser["Username"];

            return $userName;
        }
        
        $userType = setUserType();
        $userName = setUserName();
    ?>
    <head>
        <title>JEM Scheduling</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script type="text/javascript">
            var userType = <?php echo json_encode($userType); ?>;
            var username = <?php echo json_encode($userName); ?>;
        </script>
        <script src="js/calendar.js"></script>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
                <a href="index.html"><img class="calendar-page-icon" src="img/jem-dental-logo-icon.png"></a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><a href="/src/index.html">JEM Dental</a></li>
              <li><a href="#">Office Hours</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#"><span class="glyphicon glyphicon-user"></span>Contact</a></li>
              <li><a href="#"><span class="glyphicon glyphicon-log-in"></span>Logout</a></li>
            </ul>
          </div>
        </nav>
        <div id="calendarSelectors" class="container">
            Employee: 
            <select id="employeePicker" class="selectpicker">
                <option value="blank"></option>
                <optgroup label="Dentist">
                    <option value="dr1">Dr. Meyer</option>
                    <option value="dr2">Dr. Behrens</option>
                    <option value="dr3">Dr. Porzio</option>
                </optgroup>
                <optgroup label="Hygienist">
                    <option value="DH1">Ms. Butterbaugh</option>
                    <option value="DH2">Mr. Lee</option>
                </optgroup>
            </select>
            Appointment Date: 
            <input id="date" type="date" name="appt">
            <div onclick="findAppointments()" id="findAppt" class="btn btn-lg btn-primary">See Appointments</div>
        </div>
        <h2 id="displayInfo"></h2>
        <div id="calendar" class="container">
            <table id="calendarTable" class="table">
            </table>
        </div>
    </body>
</html>
