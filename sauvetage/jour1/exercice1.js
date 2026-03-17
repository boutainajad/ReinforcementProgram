const commandes = [
  { id: 'CMD-001', client: 'Alami Hassan',     montant: 450,  statut: 'livree',     ville: 'Casablanca' },
  { id: 'CMD-002', client: 'Benali Sara',       montant: 1200, statut: 'en_attente', ville: 'Rabat'      },
  { id: 'CMD-003', client: 'Chraibi Omar',      montant: 320,  statut: 'en_cours',   ville: 'Marrakech'  },
  { id: 'CMD-004', client: 'Drissi Fatima',     montant: 875,  statut: 'en_attente', ville: 'Fes'        },
  { id: 'CMD-005', client: 'El Amrani Youssef', montant: 95,   statut: 'annulee',    ville: 'Casablanca' },
  { id: 'CMD-006', client: 'Fassi Leila',       montant: 2100, statut: 'livree',     ville: 'Tanger'     },
  { id: 'CMD-007', client: 'Ghazali Mehdi',     montant: 560,  statut: 'en_attente', ville: 'Agadir'     },
  { id: 'CMD-008', client: 'Hamdaoui Nadia',    montant: 430,  statut: 'en_cours',   ville: 'Casablanca' },
];
// exercice1

function filtrerParStatut(commandes, statut) {
  return commandes.filter(cmd => cmd.statut === statut);
}
console.log(filtrerParStatut(commandes, 'en_attente'));


function calculerChiffreAffaires(commandes) {
  return commandes.reduce((total, cmd) => total + cmd.montant, 0);
}
console.log(calculerChiffreAffaires(commandes));

function commandeLaPlusElevee(commandes) {
  return commandes.reduce(function(max, cmd) {

    if (cmd.montant > max.montant) {
      return cmd;   
    } else {
      return max;
    }

  });
}
console.log(commandeLaPlusElevee(commandes));


function marquerPrioritaires(commandes) {
  return commandes.map(function(cmd) {

    if (cmd.montant > 800 && cmd.statut === 'en_attente') {
      return { ...cmd, prioritaire: true };
    } else {
      return { ...cmd, prioritaire: false };
    }

  });
}
console.log(marquerPrioritaires(commandes));

function resumeParStatut(commandes) {
  const resume = {};

  for (let i = 0; i < commandes.length; i++) {
    const cmd = commandes[i];
    const statut = cmd.statut;

    if (!resume[statut]) {
      resume[statut] = { count: 0, total: 0 };
    }

    resume[statut].count += 1;
    resume[statut].total += cmd.montant;
  }

  return resume;
}
console.log(resumeParStatut(commandes));

// exercie2
const produits = [
  { id: 1, nom: 'Laptop Pro',      prix: 8500, stock: 12, categorie: 'Informatique' },
  { id: 2, nom: 'Souris sans fil', prix: 150,  stock: 3,  categorie: 'Informatique' },
  { id: 3, nom: 'Clavier mecanique',prix: 420, stock: 8,  categorie: 'Informatique' },
  { id: 4, nom: 'Bureau debout',   prix: 2200, stock: 5,  categorie: 'Mobilier'     },
  { id: 5, nom: 'Chaise ergonomique',prix:1800,stock: 2,  categorie: 'Mobilier'     },
  { id: 6, nom: 'Lampe LED',       prix: 180,  stock: 20, categorie: 'Mobilier'     },
  { id: 7, nom: 'Tapis de souris', prix: 80,   stock: 0,  categorie: 'Accessoires'  },
  { id: 8, nom: 'Support laptop',  prix: 350,  stock: 7,  categorie: 'Accessoires'  },
  { id: 9, nom: 'Webcam HD',       prix: 550,  stock: 4,  categorie: 'Informatique' },
];

function produitsEnRuptureOuCritique(produits) {
  return produits
    .filter(p => p.stock <= 5)
    .sort((a, b) => a.stock - b.stock);
}
console.log(produitsEnRuptureOuCritique(produits));


function valeurTotaleParCategorie(produits) {
  return produits.reduce((acc, p) => {
    const valeur = p.stock * p.prix;

    if (!acc[p.categorie]) {
      acc[p.categorie] = 0;
    }

    acc[p.categorie] += valeur;
    return acc;
  }, {});
}
console.log(valeurTotaleParCategorie(produits));



function produitLePlusCherParCategorie(produits) {
  return produits.reduce((acc, p) => {
    if (!acc[p.categorie] || p.prix > acc[p.categorie].prix) {
      acc[p.categorie] = p;
    }
    return acc;
  }, {});
}
console.log(produitLePlusCherParCategorie(produits));





