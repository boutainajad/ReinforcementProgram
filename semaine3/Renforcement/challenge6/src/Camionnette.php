<?php

require_once "VehiculeLivraison.php";

class Camionnette extends VehiculeLivraison {
    public function calculerCout($distance, $poids) {
        return ($distance * 0.40) + ($poids * 0.01);
    }

    public function getTypeLabel() {
        return "Camionnette";
    }
}