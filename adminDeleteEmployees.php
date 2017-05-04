<?php
    $mysqli = mysqli_connect("localhost", "user", "password", "JEMDental");

    if ($mysqli->connect_errno) {
        echo 'Cannot connect to server';
    }

    $employee = $_POST['employee'];

    $sql1 = "DELETE FROM `Users` WHERE Name = '$employee'";
    $sql2 = "DELETE FROM `Calendar` WHERE Employee = '$employee'";

    mysqli_query($mysqli, $sql1);
    mysqli_query($mysqli, $sql2);

    mysqli_close($mysqli);
?>