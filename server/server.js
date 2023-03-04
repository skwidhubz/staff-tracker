const { prompt } = require('inquirer');
require('dotenv').config(); // import dotenv
const cTable = require('console.table'); // import table view
const express = require('express'); // import express js
const mysql = require('mysql2'); // Import and require mysql2
const db = require('./connection.js'); // Import db function
const { response } = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// MODULE FUNCTIONS PER INTRO QUESTION CHOICES

          // VIEW ALL EMPLOYEES
          function viewEmployees(){
               db.query('SELECT * FROM employee', function (err, results){
                    console.table(results);
                    if (err) throw console.error(err);
                    introQuestions();
               })};
          
          // ADD NEW EMPLOYEE
          function addEmployee(){
               prompt([
                   {
                       type: 'input',
                       name: 'first_name',
                       message: 'Your First Name?',
                   },
                   {
                       type: 'input',
                       name: 'last_name',
                       message: 'Your Last Name?',
                   }
               ])
               .then(answer => {
                   const parameters = [answer.first_name, answer.last_name]
                   const roles_var = `SELECT job_role.id, job_role.title FROM job_role`;
           
                   db.query(roles_var, (err, data) => {
                       if(err) return console.log(err);
                       const roles = data.map(({ id, title }) => ({ name:title, value:id}));
           
                       prompt([
                           {
                               type: 'list',
                               name: 'role',
                               message: 'What is your role?',
                               choices: roles
                           }
                       ])
                       .then(rolesChoice => {
                           const role = rolesChoice.roles;
                           parameters.push(roles);
           
                           showEmployees();
           
                      })
                   })
               })
           };
          
          // UPDATE EXISTING EMPLOYEE
          function updateEmployee(){
               const employeemysql = `SELECT * FROM employee`;
           
               db.query(employeemysql, (err, data) => {
           
                   const employee = data.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));
           
                   prompt([
                       {
                           type: 'list',
                           name: 'name',
                           message: 'Which employee do we want to update?',
                           choices: employees
                       }
                   ])
                       .then(employeeChoice => {
                           const employee = employeeChoice.name;
                           const parameters = [];
                           parameters.push(employee);
           
                           const role_var = `SELECT * FROM job_role`;
           
                           db.query(role_var, (err, data) => {
                               if (err) return console.log(err);
                               const roles = data.map(({ id, title }) => ({ name: title, value: id }));
           
                               prompt([
                                   {
                                       type: 'list',
                                       name: 'role',
                                       message: 'What is the new role?',
                                       choices: roles
                                   }
                               ])
                                   .then(roleChoice => {
                                       const role = roleChoice.role;
                                       parameters.push(role);
                                       let employee = parameters[0]
                                       parameters[0] = role
                                       parameters[1] = employee
                                       const mysql = `UPDATE employee SET job_role_id = ? WHERE id = ?`;
           
                                       db.query(mysql, parameters, (err, result) => {
                                           if (err) return console.log(err);
                                           console.log('Role has been updated.');
           
                                           viewEmployees();
                                       })
                                   })
                           })
                       })
               })
           };
          
          // DISPLAY ALL ROLES
          function displayRoles(){
               db.query('SELECT * FROM job_role', function (err, results){
                    console.table(results);
                    if (err) throw console.error(err);
                    introQuestions();
               })
          };
          
          // ADD ROLE
          function addRole(){
               prompt([
                   {
                       type: 'input',
                       name: 'roles',
                       message: "What do you want to add?",
                   },
                   {
                       type: 'input',
                       name: 'salary',
                       message: 'What is your yearly salary?',
                   }
               ])
                   .then(answer => {
                       const parameters = [answer.roles, answer.salary];
                       const roles_var = `SELECT name, id FROM department`;
           
                       db.query(roles_var, (err, data) => {
                           if (err) return console.log(err);
                           const department_var = data.map(({ name, id }) => ({ name: name, value: id }));
           
                           db.prompt([
                               {
                                   type: 'list',
                                   name: 'department_var',
                                   message: "What department is this role in?",
                                   choices: department_var
                               }
                           ])
                               .then(department_varChoice => {
                                   const department_var = department_varChoice.department_var;
                                   parameters.push(department_var);
                                   const mysql = `INSERT INTO job_role (title, salary, department_id) VALUES (?,?,?)`;
           
                                   db.query(mysql, parameters, (err, result) => {
                                       if (err) return console.log(err);
                                       console.log('Added' + answer.roles + "to roles");
                                       displayRoles();
                                   });
                               });
                       });
                   });
           };
          
          // VIEW ALL DEPARTMENTS
          function viewAllDepartments (){
               db.query('SELECT * FROM department', function (err, results){
                    console.table(results);
                    if (err) throw console.error(err);
                    introQuestions();
               })};
          
          // ADD NEW DEPARTMENT
          function addNewDepartment(){
               prompt([
                   {
                       type: 'input',
                       name: 'department',
                       message: 'What department do you want to add?',
                   }
               ])
                   .then(answer => {
                       const mysql = `INSERT INTO department (name) VALUES (?)`;
                       db.query(mysql, answer.department, (err, results) => {
                           if (err) return console.log(err);
                           console.log('Added' + answer.department + "to departments");
           
                           viewAllDepartments();
                       });
                   });
           };
          
          // EXIT APPLICATION
          function exitApplication(){
          db.query('quit;', function (err, results) {
               console.log("Byeee!")})
          };

          // END FUNCTIONS FOR QUESTION SET

var yeebs = `

███████ ████████  █████  ███████ ███████     ████████ ██████   █████   ██████ ██   ██ ███████ ██████  
██         ██    ██   ██ ██      ██             ██    ██   ██ ██   ██ ██      ██  ██  ██      ██   ██ 
███████    ██    ███████ █████   █████          ██    ██████  ███████ ██      █████   █████   ██████  
     ██    ██    ██   ██ ██      ██             ██    ██   ██ ██   ██ ██      ██  ██  ██      ██   ██ 
███████    ██    ██   ██ ██      ██             ██    ██   ██ ██   ██  ██████ ██   ██ ███████ ██   ██ 
______________________________________________________________________________________________________

`;

console.log("\x1b[32m", yeebs);

console.log(`\x1b[42m" "\x1b[30m" ..:: A CLI application to track employees in an organisation ::.. "\x1b[0m`);

function introQuestions(){

     // inquirer


     prompt([
          {
               type: 'list',
               message: 'What would you like to do?',
               name: 'main',
               choices: [
                    'View All Employees', // 0
                    'Add Employee', // 1
                    'Update Employee Role', // 2
                    'View All Roles', // 3
                    'Add Role', // 4
                    'View All Departments', // 5
                    'Add Department', // 6
                    'Quit' // 7
               ]
           }
     ])

     .then((response => {

          console.log("response received"); 

          if (response.main == 'View All Employees'){
               viewEmployees();
               introQuestions();
          } 
          
          if (response.main == 'Add Employee'){
               addEmployee();
          } 

          if (response.main == 'Update Employee Role'){
               updateEmployee();
               introQuestions();
          } 

          if (response.main == 'View All Roles'){
               displayRoles();
               introQuestions();
          }
          
          if (response.main == 'Add Role'){
               addRole();
               introQuestions();
          } 
          
          if (response.main == 'View All Departments'){
               viewAllDepartments();
               introQuestions();
          } 
          
          if (response.main == 'Add Department'){
               addNewDepartment();
               introQuestions();
          } 
          
          if (response.main == 'Quit'){
              exitApplication();
          }
     }
     ));}

introQuestions();

// module.exports = db
// module.exports = introQuestions;
