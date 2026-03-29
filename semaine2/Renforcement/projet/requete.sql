SELECT DISTINCT b.id, b.title, b.author
FROM books b
JOIN copies c ON b.id = c.book_id
WHERE c.status = 'available';

SELECT 
    b.title,
    COUNT(l.id) AS total_loans
FROM loans l
JOIN copies c ON l.copy_id = c.id
JOIN books b ON c.book_id = b.id
WHERE YEAR(l.borrow_date) = YEAR(CURDATE())
GROUP BY b.id, b.title
ORDER BY total_loans DESC;

SELECT 
    m.name,
    YEAR(l.borrow_date) AS year,
    MONTH(l.borrow_date) AS month,
    COUNT(l.id) AS total_loans
FROM loans l
JOIN members m ON l.member_id = m.id
GROUP BY m.id, year, month
ORDER BY m.name, year, month;