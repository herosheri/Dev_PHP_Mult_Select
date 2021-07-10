<?php
include('../models/fiche_model.php');

if(isset($_POST["fiche_id"]))
{
	$image = get_image_name($_POST["fiche_id"]);
	if($image != '')
	{
		unlink("../../upload/" . $image);
	}
	$statement = $connection->prepare(
		"DELETE FROM fiches WHERE id_fiche = :id_fiche"
	);
	$result = $statement->execute(
		array(
			':id_fiche'	=>	$_POST["fiche_id"]
		)
	);
	
	if(!empty($result))
	{
		echo 'Suppression reuissi';
	}
}



?>