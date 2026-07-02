# WorkForcePro_SQL_Queries.sql

-- 1. Return all employees and their departments

SELECT
    employee_id,
    name,
    email,
    department
FROM employees;

-- 2. Return employees who have completed all assigned trainings



SELECT
    e.employee_id,
    e.name
FROM employees e
WHERE NOT EXISTS (
    SELECT 1
    FROM employee_trainings et
    WHERE et.employee_id = e.id
      AND et.status <> 'Completed'
);

-- 3. Count trainings per employee

SELECT
    e.employee_id,
    e.name,
    COUNT(et.training_id) AS total_trainings
FROM employees e
LEFT JOIN employee_trainings et
    ON e.id = et.employee_id
GROUP BY
    e.employee_id,
    e.name
ORDER BY total_trainings DESC;

-- 4. Certifications expiring within 30 days
SELECT
    e.employee_id,
    e.name,
    c.certification_name,
    c.expiry_date
FROM certifications c
JOIN employees e
    ON c.employee_id = e.id
WHERE c.expiry_date
BETWEEN CURRENT_DATE
AND CURRENT_DATE + INTERVAL '30 DAY'
ORDER BY c.expiry_date;

-- 5. Employees with overdue trainings

SELECT DISTINCT
    e.employee_id,
    e.name
FROM employees e
JOIN employee_trainings et
    ON e.id = et.employee_id
WHERE et.status <> 'Completed';

-- 6. Top 5 employees by completed trainings

SELECT
    e.employee_id,
    e.name,
    COUNT(*) AS completed_trainings
FROM employees e
JOIN employee_trainings et
    ON e.id = et.employee_id
WHERE et.status = 'Completed'
GROUP BY
    e.employee_id,
    e.name
ORDER BY completed_trainings DESC
LIMIT 5;