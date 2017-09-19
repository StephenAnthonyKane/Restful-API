<?php
/*
  Sources:
  https://www.leaseweb.com/labs/2015/10/creating-a-simple-rest-api-in-php/
  https://www.tutorialspoint.com/json/json_php_example.htm
  https://www.w3schools.com/js/js_json_php.asp
*/


    header("Content-Type: application/json; charset=UTF-8");


$method = $_SERVER['REQUEST_METHOD'];
// Create connection
$conn = new mysqli('localhost', 'root', '','assignment5');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";

switch ($method) {
  case 'GET':
    $obj = json_decode($_GET["x"], false);

    if($obj->ID!='-'){

      $sql = "SELECT * FROM ".$obj->table." WHERE ID=".$obj->ID;
      //echo $sql;
      break;
    }else{
      $sql = "SELECT * FROM ".$obj->table." WHERE name='".$obj->name."'";
      //echo $sql;
      break;
      //echo $sql;
    }

  case 'PUT':
    //parse_str(file_get_contents("php://input"),$obj);
    $obj = JSON_decode($_GET["x"], false);
    if($obj->name != '-'){
        $sql = "update ".$obj->table." set name='".$obj->name."' where ID=".$obj->ID; break;
    }else if($obj->URL != '-'){
        $sql = "update ".$obj->table." set URL='".$obj->URL."' where ID=".$obj->ID; break;
    }else if($obj->theDesc != '-'){
        $sql = "update ".$obj->table." set URL='".$obj->theDesc."' where ID=".$obj->theDesc; break;
    }


  case 'POST':
    $obj = json_decode($_POST["x"],false);
    //$obj =json_encode($ob);
    $sql = "insert into ".$obj->table." (`ID`, `theDate`, `name`, `URL`, `theDesc`) VALUES ('NULL',CURDATE(),'".$obj->name."','".$obj->URL."','".$obj->theDesc."');" ; break;


  case 'DELETE':
    $obj = json_decode($_GET["x"], false);
    $sql = "delete FROM ".$obj->table." where id=".$obj->ID;
     break;
}

if($method=='POST'){
    if ($conn->query($sql) === TRUE) {
        echo json_encode("New record created successfully");
    } else {
        echo json_encode("Error: " . $sql . "<br>" . $conn->error);
    }
}else if($method=='GET'){

  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
          echo json_encode("ID: " . $row["ID"]. " - Name: " . $row["name"]. " - theDate: " . $row["theDate"]. " - URL: " . $row["URL"]. " - theDesc: " . $row["theDesc"]) ;
      }
  } else {
      echo json_encode("0 results");
  }



}else if($method=='PUT'){
     if ($conn->query($sql) === TRUE) {
            echo json_encode("updated successfully");
     } else {
            echo json_encode("Error: " . $sql . "<br>" . $conn->error);
     }
}else if($method=='DELETE'){
  if ($conn->query($sql) === TRUE) {
    echo json_encode("Record deleted successfully");
} else {
    echo json_encode("Error deleting record: " . $conn->error);
}
}

$conn->close();
?>
