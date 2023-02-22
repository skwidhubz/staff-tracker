// server file

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
               type: 'input',
               message: 'What would you like to do?',
               name: 'school',
               choices: [
                    'View All Employees',
                    'Add Employee',
                    'Update Employee Role',
                    'View All Roles',
                    'Add Role',
                    'View All Departments',
                    'Add Department',
                    'Quit'
               ]
           }
     ]

     prompt (intQs)

}

// if response = 1 == display table EMPLOYEES
// if response = 2 == update employee table
// "" 3 == display table job_role
// "" 4 == edit table employee, parameter role
// "" 5 == display table department
// "" 6 == edit table department, add new department
// "" 7 == exit application (syntax == "quit;")
