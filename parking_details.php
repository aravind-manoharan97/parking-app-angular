<?php
$servername = "localhost";
$username = "phpmyadmin";
$password = "12345";
$dbname = "btc";
$conn = new mysqli($servername, $username, $password, $dbname);


header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');    
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

$id = $_GET['id'];
$type = $_GET['type'];
$c_name = $_GET['name'];
$c_price = $_GET['price'];
$status='';

if($type=="get")
{
	$sql = "SELECT * FROM coins ORDER BY id DESC";
	$result = $conn->query($sql);
	$res = Array();
	if ($result->num_rows > 0) {
	    while($row = $result->fetch_assoc()) {
				$res[] = $row;
	    }
	} else {
	    echo "0 results";
	}
	echo json_encode(array('posts' =>$res));
}
else if($type=="add")
{
	$sql = "INSERT INTO coins (coin_name,coin_price) VALUES ('$c_name','$c_price')";
	if($conn->query($sql)===TRUE)
	{
		$status = "true";
	}
	else
	{
		$status = "false";
	}
	$res[] = array('status'=>$status);
	echo json_encode(array('posts' =>$res));
}
else if($type=="delete")
{
	$sql = "DELETE FROM coins WHERE id = '$id'";
	if($conn->query($sql)===TRUE)
	{
		$status = "true";
	}
	else
	{
		$status = "false";
	}
	$res[] = array('status'=>$status);
	echo json_encode(array('posts' =>$res));
}
else if($type=='update')
{
	$sql = "UPDATE coins SET coin_name = '$c_name',coin_price = '$c_price' WHERE id='$id'";
	if($conn->query($sql)===TRUE)
	{
		$status = "true";
	}
	else
	{
		$status = "false";
	}
	$res[] = array('status'=>$status);
	echo json_encode(array('posts' =>$res));
}




?>