<?php
class NotificationService {
    public $notifications = [];
    public $envoyees = [];

    public function ajouter($n) {
        $this->notifications[] = $n;
    }

    public function envoyerToutes() {
        foreach ($this->notifications as $n) {
            $this->envoyees[] = $n->envoyer();
        }
    }

    public function filtrerParType($type) {
        $result = [];

        foreach ($this->notifications as $n) {
            if ($n instanceof $type) {
                $result[] = $n;
            }
        }

        return $result;
    }

    public function envoyerPourDestinataire($dest) {
        foreach ($this->notifications as $n) {
            if ($n->destinataire == $dest) {
                $this->envoyees[] = $n->envoyer();
            }
        }
    }

    public function resumer() {
        $stats = [
            "email" => 0,
            "sms" => 0,
            "push" => 0,
            "total_envoyees" => count($this->envoyees)
        ];

        foreach ($this->notifications as $n) {
            if ($n instanceof NotificationEmail) $stats["email"]++;
            if ($n instanceof NotificationSMS) $stats["sms"]++;
            if ($n instanceof NotificationPush) $stats["push"]++;
        }

        return $stats;
    }
}