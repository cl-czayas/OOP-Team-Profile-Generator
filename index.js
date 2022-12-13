const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
team = [];

function runApp () {

    function createTeam () {
        inquirer.prompt([{
        type: "list",
        message: "What type of employee would you like to add to your team?",
        name: "addEmployee",
        choices: ["Manager", "Engineer", "Intern", "Done."]
    }]).then(function (userInput) {
        switch(userInput.addEmployee) {
            case "Manager":
            addManager();
            break;
            
            case "Engineer":
            addEngineer();
            break;
            
            case "Intern":
            addIntern();
            break;

            default: 
            generateHTML();
            }
        })
    }

//EMPLOYEE PROMPTS START

function addEngineer() {
        inquirer.prompt([
        {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
        },

        {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID number?" 
        },

        {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?"
        },

        {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
        }

    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        team.push(engineer);
        createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
        {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
        },

        {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?" 
        },

        {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
        },

        {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
        }

    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        team.push(intern);
        createTeam();
    });
}


    function addManager() {
    inquirer.prompt ([
        {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
        },

        {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID number?"
        },

        {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?"
        },

        {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?"
        }

    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        team.push(manager);
        createTeam();
        });
    }
}

// const generateHTML =

runApp();

