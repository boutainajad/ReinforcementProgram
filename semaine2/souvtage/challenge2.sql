SELECT * FROM livres
ORDER BY annee_parution DESC;

SELECT COUNT(*) AS nombre_disponibles
FROM livres
WHERE disponible = TRUE;

SELECT
    MAX(annee_parution) AS annee_plus_recent,
    MIN(annee_parution) AS annee_plus_ancien
FROM livres;

SELECT titre, annee_parution FROM livres ORDER BY annee_parution DESC LIMIT 1; 
SELECT titre, annee_parution FROM livres ORDER BY annee_parution ASC  LIMIT 1; 

SELECT * FROM livres
ORDER BY titre ASC
LIMIT 3;