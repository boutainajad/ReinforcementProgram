<?php
 "VehiculeLivraison.php";

class Velo extends VehiculeLivraison {
    public $electrique;

    public function __construct($i, $c, $cap, $electrique) {
        parent::__construct($i, $c, $cap);
        $this->electrique = $electrique;
    }

    public function calculerCout($distance, $poids) {
        return $distance * 0.05;
    }

    public function getTypeLabel() {
        return "Velo";
    }
}