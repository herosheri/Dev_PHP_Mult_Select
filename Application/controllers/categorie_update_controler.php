<?php

include('../models/categorie_model.php');

if(isset($_POST["categorie_id"]))
{
	$output = array();
	$statement = $connection->prepare(
		"SELECT * FROM categories 
		WHERE id_cat = '".$_POST["categorie_id"]."' 
		LIMIT 1"
	);
	$statement->execute();
	$result = $statement->fetchAll();
	foreach($result as $row)
	{
		$output["libele_cat"] = $row["libele_cat"];
		$output["type"] = $row["type"];
		$output["url"] = $row["url"];
		$output["comment"] = $row["comment"];
	}
	echo json_encode($output);
}
?>