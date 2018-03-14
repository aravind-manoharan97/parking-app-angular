
<?php
$servername = "localhost";
$username = "phpmyadmin";
$password = "12345";
$dbname = "parking";

$conn = new mysqli($servername, $username, $password, $dbname);

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');    
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

$name = $_GET['name'];

$sql = "SELECT * FROM company_details WHERE company_name = '$name'";
$result = $conn->query($sql);
$res = Array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
	$res[] = $row;
    }
} else {}
echo json_encode(array('results' => $res));
$conn->close();
?> 

