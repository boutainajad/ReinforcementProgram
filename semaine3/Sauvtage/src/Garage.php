<?php 
require_once "Voiture.php";

class Garage {
    public $voitures = [];
    public $capacite;

    public function __construct($capacite) {
        $this->capacite = $capacite;
    }

    public function ajouterVoiture($v) {
        if (count($this->voitures) < $this->capacite) {
            $this->voitures[] = $v;
        }
    }

    public function calculerValeurTotale() {
        $total = 0;
        foreach ($this->voitures as $v) {
            $total += $v->estimerValeur();
        }
        return $total;
    }
}