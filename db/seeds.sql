INSERT INTO department (department_id, name)
VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal')

INSERT INTO role (id, title, salary, department_id)
VALUES
(5, 'Salesperson', 150000, 1),
(6, 'Lead Engineer', 180000, 2),
(7, 'Account Manager', 120000, 3),
(8, 'Lawyer', 150000, 4)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(9, 'Dillon', 'Stoddard', 5, 1234),
(10, 'Madeline', 'Stoddard', 6, 5678)

