<?php
require 'vendor/autoload.php';
$connectionParams = array(
    'dbname' => 'plus91',
    'user' => 'root',
    'password' => 'root',
    'host' => 'localhost',
    'driver' => 'mysqli',
);
$conn = \Doctrine\DBAL\DriverManager::getConnection($connectionParams);



if($_POST['action'] == 'savePatient'){
	$data = array();
	$data['name'] = $_POST['name'];
	$data['age'] = $_POST['age'];
	$data['dob'] = date('Y-m-d',strtotime($_POST['dob']));
	$data['blood_group'] = $_POST['blood_group'];
	$data['city'] = $_POST['city'];
	$data['state'] = $_POST['state'];
	$data['country'] = $_POST['country'];
	
	$return = array();
	if(empty($_POST['patient_id'])){
		$data['created_at'] = date('Y-m-d H:i:s');
		$data['modified_at'] = date('Y-m-d H:i:s');
		if($conn->insert('patients', $data)){
			$return['s'] = 1;
			$return['m'] = 'Patient saved successfully';
		}else{
			$return['s'] = 0;
			$return['m'] = 'Could not save';
		}
	}else{
		$data['modified_at'] = date('Y-m-d H:i:s');
		if($conn->update('patients', $data, array('patient_id' => $_POST['patient_id']))){
			$return['s'] = 1;
			$return['m'] = 'Patient updated successfully';
		}else{
			$return['s'] = 0;
			$return['m'] = 'Could not update';
		}
	}
	echo json_encode($return);die();
}

if($_POST['action'] == "getPatientList"){
	$sql = "SELECT * FROM patients ORDER BY patient_id DESC";
	$stmt = $conn->prepare($sql);
	$resultSet = $stmt->executeQuery();
	$patients = array();
	if($patients = $resultSet->fetchAllAssociative()){
		$return['s'] = 1;
		$return['m'] = 'Patients list';
		$return['d'] = $patients;
	}else{
		$return['s'] = 0;
		$return['m'] = 'Could not find';
		$return['d'] = $patients;
	}
	echo json_encode($return);die();
}

if($_POST['action'] == 'deletePatient'){
	if($conn->delete('patients', array('patient_id' => $_POST['patient_id']))){
		$return['s'] = 1;
		$return['m'] = 'Patients deleted successfully';
	}else{
		$return['s'] = 0;
		$return['m'] = 'Could not delete';
	}
	echo json_encode($return);die();
}

if($_POST['action'] == 'getPatientDetail'){
	$resultSet = $conn->executeQuery('SELECT * FROM patients WHERE patient_id = ?', array($_POST['patient_id']));
	$patient = $resultSet->fetchAssociative();
	if($patient){
		$return['s'] = 1;
		$return['m'] = 'Patient Details';
		$return['d'] = $patient;
	}else{
		$return['s'] = 0;
		$return['m'] = 'Could not find';
		$return['d'] = array();
	}
	echo json_encode($return);die();
}

?>