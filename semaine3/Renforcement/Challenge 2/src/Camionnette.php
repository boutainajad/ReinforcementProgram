<?php
require_once "Vehicule.php";

class Camionnette extends Vehicule {
    public function calculerCoutMission($km) {
        return $km * 0.45;
    }
}