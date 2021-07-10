<?php

include('../models/fiche_model.php');

if(isset($_POST["fiche_id"]))
{
	$output = array();
	$statement = $connection->prepare(
		"SELECT * FROM fiches WHERE id_fiche = '".$_POST["fiche_id"]."' LIMIT 1"
	);
	$statement->execute();
	$result = $statement->fetchAll();
	foreach($result as $row)
	{
		$output["ref_cat"] = $row["ref_cat"];
		$output["libelle"] = $row["libelle"];
		$output["description"] = $row["description"];
		if($row["image"] != '')
		{
			$output['fiche_image'] = '<img src="../../upload/'.$row["image"].'" class="img-thumbnail" width="50" height="35" /><input type="hidden" name="hidden_fiche_image" value="'.$row["image"].'" />';
		}
		else
		{
			$output['fiche_image'] = '<input type="hidden" name="hidden_fiche_image" value="" />';
		}
	}
	echo json_encode($output);
}
?>