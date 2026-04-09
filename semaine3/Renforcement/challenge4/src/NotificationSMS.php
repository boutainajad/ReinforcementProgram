<?php

require_once "Notification.php";

class NotificationSMS extends Notification {
    public $telephone;

    public function __construct($id, $dest, $sujet, $contenu, $telephone) {
        parent::__construct($id, $dest, $sujet, substr($contenu, 0, 160));
        $this->telephone = $telephone;
    }

    public function envoyer() {
        return "SMS envoyé à $this->telephone : $this->contenu";
    }
}