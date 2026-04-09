<?php
class Flotte {
    public $vehicules = [];

    public function ajouter($v) {
        $this->vehicules[] = $v;
    }

    public function coutTotal($km) {
        $total = 0;
        foreach ($this->vehicules as $v) {
            $total += $v->calculerCoutMission($km);
        }
        return $total;
    }
}