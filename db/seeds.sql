INSERT INTO department (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Salesperson', 150000, 1),
('Lead Engineer', 180000, 2),
('Account Manager', 120000, 3),
('Lawyer', 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Dillon', 'Stoddard', 2, NULL),
('Madeline', 'Stoddard', 4, 1);

