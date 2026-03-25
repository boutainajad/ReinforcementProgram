
  const contacts = [
    {
      nom: "Youssef Alami", entreprise: "TechMaroc",
      email: "y.alami@techmaroc.ma", telephone: "0661-234567",
      ville: "Casablanca",
      adresse: { rue: "12 Bd Anfa", code_postal: "20000", ville: "Casablanca", pays: "Maroc" }
    },
    {
      nom: "Nadia Benali", entreprise: "StartupHub",
      email: "n.benali@startuphub.ma", telephone: "0662-345678",
      ville: "Rabat",
      adresse: { rue: "5 Av Mohammed V", code_postal: "10000", ville: "Rabat", pays: "Maroc" }
    },
    {
      nom: "Karim Tazi", entreprise: "TechMaroc",
      email: "k.tazi@techmaroc.ma", telephone: "0663-456789",
      ville: "Casablanca",
      adresse: { rue: "34 Rue Foucauld", code_postal: "20100", ville: "Casablanca", pays: "Maroc" }
    },
    {
      nom: "Fatima Chraibi", entreprise: "DigitalAgency",
      email: "f.chraibi@digitalagency.ma", telephone: "0664-567890",
      ville: "Tanger",
      adresse: { rue: "7 Rue Ibn Batouta", code_postal: "90000", ville: "Tanger", pays: "Maroc" }
    },
    {
      nom: "Omar Idrissi", entreprise: "StartupHub",
      email: "o.idrissi@startuphub.ma", telephone: "0665-678901",
      ville: "Rabat",
      adresse: { rue: "22 Av Allal Ben Abdellah", code_postal: "10100", ville: "Rabat", pays: "Maroc" }
    },
    {
      nom: "Sara Mansouri", entreprise: "DigitalAgency",
      email: "s.mansouri@digitalagency.ma", telephone: "0666-789012",
      ville: "Casablanca",
      adresse: { rue: "88 Bd Zerktouni", code_postal: "20050", ville: "Casablanca", pays: "Maroc" }
    },
  ];

//   1
  contacts.forEach(c => console.log( c.nom, c.ville));

//   2
  const parVille = contacts.reduce((acc, c) => {
    if (!acc[c.ville]) acc[c.ville] = [];
    acc[c.ville].push(c.nom);
    return acc;
  }, {});
  console.log(parVille);
//   3
const entreprise = "TechMaroc";
  const equipe = contacts.filter(c => c.entreprise === entreprise);
  console.log( entreprise, equipe.map(c => c.nom));
  
//   4
 const karim = contacts.find(c => c.nom === "Karim Tazi");
  karim.adresse = { rue: "15 Rue de Lausanne", code_postal: "90000", ville: "Tanger", pays: "Maroc" };
  console.log(karim.adresse);

//   5
  const aujourd_hui         = new Date("2024-12-01");

 contacts[0].dernierContact = "2024-11-25"; 
  contacts[1].dernierContact = "2024-10-15"; 
  contacts[2].dernierContact = "2024-11-28"; 
  contacts[3].dernierContact = "2024-09-30"; 
  contacts[4].dernierContact = "2024-11-01"; 
  contacts[5].dernierContact = "2024-10-01"; 
 
//   6
 