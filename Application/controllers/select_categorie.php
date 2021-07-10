<?php

include('../models/categorie_model.php');

//SELECT CATEGORIE
$con = mysqli_connect("localhost", "root", "", "dbtestherilalainajaonas189558com");
$query = "SELECT * FROM categories";
