<?php
class Ordonnance {
    public $medicaments = [];

    public function ajouterMedicament($nom, $quantite) {
        $this->medicaments[] = [$nom, $quantite];
    }
}