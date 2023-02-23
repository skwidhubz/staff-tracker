DROP DATABASE IF EXISTS staff_tracker_db;
CREATE DATABASE staff_tracker_db;

USE staff_tracker_db;

CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY,
    dep_name VARCHAR(30) NOT NULL
);

CREATE TABLE job_role (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_role_id INT,
    manager_id INT,
    FOREIGN KEY (job_role_id) REFERENCES job_role(id) ON DELETE SET NULL
);


-- JOIN - relate to tables that arent related. give me data from two places join it and show to user. 
-- EXAMPLE:
-- SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
-- FROM Orders
-- INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

