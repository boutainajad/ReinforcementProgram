<?php

require_once "Document.php";

class RapportMensuel extends Document {
    public $mois;
    public $annee;
    public $kpis;

    public function __construct($id, $titre, $auteur, $mois, $annee, $kpis) {
        parent::__construct($id, $titre, $auteur);
        $this->mois = $mois;
        $this->annee = $annee;
        $this->kpis = $kpis;
    }

    public function genererResume() {
        return "Rapport $this->mois/$this->annee - KPIs: " . count($this->kpis);
    }
}