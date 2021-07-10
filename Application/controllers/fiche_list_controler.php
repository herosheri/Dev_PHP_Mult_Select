<?php

include('../models/fiche_model.php');

$query = '';
$output = array();
//$query = "SELECT * FROM fiches ";
$query .= "SELECT id_fiche, ref_cat, libelle, description, id_cat, libele_cat, image  FROM fiches, categories WHERE  fiches.ref_cat = categories.id_cat";
$statement = $connection->prepare($query);
$statement->execute();
$result = $statement->fetchAll();

$data = array();
$filtered_rows = $statement->rowCount();
foreach($result as $row)
{
	$image = '';
	if($row["image"] != '')
	{
		$image = '<img src="../../upload/'.$row["image"].'" class="img-thumbnail" width="50" height="35" />';
	}
	else
	{
		$image = '';
	}
	$sub_array = array();
	$sub_array[] = $row["libelle"];
	$sub_array[] = $row["libele_cat"];
	$sub_array[] = $row["description"];
	$sub_array[] = $image;

	$sub_array[] = '<button type="button" name="update" id="'.$row["id_fiche"].'" class="btn btn-warning btn-xs update">Modifier</button>';

	$sub_array[] = '<button type="button" name="delete" id="'.$row["id_fiche"].'" class="btn btn-danger btn-xs delete">Supprimer</button>';
	
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