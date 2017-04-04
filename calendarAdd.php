<?php
    $mysqli = mysqli_connect("localhost", "user", "password", "JEMDental");

    if ($mysqli->connect_errno) {
        echo 'Cannot connect to server';
    }

    $username = mysqli_real_escape_string($mysqli, $_GET['username']);
    $employee = mysqli_real_escape_string($mysqli, $_GET['employee']);
    $date = mysqli_real_escape_string($mysqli, $_GET['date']);
    $time = mysqli_real_escape_string($mysqli, $_GET['time']);
    $notes = mysqli_real_escape_string($mysqli, $_GET['notes']);

    $sql = "INSERT INTO `Calendar` (`username`, `employee`, `date`, `time`, `appointmentnotes`) VALUES ('$username', '$employee', '$date', '$time', '$notes')";

    mysqli_query($mysqli, $sql);

    mysqli_close($mysqli);
?>