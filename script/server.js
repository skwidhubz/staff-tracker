/* eslint-disable no-unused-vars */
require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working
// server file
// import express js
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
// Import functions from SQL Function package
const sqlFunks = require('./sql_funks')
// import dotenv
// require('dotenv').config();


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
     //   password: process.env.PASSWORD,
       password: 'yeebs2023',
       database: 'staff_tracker_db'
     },
     console.log(`Connected to the staff_tracker database.`)
   );

const inquirer = require('inquirer'); //import inquirer package
const viewEmployees = require('./sql_funks');

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

          if (response.main == 'View All Employees'){
               sqlFunks.viewEmployees();
               introQuestions();

          } else if (response.main == 'Add Employee'){
               sqlFunks.addEmployee();
               

          } else if (response.main == 'Update Employee Role'){
               sqlFunks.updateEmployee();
               introQuestions();

          } else if (response.main == 'View All Roles'){
               sqlFunks.displayRoles();
               introQuestions();

          } else if (response.main == 'Add Role'){
               sqlFunks.addRole();
               introQuestions();

          } else if (response.main == 'View All Departments'){
               sqlFunks.viewAllDepartments();
               introQuestions();

          } else if (response.main == 'Add Department'){
               sqlFunks.addNewDepartment();
               introQuestions();

          } else if (response.main == 'Quit'){
               db.query('quit', function (err, results) {
               console.log("quit application")});
          } 

     }))};

introQuestions();

// example SQL :: db.query('SELECT * FROM students', function (err, results) {
//   console.log(results);

module.exports = db
module.exports = introQuestions