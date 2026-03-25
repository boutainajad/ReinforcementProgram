  const produits = [
    { id: 1, nom: "Casque Bluetooth",  prix: 49.99,  stock_disponible: 5 },
    { id: 2, nom: "Clavier mécanique", prix: 89.99,  stock_disponible: 3 },
    { id: 3, nom: "Souris sans fil",   prix: 34.99,  stock_disponible: 8 },
    { id: 4, nom: "Écran 24 pouces",   prix: 199.99, stock_disponible: 2 },
    { id: 5, nom: "Webcam HD",         prix: 59.99,  stock_disponible: 6 },
  ];

//   1
    const panier    = [];
  let   codePromo = null;

 const trouverProduit = id => produits.find(p => p.id === id);
  const trouverArticle = id => panier.find(a => a.idProduit === id);

//   2
  const ajouterAuPanier = (idProduit, quantite) => {
    const produit = trouverProduit(idProduit);
 
    const article = trouverArticle(idProduit);
 
    if (article) {
      const nouvelleQte = Math.min(article.quantite + quantite, produit.stock_disponible);
      article.quantite  = nouvelleQte;
      console.log(produit.nom,  nouvelleQte);
    } else {
      const qte = Math.min(quantite, produit.stock_disponible);
      panier.push({ idProduit, quantite: qte });
      console.log(produit.nom);
    }
  };
//   3
  const modifierQuantite = (idProduit, nouvelleQte) => {
    const produit = trouverProduit(idProduit);
    const article = trouverArticle(idProduit);
  
    article.quantite = Math.min(nouvelleQte, produit.stock_disponible);
    console.log(produit.nom, + article.quantite);
  };

//   4
  const supprimerDuPanier = idProduit => {
    const index = panier.findIndex(a => a.idProduit === idProduit);
    const produit = trouverProduit(idProduit);
    panier.splice(index, 1);
    console.log("Supprime :", produit.nom);
  };
//   5
  const sousTotal    = article => trouverProduit(article.idProduit).prix * article.quantite;
  const totalPanier  = ()      => panier.reduce((acc, a) => acc + sousTotal(a), 0);
  const nbArticles   = ()      => panier.reduce((acc, a) => acc + a.quantite, 0);
 



  ajouterAuPanier(1, 2);   
  ajouterAuPanier(2, 1);
  modifierQuantite(2, 2);
