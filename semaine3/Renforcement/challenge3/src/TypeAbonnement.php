<?php
class TypeAbonnement {
    public $nom;
    public $prix;
    public $seances;

    public function __construct($nom, $prix, $seances) {
        $this->nom = $nom;
        $this->prix = $prix;
        $this->seances = $seances;
    }
}