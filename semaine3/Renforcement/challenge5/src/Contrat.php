<?php
require_once "Document.php";

class Contrat extends Document {
    public $type;
    public $salaire;

    public function __construct($id, $titre, $auteur, $type, $salaire) {
        parent::__construct($id, $titre, $auteur);
        $this->type = $type;
        $this->salaire = $salaire;
    }

    public function genererResume() {
        return "Contrat $this->type - Salaire: $this->salaire";
    }
}