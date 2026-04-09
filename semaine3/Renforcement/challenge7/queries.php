<?php

require "database.php";

function moyenne($db) {
    $sql = "SELECT a.nom, AVG(n.note) as moyenne
            FROM apprenants a
            JOIN notes n ON a.id = n.apprenant_id
            GROUP BY a.id";

    return $db->query($sql)->fetchAll();
}

$result = moyenne($db);

print_r($result);