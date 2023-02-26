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
               console.log("Add new employee");
          
               // inquirer
               prompt([
               {
                    type: 'list',
                    message: 'What is the employee department?',
                    name: 'department',
                    choices: [
                         'Engineering', 
                         'Sales', 
                         'Management', 
                         'Support', 
                              ]      
               },
               {
                    type: 'input',
                    message: 'What is the job role?',
                    name: 'role',
               },
               {
                    type: 'input',
                    message: 'What is the salary?',
                    name: 'salary',
               },
               {
                    type: 'input',
                    message: 'First name?',
                    name: 'firstname',
               },
               {
                    type: 'input',
                    message: 'Last name?',
                    name: 'lastname',
               },
               ])
               .then ((response) => {
               console.log(response);

               const addEmployeeQuery = `
                    INSERT INTO employee (first_name, last_name) VALUES
                    (${response.firstname}, ${response.lastname});
                    INSERT INTO job_role (title, salary) VALUES 
                    (${response.role}, ${response.salary});
                    INSERT INTO department (dep_name) VALUES (${response.department});
                    `
               db.query(addEmployeeQuery, (err, results) => {
                    if (err) throw console.error(err);
                    introQuestions();
               })});
          };
          
          // UPDATE EXISTING EMPLOYEE
          function updateEmployee(){
               console.log("update current employee");
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
               console.log("add a new role");
               inquirer
               .prompt([
               {  
               type: 'input',
               message: 'What department does the new role exist in?',
               name: 'department'
               },
               {
               type: 'input',
               message: 'What is the new job role?',
               name: 'role',
               }])
               .then ((addRoleResponse) => {
               console.log(addRoleResponse);
               introQuestions();
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
               console.log("add department");
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
