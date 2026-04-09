<?php
require_once "Vehicule.php";

class Scooter extends Vehicule {
    public function calculerCoutMission($km) {
        return $km * 0.15;
    }
}