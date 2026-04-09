<?php

require_once "../src/NotificationEmail.php";
require_once "../src/NotificationSMS.php";
require_once "../src/NotificationPush.php";
require_once "../src/NotificationService.php";

$service = new NotificationService();

$n1 = new NotificationEmail(1, "Ali", "Cours PHP", "Bienvenue", "ali@mail.com");
$n2 = new NotificationSMS(2, "Ali", "Code", "Votre code est 12345678901234567890", "0600000000");
$n3 = new NotificationPush(3, "Sara", "New", "Nouveau cours", "token123", "icon.png");

$service->ajouter($n1);
$service->ajouter($n2);
$service->ajouter($n3);

$service->envoyerToutes();

print_r($service->resumer());