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


// add employee
const addEmployee = ()=>{
    inquirer
    .prompt([
        {
            type:"list",
            name:"role",
            choices:["Engineer", "Intern"]
        },
        {
            type:"input",
            name:"name",
            message:"What is the name of the engineer of the team?",
        },
        {
            type:"input",
            name:"ID",
            message:"What is the engineer employee ID?",
        },
        {
            type:"input",
            name:"email",
            message:"what is the engineer email address?",
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
    .then (employeeInput=>{
        let {name, ID, email, role, github, school, oneMore} = employeeInput;
        let employee;
        
        // engineer
        if (role === "Engineer"){
            employee = new Engineer (name, ID, email, github);
            console.log(employee)
        }
        
        // intern
        if (role === "Intern"){
            employee = new Intern (name, ID, email, school);
            console.log(employee)
        }

        teamCards.push(employee);

        // if want to add one more employee, run addEmployee again
        if (oneMore) {
            return addEmployee(teamCards);
        }
        else{
            return teamCards;
        }
    })
}


// add manager prompts
const addManager = ()=>{
    return inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the name of the manager of the team?",
        },
        {
            type:"input",
            name:"ID",
            message:"What is the manager employee ID?",
        },
        {
            type:"input",
            name:"email",
            message:"what is the manager email address?",
        },
        {
            type:"input",
            name:"officeNumber",
            message:"What is the office number?",
        },
    ])
    .then (managerInput => {
        const {name, ID, email, officeNumber} = managerInput;
        const manager = new Manager (name, ID, email, officeNumber);
        teamCards.push(manager);
        console.log(manager);
        addEmployee();
    })
}

// function to generate the HTML
const writeFile = data =>{
    fs.writeFile("./dist/index.html", data, err=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Your team profile has been generated successfully! Please check the dist folder.")
        }
    })
};
function startApp(){
    addManager()
    .then(teamCards => {
        return generateHTML(teamCards);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
}
startApp();
