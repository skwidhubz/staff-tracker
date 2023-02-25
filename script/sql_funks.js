// eslint-disable
// import dotenv
// require('dotenv').config();

// const inquirer2 = require('inquirer'); //import inquirer package

const { up } = require("inquirer/lib/utils/readline");

// import express js
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require("inquirer");
const { introQuestions } = require('./server.js');


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
    console.log(`Connected to the staff_tracker database.`)
  );



// VIEW ALL EMPLOYEES
function viewEmployees(){
    db.query('SELECT * FROM employee', function (err, results){
         console.log(results);
         console.log('VIEW EMPLYS FUNCTION EXECUTED');
    })
    
}

// ADD NEW EMPLOYEE
function addEmployee(){
    console.log("Add new employee");

    // const addEmployeeQuestions = [{
    //             type: 'list',
    //             message: 'What is the employee department?',
    //             name: 'department',
    //             choices: [
    //                   'Engineering', 
    //                   'Sales', 
    //                   'Management', 
    //                   'Support', 
    //                     ]      
    //          },
    //          {  
    //             type: 'input',
    //             message: 'What is their salary?',
    //             name: 'salary'
    //          },
    //          {
    //             type: 'input',
    //             message: 'What is the job role?',
    //             name: 'role',
    //          },
    //          {
    //             type: 'input',
    //             message: 'First name?',
    //             name: 'firstname',
    //          },
    //          {
    //             type: 'input',
    //             message: 'Last name?',
    //             name: 'lastname',
    //          }];
    

            //  console.log(addEmployeeQuestions);
    inquirer
    .prompt([{
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
        message: 'What is their salary?',
        name: 'salary'
     },
     {
        type: 'input',
        message: 'What is the job role?',
        name: 'role',
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
     }])
    .then ((addEmpResponse) => {
        console.log(addEmpResponse);
        introQuestions();
    });
    // db.query('sql code')
}

// UPDATE EXISTING EMPLOYEE
function updateEmployee(){
    console.log("update current employee");
}

// DISPLAY ALL ROLES
function displayRoles(){
    db.query('SELECT * FROM job_role', function (err, results){
        console.log(results);
    })
}

// ADD ROLE
function addRole(){
    console.log("add a new role");
}

// VIEW ALL DEPARTMENTS
function viewAllDepartments (){
    db.query('SELECT * FROM department', function (err, results){
        console.log(results);
    })}

// ADD NEW DEPARTMENT
function addNewDepartment(){
    console.log("add department");
}

// EXIT APPLICATION
function exitApplication(){
db.query('quit;', function (err, results) {
    console.log("Byeee!")})
}


module.exports = {viewEmployees, addEmployee, updateEmployee, displayRoles, addRole, viewAllDepartments, addNewDepartment, exitApplication}