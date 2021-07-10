<?php

include('../config/db.php');

//SELECT CATEGORIE POUR LE DATA TABLE
function get_total_all_records()
{
    include('../config/db.php');
    $statement = $connection->prepare("SELECT * FROM categories");
    $statement->execute();
    $result = $statement->fetchAll();
    return $statement->rowCount();
}
