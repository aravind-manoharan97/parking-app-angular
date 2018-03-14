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

$sql = "DELETE FROM park_details WHERE id = $id";
if($conn->query($sql))
{
	$status = "true";
}
else
{
	$status = "false";
}
$res[] = array('status'=>$status);
echo json_encode(array('results' => $res));
$conn->close();
?> 
