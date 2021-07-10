<?php
include('../models/categorie_model.php');

if(isset($_POST["categorie_id"]))
{
	
	$statement = $connection->prepare(
		"DELETE FROM categories WHERE id_cat = :id"
	);
	$result = $statement->execute(
		array(
			':id'	=>	$_POST["categorie_id"]
		)
	);
	
	if(!empty($result))
	{
		echo 'Suppression reuissi';
	}
}
