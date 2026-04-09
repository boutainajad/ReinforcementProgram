<?php
require_once "Notification.php";

class NotificationEmail extends Notification {
    public $email;
    public $pieceJointe;

    public function __construct($id, $dest, $sujet, $contenu, $email, $pieceJointe = null) {
        parent::__construct($id, $dest, $sujet, $contenu);
        $this->email = $email;
        $this->pieceJointe = $pieceJointe;
    }

    public function envoyer() {
        return "Email envoyé à $this->email : $this->sujet";
    }
}