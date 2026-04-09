<?php

class DispatcheurLivraisons {
    public $vehicules = [];

    public function ajouterVehicule($v) {
        $this->vehicules[] = $v;
    }

    public function choisirMeilleur($distance, $poids) {
        $meilleur = null;
        $coutMin = PHP_INT_MAX;

        foreach ($this->vehicules as $v) {

              if ($poids > $v->capacite) continue;

            $cout = $v->calculerCout($distance, $poids);

            if ($cout < $coutMin) {
                $coutMin = $cout;
                $meilleur = $v;
            }
        }

        return $meilleur;
    }

    public function calculerTournee($livraisons) {
        $total = 0;

        foreach ($livraisons as $l) {
            [$distance, $poids] = $l;

            $v = $this->choisirMeilleur($distance, $poids);

            if ($v) {
                $total += $v->calculerCout($distance, $poids);
            }
        }

        return $total;
    }
}