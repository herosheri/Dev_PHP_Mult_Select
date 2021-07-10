<?php

include('../models/categorie_model.php');

$query = '';
$output = array();
$query .= "SELECT * FROM categories ";
if(isset($_POST["search"]["value"]))
{
	$query .= 'WHERE libele_cat LIKE "%'.$_POST["search"]["value"].'%" ';

	$query .= 'OR type LIKE "%'.$_POST["search"]["value"].'%" ';
	
	$query .= 'OR url LIKE "%'.$_POST["search"]["value"].'%" ';
	
	$query .= 'OR comment LIKE "%'.$_POST["search"]["value"].'%" ';
}


$statement = $connection->prepare($query);
$statement->execute();
$result = $statement->fetchAll();
$data = array();
$filtered_rows = $statement->rowCount();

foreach($result as $row)
{
	
	$sub_array = array();
	$sub_array[] = $row["libele_cat"];
	$sub_array[] = $row["type"];
	$sub_array[] = $row["url"];
	$sub_array[] = $row["comment"];

	$sub_array[] = '<button type="button" name="update" id="'.$row["id_cat"].'" class="btn btn-warning btn-xs update">Modifier</button>';

	$sub_array[] = '<button type="button" name="delete" id="'.$row["id_cat"].'" class="btn btn-danger btn-xs delete">Supprimer</button>';
	
	$data[] = $sub_array;
}
$output = array(
	"draw"				=>	intval($_POST["draw"]),
	"recordsTotal"		=> 	$filtered_rows,
	"recordsFiltered"	=>	get_total_all_records(),
	"data"				=>	$data
);
echo json_encode($output);
?>