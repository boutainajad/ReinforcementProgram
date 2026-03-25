USE bibliotheque;

CREATE TABLE livres (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    titre           VARCHAR(200)    ,
    auteur          VARCHAR(100)    ,
    annee_parution  INT             ,
    genre           VARCHAR(50)    ,
    disponible      BOOLEAN  DEFAULT TRUE
);
INSERT INTO livres (titre, auteur, annee_parution, genre, disponible) VALUES
    ('Le Petit Prince',             'Antoine de Saint-Exupéry',  1943, 'Conte',          TRUE),
    ('1984',                        'George Orwell',             1949, 'Science-fiction', FALSE),
    ('Harry Potter tome 1',         'J.K. Rowling',              1997, 'Fantasy',         TRUE),
    ('LAlchimiste',               'Paulo Coelho',              1988, 'Roman',           FALSE),
    ('Da Vinci Code',               'Dan Brown',                 2003, 'Thriller',        TRUE),
    ('Dune',                        'Frank Herbert',             1965, 'Science-fiction', TRUE),
    ('Le Seigneur des Anneaux',     'J.R.R. Tolkien',           1954, 'Fantasy',         FALSE),
    ('Atomic Habits',               'James Clear',               2018, 'Développement',   TRUE);


SELECT * FROM livres;


SELECT * FROM livres
WHERE disponible = TRUE;


SELECT * FROM livres
WHERE annee_parution > 2000;

