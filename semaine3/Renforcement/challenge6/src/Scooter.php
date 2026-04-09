<?php
require_once "VehiculeLivraison.php";

class Scooter extends VehiculeLivraison {
    public function calculerCout($distance, $poids) {
        return $distance * 0.20;
    }

    public function getTypeLabel() {
        return "Scooter";
    }
}