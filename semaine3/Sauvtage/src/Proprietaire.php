<?php

class Proprietaire {
    public $nom;
    public $prenom;
    public $age;
    public $permis;

    public function __construct($nom, $prenom, $age, $permis) {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->age = $age;
        $this->permis = $permis;
    }
}