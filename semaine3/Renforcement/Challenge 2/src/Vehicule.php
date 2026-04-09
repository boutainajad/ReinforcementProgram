<?php
abstract class Vehicule {
    public $immatriculation;
    public $marque;
    public $km;

    public function __construct($i, $m, $km) {
        $this->immatriculation = $i;
        $this->marque = $m;
        $this->km = $km;
    }

    abstract public function calculerCoutMission($km);
}