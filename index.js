const employee = require("./lib/employee");
const manager = require("./lib/manager");
const intern = require("./lib/intern");
const engineer = require("./lib/engineer");
const generateHtml = require("./src/generateHtml");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

createManager = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is name of the team's manager?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is the epmloyee ID of the manager?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is the email address of the manager?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is the office number of the manager?",
      name: "managerNumber",
    },
  ]);
};

addIntern = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the employee's name?",
      name: "name",
    },
    {
      type: "input",
      message: "Enter their epmloyee ID",
      name: "id",
    },
    {
      type: "input",
      message: "Enter their email address",
      name: "email",
    },
    {
      type: "input",
      message: "Enter their github username",
      name: "github",
    },
  ]);
};

addEngineer = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the employee's name?",
      name: "name",
    },
    {
      type: "input",
      message: "Enter their epmloyee ID",
      name: "id",
    },
    {
      type: "input",
      message: "Enter their email address",
      name: "email",
    },
    {
      type: "input",
      message: "Enter their github username",
      name: "github",
    },
  ]);
};

makeChoice = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please add a new employee",
        name: "adding",
        choices: ["Engineer", "Intern", "I am finished building my team"],
      },
    ])
    .then(
      (addEmployee = (userInput) => {
        switch (userInput) {
          case "Engineer":
            return addEngineer();
            break;

          case "Intern":
            return addIntern();
            break;

          default:
            "I am finished building my team";
            return generateHtml();
            break;
        }
      })
    );
};

//function to write html file
function writeToFile(data) {
  return fs.writeFile(
    path.join(process.cwd(), "./dist/teamProfile.html"),
    generateHtml(data),
    (err) =>
      err
        ? console.log(err)
        : console.log("Your page was successfully created!")
  );
}

// Function to initialize app
function init() {
  makeChoice().then((data) => {
    writeToFile(data);
  });
}

// Function call to initialize app
init();
