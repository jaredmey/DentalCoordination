<?php
    $mysqli = mysqli_connect("localhost", "user", "password", "JEMDental");

    if ($mysqli->connect_errno) {
        echo 'Cannot connect to server';
    }

    $sql = "SELECT DISTINCT Name FROM `Users` WHERE UserType = 1 OR UserType = 2";

    $result = mysqli_query($mysqli, $sql);
    $data = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    
    echo json_encode($data);

    mysqli_close($mysqli);  
?>