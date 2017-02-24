<?php
if (isset($_POST['submit'])) {
    
    $con = mysql_connect("localhost", "root", "twister123");
    if (!$con) {
        die("Can not connect: " . mysql_error());
    }
    
    mysql_select_db("JEMDental", $con);
    
    $Email = $_POST['email'];
    $Name = $_POST['name'];
    $Username = $_POST['username'];
    $Password = $_POST['password'];
    
    $sql = "INSERT INTO users (email, name, username, password) VALUES ('$Email', '$Name', '$Username', '$Password')";
    
    mysql_query($sql, $con);
    
    mysql_close($con);
}
?>