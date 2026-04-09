<?php

abstract class VehiculeLivraison {
    public $immatriculation;
    public $conducteur;
    public $capacite;

    public function __construct($i, $c, $cap) {
        $this->immatriculation = $i;
        $this->conducteur = $c;
        $this->capacite = $cap;
    }

    abstract public function calculerCout($distance, $poids);
    abstract public function getTypeLabel();
}