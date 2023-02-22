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
                    'Add Department'
               ]
           }
     ]

     prompt (intQs)

}