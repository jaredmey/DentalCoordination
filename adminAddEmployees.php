<?php
    $mysqli = mysqli_connect("localhost", "user", "password", "JEMDental");

    if ($mysqli->connect_errno) {
        echo 'Cannot connect to server';
    }

    $name = $_POST['name'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $usertype = $_POST['usertype'];

    $sql = "INSERT INTO `Users` (`Name`, `Username`, `Password`, `UserType`) VALUES ('$name', '$username', '$password', '$usertype')";

    mysqli_query($mysqli, $sql);

    mysqli_close($mysqli);
?>