const generateHtml = require("../generateHtml");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const questions = [
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
  {
    type: "list",
    message: "Please add a new employee",
    name: "adding",
    choices: ["Engineer", "Intern", "I am finished building my team"],
  },
];

//function to write html file
function writeToFile(data) {
  return fs.writeFileSync(
    path.join(process.cwd(), "../../dist/teamProfile.html"),
    generateHtml(data),
    (err) =>
      err
        ? console.log(err)
        : console.log("Your page was successfully created!")
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile(data);
  });
}

// Function call to initialize app
init();
