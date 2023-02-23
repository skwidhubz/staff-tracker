-- INSERT INTO products (id, product_name, category_name)
-- VALUES (1, "spinach", "produce"),
--        (2, "peanut butter", "staples"),
--        (3, "peas-canned", "canned goods"),
--        (4, "ice cream", "frozen"),
--        (5, "potato chips", "snacks");
       

INSERT INTO  department (id, dep_name)
VALUES  (1, "engineering"),
        (2, "sales"),
        (3, "management"),
        (4, "support");

INSERT INTO job_role (id, title, salary, department_id)
VALUES  (1, "engineer", 50000, 1),
        (2, "salesperson", 70000, 2),
        (3, "CEO", 100000, 3),
        (4, "manager", 80000, 3),
        (5, "call operator", 20000, 4),
        (6, "technician", 40000, 5);

INSERT INTO employee (id, first_name, last_name, job_role_id, manager_id)
VALUES  (1, "james", "davis", 6, 4),
        (2, "kelly", "slater", 5, 4),
        (3, "honey", "baker", 3),
        (4, "gittus", "hubbius", 1, 4),

