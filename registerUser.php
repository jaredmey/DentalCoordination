<?php
    if (isset($_POST['submit'])) {

        $mysqli = mysqli_connect("localhost", "user", "password", "JEMDental");

        if ($mysqli->connect_errno) {
            echo 'Cannot connect to server';
        }

        $Email = $_POST['email'];
        $Name = $_POST['name'];
        $Username = $_POST['username'];
        $Password = $_POST['password'];

        $sql = "INSERT INTO `Users` (`Name`, `Email`, `Username`, `Password`) VALUES ('$Name', '$Email', '$Username', '$Password')";

        mysqli_query($mysqli, $sql);

        mysqli_close($mysqli);

        header('Location: login.html');
    }
?>