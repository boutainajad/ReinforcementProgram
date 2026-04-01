<?php

require_once "Animal.php";

class Chien extends Animal {
    public function aboyer() {
        return "Wouf";
    }
}