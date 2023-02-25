// eslint-disable

const { up } = require("inquirer/lib/utils/readline");

// import express js
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
// import dotenv
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: process.env.PASSWORD,
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