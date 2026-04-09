<?php
require_once "Notification.php";

class NotificationPush extends Notification {
    public $token;
    public $icone;

    public function __construct($id, $dest, $sujet, $contenu, $token, $icone) {
        parent::__construct($id, $dest, $sujet, $contenu);
        $this->token = $token;
        $this->icone = $icone;
    }

    public function envoyer() {
        return "Push envoyé à device $this->token : $this->sujet";
    }
}