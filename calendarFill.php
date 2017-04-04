<?php
    $mysqli = mysqli_connect("localhost", "user", "password", "JEMDental");

    if ($mysqli->connect_errno) {
        echo 'Cannot connect to server';
    }

    $employee = $_POST['employee'];
    $date = $_POST['date'];

    $sql = "SELECT * FROM `Calendar` WHERE Employee = '$employee' AND Date = '$date'";

    $result = mysqli_query($mysqli, $sql);
    $data = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    
    echo json_encode($data);

    mysqli_close($mysqli);  
?>