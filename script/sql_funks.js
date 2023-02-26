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
const db = require('./connection.js');
// import table view
const cTable = require('console.table');





// VIEW ALL EMPLOYEES
function viewEmployees(){
    db.query('SELECT * FROM employee', function (err, results){
        const yeebus = JSON.parse(results);
         console.log(yeebus);
         console.log('VIEW EMPLYS FUNCTION EXECUTED');
    })
    
}

// ADD NEW EMPLOYEE
function addEmployee(){
    console.log("Add new employee");

    inquirer
    .prompt([
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
        },
        {
            type: 'input',
            message: 'Manager ID? (1,2,3,4)',
            name: 'lastname',
        }
    ])
    .then ((addEmpResponse) => {
        console.log(addEmpResponse);

        db.query('INSERT INTO employee (id, fist_name, last_name, job_role_id')

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
        if (err) throw err;
        console.log(results);
    })
}

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
}

// VIEW ALL DEPARTMENTS
function viewAllDepartments (){
    db.query('SELECT * FROM department', function (err, results){
        console.log(json.results);
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