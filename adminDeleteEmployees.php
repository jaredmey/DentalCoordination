<?php
    $mysqli = mysqli_connect("localhost", "user", "password", "JEMDental");

    if ($mysqli->connect_errno) {
        echo 'Cannot connect to server';
    }

    $employee = $_POST['employee'];

    $sql = "DELETE FROM `Users` WHERE Name = '$employee'";

    mysqli_query($mysqli, $sql);

    mysqli_close($mysqli);
?>