<?php

class GestionnaireDocuments {
    public $documents = [];

    public function ajouter($doc) {
        $this->documents[] = $doc;
    }

    public function classerParType() {
        $result = [];

        foreach ($this->documents as $d) {
            $type = get_class($d);

            if (!isset($result[$type])) {
                $result[$type] = [];
            }

            $result[$type][] = $d;
        }

        return $result;
    }

    public function classerParStatut() {
        $result = [];

        foreach ($this->documents as $d) {
            $statut = $d->statut;

            if (!isset($result[$statut])) {
                $result[$statut] = [];
            }

            $result[$statut][] = $d;
        }

        return $result;
    }
}