<?php

require_once "Medicament.php";

class Pharmacie {
    public $stock = [];

    public function ajouterMedicament($m) {
        $this->stock[] = $m;
    }

    public function preparerOrdonnance($ordonnance) {
        foreach ($ordonnance->medicaments as $item) {
            [$nom, $qte] = $item;

            foreach ($this->stock as $med) {
                if ($med->nom == $nom) {
                    if ($med->stock < $qte) {
                        throw new Exception("Manque stock");
                    }
                }
            }
        }

        foreach ($ordonnance->medicaments as $item) {
            [$nom, $qte] = $item;

            foreach ($this->stock as $med) {
                if ($med->nom == $nom) {
                    $med->dispenser($qte);
                }
            }
        }
    }
}