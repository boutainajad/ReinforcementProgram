const ventes = [
  { mois: "Janvier",   chiffre_affaires: 42000, nb_clients: 320, ville: "Casablanca" },
  { mois: "Février",   chiffre_affaires: 38000, nb_clients: 290, ville: "Rabat"      },
  { mois: "Mars",      chiffre_affaires: 55000, nb_clients: 410, ville: "Casablanca" },
  { mois: "Avril",     chiffre_affaires: 61000, nb_clients: 460, ville: "Tanger"     },
  { mois: "Mai",       chiffre_affaires: 47000, nb_clients: 350, ville: "Rabat"      },
  { mois: "Juin",      chiffre_affaires: 70000, nb_clients: 530, ville: "Casablanca" },
  { mois: "Juillet",   chiffre_affaires: 83000, nb_clients: 620, ville: "Tanger"     },
  { mois: "Août",      chiffre_affaires: 79000, nb_clients: 590, ville: "Casablanca" },
  { mois: "Septembre", chiffre_affaires: 54000, nb_clients: 400, ville: "Rabat"      },
  { mois: "Octobre",   chiffre_affaires: 48000, nb_clients: 370, ville: "Tanger"     },
  { mois: "Novembre",  chiffre_affaires: 66000, nb_clients: 490, ville: "Casablanca" },
  { mois: "Décembre",  chiffre_affaires: 91000, nb_clients: 700, ville: "Tanger"     },
];

// 1
const caTotal = ventes.reduce(function(acc, mois) {
  return acc + mois.chiffre_affaires;
}, 0);
 
console.log(caTotal + " €");

// 2
const caMoyen = ventes.reduce(function(acc, mois) {
  return acc + mois.chiffre_affaires;
}, 0) / ventes.length;
 
console.log(caMoyen + " €");
// 3
const meilleurMois = ventes.reduce(function(meilleur, mois) {
  if (mois.chiffre_affaires > meilleur.chiffre_affaires) {
    return mois;
  }
  return meilleur;
});
 
console.log( meilleurMois.mois,  meilleurMois.chiffre_affaires + " €")
// 4
const moisMoinsClients = ventes.reduce(function(minimum, mois) {
  if (mois.nb_clients < minimum.nb_clients) {
    return mois;
  }
  return minimum;
});
 
console.log( moisMoinsClients.mois, moisMoinsClients.nb_clients);
// 5
const moisCA50k = ventes.filter(function(mois) {
  return mois.chiffre_affaires > 50000;
});
 
moisCA50k.forEach(function(mois) {
  console.log(mois.mois, ":", mois.chiffre_affaires + " €");
});
// 6
const resumeVilles = ventes.reduce(function(acc, mois) {
  const ville = mois.ville;
 
  if (acc[ville] === undefined) {
    acc[ville] = { ca: 0, nb_clients: 0 };
  }
 
  acc[ville].ca         += mois.chiffre_affaires;
  acc[ville].nb_clients += mois.nb_clients;
 
  return acc;
}, {});
 
Object.keys(resumeVilles).forEach(function(ville) {
  console.log(
    " ", ville,
    "→ CA :", resumeVilles[ville].ca + " €",
    " | Clients :", resumeVilles[ville].nb_clients
  );
});
// 7
 const trie = [...ventes].sort((a, b) => b.chiffre_affaires - a.chiffre_affaires);
  console.log( trie.map(v => v.mois + " " + v.chiffre_affaires + "€"));

// 8
  const croissance = ventes.slice(1).map((v, i) => ({
    de:  ventes[i].mois,
    vers: v.mois,
    diff: v.chiffre_affaires - ventes[i].chiffre_affaires,
  }));
  console.log( croissance);


 