<?php
    $mysqli = mysqli_connect("localhost", "user", "password", "JEMDental");

    if ($mysqli->connect_errno) {
        echo 'Cannot connect to server';
    }

    $username = $_POST['username'];
    $employee = $_POST['employee'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $notes = $_POST['notes'];

    $sql = "INSERT INTO `Calendar` (`username`, `employee`, `date`, `time`, `appointmentnotes`) VALUES ('$username', '$employee', '$date', '$time', '$notes')";

    mysqli_query($mysqli, $sql);

    mysqli_close($mysqli);
?>