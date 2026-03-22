  const equipes = [
    { nom: "Wydad AC",          points: 38, buts_pour: 37, buts_contre: 22, matchs_joues: 18 },
    { nom: "Raja Casablanca",   points: 35, buts_pour: 42, buts_contre: 18, matchs_joues: 18 },
    { nom: "FAR Rabat",         points: 30, buts_pour: 28, buts_contre: 24, matchs_joues: 18 },
    { nom: "FUS Rabat",         points: 28, buts_pour: 25, buts_contre: 26, matchs_joues: 18 },
    { nom: "Moghreb Tétouan",   points: 28, buts_pour: 30, buts_contre: 28, matchs_joues: 18 },
    { nom: "Hassania Agadir",   points: 22, buts_pour: 20, buts_contre: 31, matchs_joues: 18 },
    { nom: "Difaâ El Jadida",   points: 18, buts_pour: 17, buts_contre: 35, matchs_joues: 18 },
    { nom: "Chabab Mohammedia", points: 14, buts_pour: 12, buts_contre: 44, matchs_joues: 18 },
  ];
  
//   1
 for (let i = 0; i < equipes.length; i++) {
    equipes[i].diff = equipes[i].buts_pour - equipes[i].buts_contre;
  }
//   2
 for (let i = 0; i < equipes.length; i++) {
    for (let j = 0; j < equipes.length - 1 - i; j++) {
      let doitEchanger = false;
 
      if (equipes[j].points < equipes[j + 1].points) {
        doitEchanger = true;
      } else if (equipes[j].points === equipes[j + 1].points) {
        if (equipes[j].diff < equipes[j + 1].diff) {
          doitEchanger = true;
        }
      }
 
      if (doitEchanger) {
        const temp         = equipes[j];
        equipes[j]         = equipes[j + 1];
        equipes[j + 1]     = temp;
      }
    }
  }
//   3
function afficherClassement(titre) {
    console.log("\n" + titre);
    console.log("─".repeat(50));
    for (let i = 0; i < equipes.length; i++) {
      const rang  = i + 1;
      const e     = equipes[i];
      const signe = e.diff >= 0 ? "+" : "";
      console.log(rang + ". " + e.nom + " — " + e.points + " pts (diff: " + signe + e.diff + ")");
    }
  }
 
// 4
 function jouerMatch(nomA, butsA, nomB, butsB) {
    let equipeA = null;
    let equipeB = null;
    for (let i = 0; i < equipes.length; i++) {
      if (equipes[i].nom === nomA) equipeA = equipes[i];
      if (equipes[i].nom === nomB) equipeB = equipes[i];
    }
 
    equipeA.buts_pour    += butsA;
    equipeA.buts_contre  += butsB;
    equipeA.matchs_joues += 1;
 
    equipeB.buts_pour    += butsB;
    equipeB.buts_contre  += butsA;
    equipeB.matchs_joues += 1;
 
    if (butsA > butsB) {
      equipeA.points += 3; 
    } else if (butsA < butsB) {
      equipeB.points += 3; 
    } else {
      equipeA.points += 1; 
      equipeB.points += 1;
    }
 
    equipeA.diff = equipeA.buts_pour - equipeA.buts_contre;
    equipeB.diff = equipeB.buts_pour - equipeB.buts_contre;
 
    console.log("Match :", nomA, butsA + "-" + butsB, nomB);
  }
//   5
jouerMatch("Raja Casablanca",   2, "Wydad AC",          1);
  jouerMatch("FAR Rabat",         1, "FUS Rabat",          1);
  jouerMatch("Moghreb Tétouan",   3, "Hassania Agadir",    0);
  jouerMatch("Difaâ El Jadida",   2, "Chabab Mohammedia",  2);
  jouerMatch("Wydad AC",          2, "FAR Rabat",          0);
 
  for (let i = 0; i < equipes.length; i++) {
    for (let j = 0; j < equipes.length - 1 - i; j++) {
      let doitEchanger = false;
 
      if (equipes[j].points < equipes[j + 1].points) {
        doitEchanger = true;
      } else if (equipes[j].points === equipes[j + 1].points) {
        if (equipes[j].diff < equipes[j + 1].diff) {
          doitEchanger = true;
        }
      }
 
      if (doitEchanger) {
        const temp      = equipes[j];
        equipes[j]      = equipes[j + 1];
        equipes[j + 1]  = temp;
      }
    }
  }
 

 