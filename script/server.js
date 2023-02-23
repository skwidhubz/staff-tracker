// server file
// import express js
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'yeebs2023',
    database: 'staff_tracker_db'
  },
  console.log(`Connected to the classlist_db database.`)
);


const inquirer = require('inquirer') //import inquirer package

var yeebs = `

███████ ████████  █████  ███████ ███████     ████████ ██████   █████   ██████ ██   ██ ███████ ██████  
██         ██    ██   ██ ██      ██             ██    ██   ██ ██   ██ ██      ██  ██  ██      ██   ██ 
███████    ██    ███████ █████   █████          ██    ██████  ███████ ██      █████   █████   ██████  
     ██    ██    ██   ██ ██      ██             ██    ██   ██ ██   ██ ██      ██  ██  ██      ██   ██ 
███████    ██    ██   ██ ██      ██             ██    ██   ██ ██   ██  ██████ ██   ██ ███████ ██   ██ 

`

console.log(yeebs);

console.log("A CLI application to track employees in an organisation");

function introQuestions(){
     const intQs = [
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
     ]

     inquirer
     .prompt (intQs)

     .then((response => {

          console.log("response received"); 

          if (response == response[0]){
               db.query('SELECT * FROM employee', function (err, results){
                    console.log(results);
               })

               introQuestions();

          } else if (response == response[1]){
               addEmployee()

               function addEmployee(){
                    console.log("Add new employee");
               }

               introQuestions();

          } else if (response == response[2]){
               updateEmployee()

               function updateEmployee(){
                    console.log("update current employee");
               }

               introQuestions();

          } else if (response == response[3]){

               db.query('SELECT * FROM job_role', function (err, results){
                    console.log(results);
               })

               introQuestions();

          } else if (response == response[4]){

               addRole()

               function addRole(){
                    console.log("add a new role");
               }

               introQuestions();

          } else if (response == response[5]){

               db.query('SELECT * FROM department', function (err, results){
                    console.log(results);
               })

               introQuestions();

          } else if (response == response[6]){

               console.log("add department");
               
               introQuestions();

          } else if (response == response[7]){

               db.query('quit;', function (err, results) {
                      console.log("Byeee!")});

               introQuestions();

          } 

     }));         
}

introQuestions();

// if response = 1 == display table EMPLOYEES //follow up with question
// if response = 2 == update employee table and activate new question set
// "" 3 == display table job_role
// "" 4 == edit table employee, parameter role
// "" 5 == display table department
// "" 6 == edit table department, add new department
// "" 7 == exit application (syntax == "quit;")

// example SQL :: db.query('SELECT * FROM students', function (err, results) {
//   console.log(results);

