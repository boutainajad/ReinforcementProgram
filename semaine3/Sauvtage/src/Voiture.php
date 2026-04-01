<?php
class Voiture {
    public $marque;
    public $modele;
    public $annee;
    public $couleur;
    public $kilometrage;

    public function __construct($marque, $modele, $annee, $couleur, $kilometrage) {
        $this->marque = $marque;
        $this->modele = $modele;
        $this->annee = $annee;
        $this->couleur = $couleur;
        $this->kilometrage = $kilometrage;
    }

    public function description() {
        return "$this->marque $this->modele ($this->annee) - $this->couleur - $this->kilometrage km";
    }

    public function rouler($km) {
        $this->kilometrage += $km;
    }

    public function calculerAge() {
        return date("Y") - $this->annee;
    }

    public function estimerValeur() {
        return 50000; 
    }
}