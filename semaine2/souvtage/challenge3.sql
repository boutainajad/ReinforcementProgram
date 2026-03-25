CREATE TABLE emprunts (
    id                  INT AUTO_INCREMENT PRIMARY KEY,
    livre_id            INT   ,
    nom_emprunteur      VARCHAR(100),
    date_emprunt        DATE        ,
    date_retour_prevue  DATE        ,
    retourne            BOOLEAN     DEFAULT FALSE,
 
    FOREIGN KEY (livre_id) REFERENCES livres(id)
);

INSERT INTO emprunts (livre_id, nom_emprunteur, date_emprunt, date_retour_prevue, retourne) VALUES
    (1, 'Yassine El Amrani',  '2024-11-01', '2024-11-15', TRUE),   
    (2, 'Sara Benali',        '2024-11-10', '2024-11-24', FALSE), 
    (3, 'Karim Tahir',        '2024-11-05', '2024-11-19', TRUE),  
    (4, 'Nadia Oufkir',       '2024-11-20', '2024-12-04', FALSE), 
    (5, 'Omar Cherkaoui',     '2024-11-15', '2024-11-29', FALSE), 
    (6, 'Fatima Zohra',       '2024-10-01', '2024-10-15', TRUE);

SELECT
    livres.titre          AS titre_livre,
    e.nom_emprunteur,
    e.date_emprunt,
    e.date_retour_prevue,
    e.retourne
FROM emprunts e
JOIN livres ON e.livre_id = livres.id;

SELECT
    livres.titre          AS titre_livre,
    e.nom_emprunteur,
    e.date_emprunt,
    e.date_retour_prevue
FROM emprunts e
JOIN livres ON e.livre_id = livres.id
WHERE e.retourne = FALSE;