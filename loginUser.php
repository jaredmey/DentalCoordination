<?php
if (isset($_POST['submit'])) {
    
    $mysqli = mysqli_connect("localhost", "user", "password", "JEMDental");
    
    if ($mysqli->connect_errno) {
        echo 'Cannot connect to server';
    }
    
    $Username = $_POST['username'];
    $Password = $_POST['password'];
    
    $sql = mysqli_query($mysqli, "SELECT Username FROM Users WHERE Username='$Username'");
    
    //checks if username exists in database
    if (mysqli_num_rows($sql) != 0) {
        
        $sql = mysqli_query($mysqli, "SELECT Username FROM Users WHERE Username='$Username' AND Password='$Password'");
        
        //if username exists, verifies password is correct
        if (mysqli_num_rows($sql) != 0) 
        {
            header('Location: calendar.html');
            
        } else {
            echo 'Password is incorrect for given username, please try again.';
        }
    }
    else 
    {
        echo 'Username does not exist in database, please try again.';
        //$message = "Username and/or Password incorrect.\\nTry again.";
        //echo "<script type='text/javascript'>alert('$message');</script>";
    }
    
    mysqli_close($mysqli);
}
?>