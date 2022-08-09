const generateHtml = require("./generateHtml");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "Input your installation instructions",
    name: "instructions",
  },
  {
    type: "input",
    message: "What will the project be used for?",
    name: "usage",
  },
  {
    type: "input",
    message: "Input your contribution guidelines",
    name: "contribution",
  },
  {
    type: "input",
    message: "Input your test instructions",
    name: "test",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "list",
    message: "Which licence would you like to add?",
    name: "license",
    choices: [
      "Apache License v2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "None of the above",
    ],
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
