const playlist = [
  { titre: "Bohemian Rhapsody",    artiste: "Queen",              duree: 354, genre: "Rock"    },
  { titre: "Superstition",         artiste: "Stevie Wonder",      duree: 245, genre: "RnB"     },
  { titre: "Take Five",            artiste: "Dave Brubeck",       duree: 324, genre: "Jazz"    },
  { titre: "Smells Like Teen Spirit", artiste: "Nirvana",         duree: 301, genre: "Rock"    },
  { titre: "Blinding Lights",      artiste: "The Weeknd",         duree: 200, genre: "Pop"     },
  { titre: "Lose Yourself",        artiste: "Eminem",             duree: 326, genre: "RnB"     },
  { titre: "Hotel California",     artiste: "Eagles",             duree: 391, genre: "Rock"    },
  { titre: "Oxygène",              artiste: "Jean-Michel Jarre",  duree: 360, genre: "Electro" },
  { titre: "Autumn Leaves",        artiste: "Miles Davis",        duree: 218, genre: "Jazz"    },
  { titre: "Shape of You",         artiste: "Ed Sheeran",         duree: 234, genre: "Pop"     },
];
// 1
const titres = playlist.map(s=>s.titres);
console.log(titres);

// 2
const Rock = playlist.filter(s=>s.genre === "Rock");
console.log(Rock);

// 3
const dureesFormatees = playlist.map(s => {
  const minutes = Math.floor(s.duree / 60);
  const secondes = String(s.duree % 60).padStart(2, "0");
  return `${minutes}:${secondes}`;
});
 
console.log(dureesFormatees);

// 4
const totalSecondes = playlist.reduce((acc, s) => acc + s.duree, 0);
const totalMinutes  = Math.floor(totalSecondes / 60);
const resteSecondes = totalSecondes % 60;
 
console.log(`${totalMinutes} min ${resteSecondes} sec  (${totalSecondes} secondes)`);

// 5
const plusLongue = playlist.reduce((a, s) => (s.duree > a.duree ? s : a));
 
console.log(plusLongue);

// 6

const toutesUnder6 = playlist.every(s => s.duree < 360);
 console.log(toutesUnder6);
//  7
const aJazz = playlist.some(s => s.genre === "Jazz");
 
console.log(aJazz);

// 8
const triees = [...playlist].sort((a, b) => a.duree - b.duree);
 
console.log(triees);