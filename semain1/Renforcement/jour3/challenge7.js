 const CAPACITE_MAX = 30;
  const reservations = [];
  let   prochainId   = 1;
 
  // 1 
  function ajouterReservation(nom_client, nombre_personnes, date, heure, telephone) {
 
    let placesOccupees = 0;
    for (let i = 0; i < reservations.length; i++) {
      if (reservations[i].date   === date  &&
          reservations[i].heure  === heure &&
          reservations[i].statut === "confirmée") {
        placesOccupees += reservations[i].nombre_personnes;
      }
    }
 
    let statut;
    if (placesOccupees + nombre_personnes <= CAPACITE_MAX) {
      statut = "confirmée";
    } else {
      statut = "en attente";
    }
 
    const reservation = {
      id:               prochainId,
      nom_client:       nom_client,
      nombre_personnes: nombre_personnes,
      date:             date,
      heure:            heure,
      statut:           statut,
      telephone:        telephone,
    };
 
    reservations.push(reservation);
    prochainId++;
 
    console.log( nom_client + " | " + statut + " | " + date + " " + heure);
    return reservation;
  }
//   2
function annulerReservation(id) {
 
    let reservationAnnulee = null;
    for (let i = 0; i < reservations.length; i++) {
      if (reservations[i].id === id) {
        reservationAnnulee = reservations[i];
        break;
      }
    }
 
    if (reservationAnnulee === null) {
      console.log("Réservation introuvable — id :", id);
      return;
    }
 
    reservationAnnulee.statut = "annulée";
    console.log("✗ Annulation : " + reservationAnnulee.nom_client + " | " + reservationAnnulee.date + " " + reservationAnnulee.heure);
 
    const date  = reservationAnnulee.date;
    const heure = reservationAnnulee.heure;
 
    let placesOccupees = 0;
    for (let i = 0; i < reservations.length; i++) {
      if (reservations[i].date   === date  &&
          reservations[i].heure  === heure &&
          reservations[i].statut === "confirmée") {
        placesOccupees += reservations[i].nombre_personnes;
      }
    }
 
    for (let i = 0; i < reservations.length; i++) {
      if (reservations[i].date   === date  &&
          reservations[i].heure  === heure &&
          reservations[i].statut === "en attente") {
 
        if (placesOccupees + reservations[i].nombre_personnes <= CAPACITE_MAX) {
          reservations[i].statut  = "confirmée";
          placesOccupees         += reservations[i].nombre_personnes;
          console.log("→ Confirmée depuis liste attente : " + reservations[i].nom_client);
        }
      }
    }
  }

//   3
function afficherJournee(date) {
  
 
    const duJour = [];
    for (let i = 0; i < reservations.length; i++) {
      if (reservations[i].date === date) {
        duJour.push(reservations[i]);
      }
    }
 
    for (let i = 0; i < duJour.length; i++) {
      for (let j = 0; j < duJour.length - 1 - i; j++) {
        if (duJour[j].heure > duJour[j + 1].heure) {
          const temp    = duJour[j];
          duJour[j]     = duJour[j + 1];
          duJour[j + 1] = temp;
        }
      }
    }
 
    for (let i = 0; i < duJour.length; i++) {
      const r = duJour[i];
      console.log(r.heure + " | " + r.nom_client + " (" + r.nombre_personnes + " pers.) | " + r.statut + " | " + r.telephone);
    }
  }
   ajouterReservation("Youssef Alami",  8,  "2024-12-20", "19:00", "0661-111111"); 
  ajouterReservation("Nadia Benali",   10, "2024-12-20", "19:00", "0662-222222"); 
  ajouterReservation("Karim Tazi",     7,  "2024-12-20", "19:00", "0663-333333"); 
  ajouterReservation("Fatima Chraibi", 8,  "2024-12-20", "19:00", "0664-444444"); 
  ajouterReservation("Omar Idrissi",   4,  "2024-12-20", "19:00", "0665-555555"); 
  ajouterReservation("Sara Mansouri",  6,  "2024-12-20", "21:00", "0666-666666"); 
  ajouterReservation("Rachid Bennis",  12, "2024-12-20", "21:00", "0667-777777");
  ajouterReservation("Amina Filali",   15, "2024-12-20", "21:00", "0668-888888"); 
 
  afficherJournee("2024-12-20");
  tauxOccupation("2024-12-20");
 
  annulerReservation(3);