<?php 
class Medicament {
    public $nom;
    public $prix;
    public $stock;
    public $ordonnance;

    public function __construct($nom, $prix, $stock, $ordonnance) {
        if ($prix <= 0) throw new Exception("Prix invalide");
        if ($stock < 0) throw new Exception("Stock invalide");

        $this->nom = $nom;
        $this->prix = $prix;
        $this->stock = $stock;
        $this->ordonnance = $ordonnance;
    }

    public function estPerime() {
        return false;
    }

    public function dispenser($qte) {
        if ($qte > $this->stock) {
            throw new Exception("Stock insuffisant");
        }
        $this->stock -= $qte;
    }
}