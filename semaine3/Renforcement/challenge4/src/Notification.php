<?php

abstract class Notification {
    public $id;
    public $destinataire;
    public $sujet;
    public $contenu;
    public $date;

    public function __construct($id, $destinataire, $sujet, $contenu) {
        $this->id = $id;
        $this->destinataire = $destinataire;
        $this->sujet = $sujet;
        $this->contenu = $contenu;
        $this->date = date("Y-m-d H:i:s");
    }

    abstract public function envoyer();
}