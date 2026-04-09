<?php

require_once "Document.php";

class Facture extends Document {
    public $numero;
    public $client;
    public $montant;
    public $tva;

    public function __construct($id, $titre, $auteur, $numero, $client, $montant, $tva) {
        parent::__construct($id, $titre, $auteur);
        $this->numero = $numero;
        $this->client = $client;
        $this->montant = $montant;
        $this->tva = $tva;
    }

    public function genererResume() {
        $total = $this->montant + ($this->montant * $this->tva);
        return "Facture $this->numero - Total: $total";
    }
}