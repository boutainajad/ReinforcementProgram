<?php
require_once "../src/Garage.php";

$g = new Garage(2);

$v1 = new Voiture("BMW", "X5", 2018, "Noire", 80000);
$v2 = new Voiture("Dacia", "Logan", 2022, "Blanche", 20000);

$g->ajouterVoiture($v1);
$g->ajouterVoiture($v2);

echo $g->calculerValeurTotale();