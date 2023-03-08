const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
team = [];

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
            generateFile();
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



const generateHTML = (team) => {
    const manager = team.find((member) => member instanceof Manager);

// == MANAGER CARD HTML STARTS ==
    const managerCard = `

    <div class="card">
    <div class="card-content">
        <p class="title">
            ${manager.getName()}
        </p>
        <p class="subtitle">
            ${manager.getRole()}
        </p>

        <footer class="card-footer">
            <p class="card-footer-item">
            <span>
                ID: ${manager.getId()}
            </span>
            </p>

            <p class="card-footer-item">
            <span>
                Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>                </span>
            </p>

            <p class="card-footer-item">
            <span>
            Office Number: ${manager.getOfficeNumber()}               
            </span>
            </p>
        </footer>
    </div>
</div>
`;

// == TEAM CARDS HTML STARTS ==
    const teamCards = team
        .filter((member) => !(member instanceof Manager))
        .map((member) => {
        let info = "";
        if (member instanceof Engineer) {
            info = `GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a>`;
        } else if (member instanceof Intern) {
            info = `School: ${member.getSchool()}`;
        }
        return `
        <div class="card">
        <div class="card-content">
            <p class="title">
                ${member.getName()}
            </p>
            <p class="subtitle">
                ${member.getRole()}
            </p>

            <footer class="card-footer">
                <p class="card-footer-item">
                <span>
                    ID: ${member.getId()}
                </span>
                </p>

                <p class="card-footer-item">
                <span>
                    Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a>                </span>
                </p>

                <p class="card-footer-item">
                <span>
                ${info}                
                </span>
                </p>
            </footer>
        </div>
    </div>
`;
}).join("");
// == FULL HTML STARTS ==
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">
        </head>

        <body>        
        <main>
            <section class="hero is-info">
                <div class="hero-body">
                <p class="title">
                    My Team
                </p>
                <p class="subtitle">
                    This is our contact info!
                </p>
                </div>
            </section>

            <section class='content'>
                <div>
                    ${managerCard}
                    ${teamCards}
                </div>
            </section>
        </main>
        </body>
    </html>
`;
};

function generateFile() {
    const htmlData = generateHTML(team);
    fs.writeFile("./dist/teamPage.html", htmlData, (err) =>
        err ? console.error(err) : console.log("Your HTML file has been generated!")
    );
}

createTeam();

