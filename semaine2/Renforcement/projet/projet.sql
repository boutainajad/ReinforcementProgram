

DROP TABLE IF EXISTS loans;
DROP TABLE IF EXISTS copies;
DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS books;


CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(20) UNIQUE NOT NULL,
    published_year INT CHECK (published_year > 0)
);


CREATE TABLE copies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT NOT NULL,
    status ENUM('available', 'borrowed', 'lost') DEFAULT 'available',
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
);


CREATE TABLE members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE loans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT NOT NULL,
    copy_id INT NOT NULL,
    borrow_date DATE NOT NULL,
    due_date DATE NOT NULL,
    return_date DATE NULL,
    CHECK (due_date >= borrow_date),
    FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE CASCADE,
    FOREIGN KEY (copy_id) REFERENCES copies(id) ON DELETE CASCADE
);


INSERT INTO books (title, author, isbn, published_year) VALUES
('Book 1','Author A','ISBN001',2001),
('Book 2','Author B','ISBN002',2002),
('Book 3','Author C','ISBN003',2003),
('Book 4','Author D','ISBN004',2004),
('Book 5','Author E','ISBN005',2005),
('Book 6','Author F','ISBN006',2006),
('Book 7','Author G','ISBN007',2007),
('Book 8','Author H','ISBN008',2008),
('Book 9','Author I','ISBN009',2009),
('Book 10','Author J','ISBN010',2010),
('Book 11','Author K','ISBN011',2011),
('Book 12','Author L','ISBN012',2012),
('Book 13','Author M','ISBN013',2013),
('Book 14','Author N','ISBN014',2014),
('Book 15','Author O','ISBN015',2015),
('Book 16','Author P','ISBN016',2016),
('Book 17','Author Q','ISBN017',2017),
('Book 18','Author R','ISBN018',2018),
('Book 19','Author S','ISBN019',2019),
('Book 20','Author T','ISBN020',2020);


INSERT INTO copies (book_id, status)
SELECT id, 'available' FROM books
UNION ALL
SELECT id, 'available' FROM books
UNION ALL
SELECT id, 'available' FROM books;

INSERT INTO members (name, email) VALUES
('Member 1','m1@mail.com'),
('Member 2','m2@mail.com'),
('Member 3','m3@mail.com'),
('Member 4','m4@mail.com'),
('Member 5','m5@mail.com'),
('Member 6','m6@mail.com'),
('Member 7','m7@mail.com'),
('Member 8','m8@mail.com'),
('Member 9','m9@mail.com'),
('Member 10','m10@mail.com'),
('Member 11','m11@mail.com'),
('Member 12','m12@mail.com'),
('Member 13','m13@mail.com'),
('Member 14','m14@mail.com'),
('Member 15','m15@mail.com');


INSERT INTO loans (member_id, copy_id, borrow_date, due_date, return_date) VALUES
(1,1,'2026-01-01','2026-01-10','2026-01-09'),
(2,2,'2026-01-02','2026-01-10','2026-01-15'),
(3,3,'2026-01-03','2026-01-12',NULL),
(4,4,'2026-01-04','2026-01-12','2026-01-20'),
(5,5,'2026-01-05','2026-01-15','2026-01-14'),

(6,6,'2026-01-06','2026-01-16','2026-01-18'),
(7,7,'2026-01-07','2026-01-17',NULL),
(8,8,'2026-01-08','2026-01-18','2026-01-25'),
(9,9,'2026-01-09','2026-01-19','2026-01-18'),
(10,10,'2026-01-10','2026-01-20',NULL),

(11,11,'2026-01-11','2026-01-21','2026-01-30'),
(12,12,'2026-01-12','2026-01-22','2026-01-21'),
(13,13,'2026-01-13','2026-01-23',NULL),
(14,14,'2026-01-14','2026-01-24','2026-01-28'),
(15,15,'2026-01-15','2026-01-25','2026-01-26'),

(1,16,'2026-01-16','2026-01-26',NULL),
(2,17,'2026-01-17','2026-01-27','2026-02-05'),
(3,18,'2026-01-18','2026-01-28','2026-01-27'),
(4,19,'2026-01-19','2026-01-29',NULL),
(5,20,'2026-01-20','2026-01-30','2026-02-10'),

(6,21,'2026-01-21','2026-01-31','2026-01-30'),
(7,22,'2026-01-22','2026-02-01',NULL),
(8,23,'2026-01-23','2026-02-02','2026-02-10'),
(9,24,'2026-01-24','2026-02-03','2026-02-02'),
(10,25,'2026-01-25','2026-02-04',NULL);