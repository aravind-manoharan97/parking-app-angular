<?php
$servername = "localhost";
$username = "phpmyadmin";
$password = "12345";
$dbname = "parking";
$conn = new mysqli($servername, $username, $password, $dbname);


header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');    
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

$company_name = $_GET['company_name'];
$tower_name = $_GET['tower_name'];
$car_space = $_GET['car_space'];
$bike_space = $_GET['bike_space'];
$id = $_GET['id'];
$type = $_GET['type'];

//echo $id."------".$type.'------';


$status = "";

$res = Array();

if($type=="add")
{
	$sql = "INSERT INTO company_details (company_name, tower_name, car_space,bike_space,car_slot,bike_slot)		
		VALUES ('$company_name','$tower_name','$car_space','$bike_space',0,0)";
	if ($conn->query($sql) === TRUE) {
    	$status="true";
	} else {
    	$status="false";
	}
}
else if($type=="save")
{
	$sql1 = "UPDATE company_details SET company_name = '$company_name',tower_name = '$tower_name',car_space = '$car_space',bike_space = '$bike_space' WHERE id = $id;";
	if ($conn->query($sql1) === TRUE) {
    	$status="true";
	} else {
    	$status="false";	
	}
}
else if($type=="delete")
{	
	$sql2 = "DELETE FROM company_details WHERE id = $id";
	if ($conn->query($sql2) === TRUE) {
    	$status="true";
	} else {
    	$status="false";
	}
}

	
$res[] = array('status'=>$status);
echo json_encode(array('posts' =>$res));
$conn->close();
?> 
