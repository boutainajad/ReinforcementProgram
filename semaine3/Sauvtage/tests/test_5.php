<?php

require_once "../src/Chien.php";
require_once "../src/Chat.php";

$c = new Chien("Rex", 3);
$ch = new Chat("Mimi", 2);

echo $c->aboyer();
echo $ch->ronronner();