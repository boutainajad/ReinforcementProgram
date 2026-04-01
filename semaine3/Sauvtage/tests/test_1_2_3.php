<?php

require_once "../src/Voiture.php";

$v = new Voiture("Toyota", "Corolla", 2020, "Bleue", 40000);

echo $v->description();