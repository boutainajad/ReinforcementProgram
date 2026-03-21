const avis = [
  { pseudo: "Fatima_cuisine",  note: 5, commentaire: "Recette absolument parfaite, j'ai suivi chaque étape et le résultat était bluffant. Toute ma famille a adoré !", date: "2024-12-01" },
  { pseudo: "MarocFoodie",     note: 4, commentaire: "Très bonne recette, facile à suivre. J'ai juste ajouté un peu plus d'épices.", date: "2024-11-28" },
  { pseudo: "ChefAmateur44",   note: 2, commentaire: "Les temps de cuisson sont faux. Mon plat était trop cuit.", date: "2024-11-25" },
  { pseudo: "Zineb_K",         note: 5, commentaire: "Waouh ! La meilleure recette que j'ai essayée cette année. Simple, rapide et délicieuse.", date: "2024-11-20" },
  { pseudo: "TangerFoods",     note: 3, commentaire: "Correcte sans plus. Les ingrédients sont basiques et le goût est un peu fade à mon goût.", date: "2024-11-18" },
  { pseudo: "Rachid_cook",     note: 1, commentaire: "Décevant. Les proportions sont complètement fausses, j'ai dû tout recommencer.", date: "2024-11-15" },
  { pseudo: "Nadia_Rbat",      note: 4, commentaire: "Belle recette avec un bon équilibre de saveurs. Je la referai sans hésiter.", date: "2024-11-10" },
  { pseudo: "FoodLover99",     note: 5, commentaire: "Incroyable ! Mes invités ont demandé la recette. Présentation soignée et goût au rendez-vous.", date: "2024-11-05" },
  { pseudo: "Hamid_gourmet",   note: 2, commentaire: "Trop compliqué pour ce que ça donne. Le résultat n'est pas à la hauteur du temps investi.", date: "2024-10-30" },
  { pseudo: "SarahM",          note: 3, commentaire: "Ni mauvaise ni excellente. Une recette standard qu'on peut améliorer avec quelques touches perso.", date: "2024-10-25" },
  { pseudo: "CasaChef",        note: 4, commentaire: "Bien expliqué et facile à réaliser même pour un débutant. Résultat très satisfaisant.", date: "2024-10-20" },
  { pseudo: "Youssef_Fes",     note: 1, commentaire: "Mauvaise expérience. Les étapes manquent de précision et le résultat final est très décevant.", date: "2024-10-15" },
  { pseudo: "Amina_cook",      note: 5, commentaire: "Parfait du début à la fin ! La texture, le goût, la présentation… tout était au niveau. Je recommande vivement cette recette à tout le monde.", date: "2024-10-10" },
  { pseudo: "RabatFoodie",     note: 4, commentaire: "Recette solide avec de bonnes bases. Quelques ajustements personnels et c'était excellent.", date: "2024-10-05" },
  { pseudo: "Karima_W",        note: 3, commentaire: "Honnêtement, j'attendais mieux. La recette est correcte mais rien d'exceptionnel.", date: "2024-09-30" },
];

// 1
const sommeNotes = avis.reduce(function(acc, a) {
  return acc + a.note;
}, 0);
 
const moyenne1 = Math.round((sommeNotes / avis.length) * 10) / 10;
 
console.log( moyenne1);

// 2
const repartition = avis.reduce(
  (acc, a) => { acc[a.note]++; return acc; },
  { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
);
 
console.log( repartition);
// 3
const positifs1 = avis.filter(a => a.note >= 4);
const negatifs1 = avis.filter(a => a.note <= 2);
 
console.log("3. Positifs :", positifs1.length, "| Négatifs :", negatifs1.length);
// 4
const trie = [...avis].sort((a, b) => (a.date > b.date ? -1 : 1));
 
console.log( trie[0].pseudo, trie[0].date);
// 5
const plusLong = avis.reduce((max, a) =>
  a.commentaire.length > max.commentaire.length ? a : max
);
 
console.log( plusLong.pseudo, plusLong.commentaire.length);
// 6
const neutres = avis.filter(a => a.note === 3);
const positifs = avis.filter(a => a.note >= 4);
const negatifs = avis.filter(a => a.note <= 2);

const total = avis.reduce((sum, a) => sum + a.note, 0);
const moyenne = total / avis.length;

const resume = `${moyenne}/5 basé sur ${avis.length} avis — ${positifs.length} positifs, ${negatifs.length} négatifs, ${neutres.length} neutres`;

console.log("6.", resume);