<?php
$servername = "localhost";
$username = "phpmyadmin";
$password = "12345";
$dbname = "parking";

$conn = new mysqli($servername, $username, $password, $dbname);

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');    
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

$status = "false";
$id  = $_GET['id'];
$res = Array();

$sql = "SELECT * FROM park_details ORDER BY id DESC ";
$result = $conn->query($sql);
$res = Array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
	$res[] = $row;
    }
}

echo json_encode(array('results' => $res));
$conn->close();
?> 
