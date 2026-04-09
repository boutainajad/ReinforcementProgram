<?php
class SalleSport {
    public $membres = [];

    public function ajouter($m) {
        $this->membres[] = $m;
    }

    public function enregistrerSeance($membre) {
        $membre->enregistrerSeance();
    }
}