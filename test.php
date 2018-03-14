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
$number = $_GET['number'];
$type = $_GET['type'];
$car_space=0;
$bike_space=0;
$car_slot=0;
$bike_slot=0;
$count=1;
$status="";
$tower="";
$slot_number=0;
$res = Array();
date_default_timezone_set('Asia/Kolkata');
$date = date('d-m-Y H:i');

$sql1 = "SELECT * FROM company_details WHERE company_name = '$name'";
$result = $conn->query($sql1);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		$car_space = $row['car_space'];
		$bike_space = $row['bike_space'];
		$car_slot = $row['car_slot'];
		$bike_slot = $row['bike_slot'];
		$slot_number = $row['slot_number'];
		$tower = $row['tower_name'];
    }
} 

if(($type=="car" || $type=="Car"))
{

	if($car_space>=1)
	{
		$sql2 = "UPDATE company_details SET car_space = car_space-1,car_slot = car_slot+1 WHERE company_name='$name'";
		if($conn->query($sql2)===TRUE)
		{
			$count=1;
			$car_slot+=1;
			$slot_number=$car_slot."CR";
			$status = "Car parking status updated.";
		}
		else
		{
			$count=0;
			$status = "Car parking status update failed.";
		}

	}
	else
	{
		$status=1;
		$count=0;
		$status = "Car parking slot full.";
	}
}
else if($type=="bike" || $type=="Bike")
{

	if($bike_space>=1)
	{
		$sql3 = "UPDATE company_details SET bike_space = bike_space-1,bike_slot = bike_slot+1 WHERE company_name='$name'";
		if($conn->query($sql3)===TRUE)
		{
			$count=1;
			$bike_slot+=1;
			$slot_number=$bike_slot."BK";
			$status = "Bike parking status updated.";
		}
		else
		{
			$count=0;
			$status = "Bike parking status not updated.";
		}
	}
	else
	{
		$status=1;
		$count=0;
		$status = "Bike slot full.";
	}
}



if($count==1)
{
$sql = "INSERT INTO park_details (v_type,v_number,company_name,slot_number) VALUES ('$type','$number','$name','$slot_number')";
if($conn->query($sql)===TRUE)
{
	$res[]= array('post' => "success",'status'=>$status,'slot_number'=>$slot_number,'tower'=>$tower,'company_name'=>$name,'v_number'=>$number);
}
else
{
	$res[] = array('post' => "failure",'status'=>$status,'slot_number'=>$slot_number,'tower'=>$tower,'company_name'=>$name,'v_number'=>$number);
}
}
else
{
	$res[] = array('post' => "full",'status'=>$status,'slot_number'=>'full','tower'=>'full','company_name'=>'full','v_number'=>'full');	
}
echo json_encode(array('posts' =>$res));
$conn->close();
?> 
