<?php

include('../models/categorie_model.php');

if(isset($_POST["operation"]))
{
	
	if($_POST["operation"] == "Ajoût")
	{
		
		$statement = $connection->prepare("
			INSERT INTO categories (libele_cat, type, url, comment) 
			VALUES (:libele_cat, :type, :url, :comment)
		");
		$result = $statement->execute(
			array(
				':libele_cat'	=>	$_POST["libele_cat"],
				':type'	=>	$_POST["type"],
				':url'	=>	$_POST["url"],
				':comment'	=>	$_POST["comment"]
			)
		);
		if(!empty($result))
		{
			echo 'Insertion reuissi';
		}
	}

	if($_POST["operation"] == "Modifier")
	{
		
		$statement = $connection->prepare(
			"UPDATE categories 
			SET libele_cat = :libele_cat, type = :type, url = :url, comment = :comment  
			WHERE id_cat = :id_cat
			"
		);
		$result = $statement->execute(
			array(
				':libele_cat' => $_POST["libele_cat"],
				':type'	=>	$_POST["type"],
				':url'	=>	$_POST["url"],
				':comment'	=>	$_POST["comment"],
				':id_cat' =>	$_POST["categorie_id"]
			)
		);
		if(!empty($result))
		{
			echo 'Modification reuissi';
		}
	}
}

?>