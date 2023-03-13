// node module
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// team profiles
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// generate HTML
const generateHTML = require("./src/generateHTML");

// team
const teamCards = [];

// Generate the HTML code for the team profile page


// add manager prompts
const addManager = ()=>{
    inquirer
        .prompt([
        {
            type:"input",
            name:"name",
            message:"What is the name of the manager of the team?",
        },
        {
            type:"input",
            name:"id",
            message:"What is the manager employee ID?",
        },
        {
            type:"input",
            name:"email",
            message:"what is the manager email address?",
        },
        {
            type:"input",
            name:"office",
            message:"What is the office number?",
        },
    ])
    .then ((managerInput) => {
        const {name, id, email, office} = managerInput;
        const manager = new Manager (name, id, email, office);
        teamCards.push(manager);
        console.log(manager);
        addEmployee();
    })
};


// add employee
const addEmployee = ()=>{
    inquirer
    .prompt([
        {
            type:"input",
            name:"name",
            message:"What is the name of the employee on the team?",
        },

        {
            type:"list",
            name:"role",
            choices:["Engineer", "Intern"]
        },
        
        {
            type:"input",
            name:"id",
            message:"What is the employee ID?",
        },
        {
            type:"input",
            name:"email",
            message:"what is the email address?",
        },
        {
            type:"input",
            name:"github",
            when: (input) => input.role === "Engineer",
            message:"What is the Github username of the engineer?",
        },
        {
            type:"input",
            name:"school",
            when: (input) => input.role === "Intern",
            message:"What is the school of the intern?",
        },
        {
            type: "confirm",
            name:"oneMore",
            message:"Would you like to add one more employee to the team?",
            default: false
        }
    ])
    .then((employeeInput)=>{
        let {name, id, email, role, github, school, oneMore} = employeeInput;
        let employee;
        
        // engineer
        if (role === "Engineer"){
            employee = new Engineer (name, id, email, github);
            console.log(employee)
        }
        
        // intern
        if (role === "Intern"){
            employee = new Intern (name, id, email, school);
            console.log(employee)
        }

        teamCards.push(employee);

        // if adding one more employee, run addEmployee again
        if (oneMore) {
            addEmployee(teamCards);
        }
        else{
            generate();
        }
    })
}

// function to generate the HTML

const generate = () => {
    fs.writeFile('./dist/index.html', generateHTML(teamCards), (err) => {
        if (err) {
            console.log(err);
          } else {
            console.log("Your team profile has been generated successfully!");
           }
    })
    }

const startApp = () => {
    addManager();
}
startApp();
