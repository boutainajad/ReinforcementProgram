<?php 
class Membre {
    public $nom;
    public $abonnement;
    public $seancesRestantes;

    public function __construct($nom, $abonnement) {
        $this->nom = $nom;
        $this->abonnement = $abonnement;
        $this->seancesRestantes = $abonnement->seances;
    }

    public function enregistrerSeance() {
        if ($this->seancesRestantes == 0) {
            throw new Exception("Plus de séances");
        }
        if ($this->seancesRestantes > 0) {
            $this->seancesRestantes--;
        }
    }
}