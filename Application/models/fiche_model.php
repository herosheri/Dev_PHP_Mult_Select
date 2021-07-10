<?php
include('../config/db.php');

function upload_image()
{
 if(isset($_FILES["fiche_image"]))
 {
  $extension = explode('.', $_FILES['fiche_image']['name']);
  $new_name = rand() . '.' . $extension[1];
  $destination = '../../upload/' . $new_name;
  move_uploaded_file($_FILES['fiche_image']['tmp_name'], $destination);
  return $new_name;
 }
}

function get_image_name($fiche_id)
{
 include('../config/db.php');
 $statement = $connection->prepare("SELECT image FROM fiches WHERE id_fiche = '$fiche_id'");
 $statement->execute();
 $result = $statement->fetchAll();
 foreach($result as $row)
 {
  return $row["image"];
 }
}

function get_total_all_records()
{
 include('../config/db.php');
 $statement = $connection->prepare("SELECT * FROM fiches");
 $statement->execute();
 $result = $statement->fetchAll();
 return $statement->rowCount();
}

?>
   