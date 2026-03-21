const stock = [
    { nom: "Tomates",       quantite: 5,   unite: "kg",     prix_unitaire: 8,   seuil_alerte: 10,  categorie: "légume"  },
    { nom: "Carottes",      quantite: 12,  unite: "kg",     prix_unitaire: 5,   seuil_alerte: 8,   categorie: "légume"  },
    { nom: "Oignons",       quantite: 3,   unite: "kg",     prix_unitaire: 4,   seuil_alerte: 7,   categorie: "légume"  },
    { nom: "Pommes de terre", quantite: 20, unite: "kg",    prix_unitaire: 6,   seuil_alerte: 15,  categorie: "légume"  },
    { nom: "Poulet",        quantite: 8,   unite: "kg",     prix_unitaire: 45,  seuil_alerte: 10,  categorie: "viande"  },
    { nom: "Bœuf",          quantite: 4,   unite: "kg",     prix_unitaire: 90,  seuil_alerte: 8,   categorie: "viande"  },
    { nom: "Cumin",         quantite: 0.3, unite: "kg",     prix_unitaire: 60,  seuil_alerte: 0.5, categorie: "épice"   },
    { nom: "Paprika",       quantite: 0.8, unite: "kg",     prix_unitaire: 50,  seuil_alerte: 0.5, categorie: "épice"   },
    { nom: "Coriandre",     quantite: 0.2, unite: "kg",     prix_unitaire: 70,  seuil_alerte: 0.4, categorie: "épice"   },
    { nom: "Eau minérale",  quantite: 48,  unite: "pièces", prix_unitaire: 3,   seuil_alerte: 24,  categorie: "boisson" },
    { nom: "Jus d'orange",  quantite: 10,  unite: "litres", prix_unitaire: 20,  seuil_alerte: 15,  categorie: "boisson" },
    { nom: "Lait",          quantite: 6,   unite: "litres", prix_unitaire: 12,  seuil_alerte: 10,  categorie: "boisson" },
  ];
 
  // 2
  const alertes = stock.filter(i => i.quantite < i.seuil_alerte);
  alertes.forEach(i =>
    console.log(i.nom, i.quantite, i.unite, i.seuil_alerte )
  );
//   3
  const valeurTotale = stock.reduce((acc, i) => acc + i.quantite * i.prix_unitaire, 0);
  console.log(valeurTotale);

//   4
  const parCategorie = stock.reduce((acc, i) => {
    if (!acc[i.categorie]) acc[i.categorie] = 0;
    acc[i.categorie] += i.quantite * i.prix_unitaire;
    return acc;
  }, {});
  console.log("4. Par catégorie :");
  Object.keys(parCategorie).forEach(cat =>
    console.log(" ", cat, "→", parCategorie[cat] + " DH")
  );

//   5
