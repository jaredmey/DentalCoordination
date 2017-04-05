<?php
    $mysqli = mysqli_connect("localhost", "user", "password", "JEMDental");

    if ($mysqli->connect_errno) {
        echo 'Cannot connect to server';
    }
    
    $employee = $_POST['employee'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    
    $sql = "DELETE FROM `Calendar` WHERE Employee = '$employee' AND Date = '$date' AND Time = '$time'";

    mysqli_query($mysqli, $sql);

    mysqli_close($mysqli);
?>