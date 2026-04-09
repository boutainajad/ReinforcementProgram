<?php
require_once "VehiculeLivraison.php";

class PoidsLourd extends VehiculeLivraison {
    public $adr;

    public function __construct($i, $c, $cap, $adr) {
        parent::__construct($i, $c, $cap);
        $this->adr = $adr;
    }

    public function calculerCout($distance, $poids) {
        $cout = ($distance * 0.90) + ($poids * 0.02);

        if ($this->adr) {
            $cout += 100;
        }

        return $cout;
    }

    public function getTypeLabel() {
        return "Poids Lourd";
    }
}