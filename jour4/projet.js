let users = [
  { id: 1, pseudo: "ali", email: "ali@mail.com", role: "vendeur", note: 0, solde: 1000 },
  { id: 2, pseudo: "sara", email: "sara@mail.com", role: "acheteur", note: 0, solde: 800 },
  { id: 3, pseudo: "yassine", email: "yass@mail.com", role: "vendeur", note: 0, solde: 500 },
  { id: 4, pseudo: "lina", email: "lina@mail.com", role: "acheteur", note: 0, solde: 1200 },
  { id: 5, pseudo: "omar", email: "omar@mail.com", role: "vendeur", note: 0, solde: 300 }
];


let annonces = [];
let annonceId = 1;

function publishAnnonce(vendeurId, titre, description, prix, categorie, etat) {
  let vendeur = users.find(u => u.id === vendeurId);

  if (!vendeur || vendeur.role !== "vendeur") {
    console.log("Seul un vendeur peut publier ");
    return;
  }

  let annonce = {
    id: annonceId++,
    vendeur_id: vendeurId,
    titre,
    description,
    prix,
    categorie,
    etat,
    statut: "disponible",
    date: new Date()
  };

  annonces.push(annonce);
  console.log("Annonce ajoutée !");
}

function modifierPrix(id, newPrix) {
  let annonce = annonces.find(a => a.id === id);
  if (annonce) annonce.prix = newPrix;
}

function supprimerAnnonce(id) {
  annonces = annonces.filter(a => a.id !== id);
}


function rechercher( motCle, categorie, minPrix, maxPrix ) {
  let result = annonces;

  if (motCle) {
    result = result.filter(a =>
      a.titre.includes(motCle) || a.description.includes(motCle)
    );
  }

  if (categorie) {
    result = result.filter(a => a.categorie === categorie);
  }

  if (minPrix !== undefined) {
    result = result.filter(a => a.prix >= minPrix);
  }

  if (maxPrix !== undefined) {
    result = result.filter(a => a.prix <= maxPrix);
  }

  return result;
}


let transactions = [];

function acheter(acheteurId, annonceId) {
  let acheteur = users.find(u => u.id === acheteurId);
  let annonce = annonces.find(a => a.id === annonceId);

  if (!acheteur || !annonce) return;

  let vendeur = users.find(u => u.id === annonce.vendeur_id);

  if (annonce.statut !== "disponible") {
    console.log("Annonce non disponible");
    return;
  }

  if (acheteur.solde < annonce.prix) {
    console.log("Solde insuffisant");
    return;
  }

  let commission = annonce.prix * 0.05;
  let gainVendeur = annonce.prix - commission;

  acheteur.solde -= annonce.prix;
  vendeur.solde += gainVendeur;

  annonce.statut = "vendu";

  transactions.push({
    id: transactions.length,
    date: new Date(),
    acheteur: acheteurId,
    vendeur: vendeur.id,
    annonce: annonceId,
    montant: annonce.prix,
    commission
  });

  console.log("Achat réussi !");
}


let avis = [];

function ajouterAvis(acheteurId, vendeurId, note, commentaire, transactionId) {
  let existe = avis.find(a => a.transactionId === transactionId);

  if (existe) {
    console.log("Deja note!");
    return;
  }

  if (note < 1 || note > 5) return;

  avis.push({
    acheteurId,
    vendeurId,
    note,
    commentaire,
    transactionId
  });

  let vendeurAvis = avis.filter(a => a.vendeurId === vendeurId);

  let moyenne =
    vendeurAvis.reduce((sum, a) => sum + a.note, 0) / vendeurAvis.length;

  let vendeur = users.find(u => u.id === vendeurId);
  if (vendeur) vendeur.note = moyenne;
}


function stats() {
  let totalCA = transactions.reduce((sum, t) => sum + t.montant, 0);
  let totalCommission = transactions.reduce((sum, t) => sum + t.commission, 0);

  console.log("Chiffre d'affaires:", totalCA);
  console.log("Commission totale:", totalCommission);

  let vendu = annonces.filter(a => a.statut === "vendu").length;
  let dispo = annonces.filter(a => a.statut === "disponible").length;

  console.log("Annonces vendues:", vendu);
  console.log("Annonces dispo:", dispo);
}


publishAnnonce(1, "iPhone", "Bon état", 300, "Electronique", "bon");
publishAnnonce(3, "Chaise", "Neuve", 100, "Meuble", "neuf");

acheter(2, 1);

ajouterAvis(2, 1, 5, "Très bien", 0);

stats();