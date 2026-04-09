<?php
abstract class Document {
    public $id;
    public $titre;
    public $auteur;
    public $date;
    public $statut;

    public function __construct($id, $titre, $auteur) {
        $this->id = $id;
        $this->titre = $titre;
        $this->auteur = $auteur;
        $this->date = date("Y-m-d");
        $this->statut = "brouillon";
    }

    public function changerStatut($nouveau) {
        $valide = false;

        if ($this->statut == "brouillon" && $nouveau == "soumis") $valide = true;
        if ($this->statut == "soumis" && ($nouveau == "validé" || $nouveau == "rejeté")) $valide = true;
        if ($this->statut == "validé" && $nouveau == "archivé") $valide = true;

        if (!$valide) {
            throw new Exception("Transition interdite");
        }

        $this->statut = $nouveau;
    }

    abstract public function genererResume();
}