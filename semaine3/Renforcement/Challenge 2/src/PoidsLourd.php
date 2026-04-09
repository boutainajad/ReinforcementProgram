<?php
require_once "Vehicule.php";

class PoidsLourd extends Vehicule {
    public function calculerCoutMission($km) {
        return $km * 0.85 + 50;
    }
}