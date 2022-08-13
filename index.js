const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHtml = require("./src/generateHtml.js");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

//this empty array will hold the team members
const teamMembers = [];

//this is the first prompt and will create the manager for the team
createManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is name of the team's manager?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the employee ID of the manager?",
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
    ])
    .then((response) => {
      const manager = new Manager(
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.managerNumber
      );
      //this will push the manager to the empty array team
      teamMembers.push(manager);
      makeChoice();
    });
};

//this function will ask the user to either add more team member or finish and generate the html
makeChoice = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Please add a new employee",
        name: "adding",
        choices: ["Engineer", "Intern", "I am finished building my team"],
      },
    ])
    .then(
      (addEmployee = (response) => {
        switch (response.adding) {
          case "Engineer":
            return addEngineer();

          case "Intern":
            return addIntern();

          default:
            "I am finished building my team";
            return writeFile();
        }
      })
    );
};
//this function will add interns to the list
addIntern = () => {
  return inquirer
    .prompt([
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
        message: "What is the name of their scool?",
        name: "school",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      teamMembers.push(intern);
      makeChoice();
    });
};

//this function will add engineer to the list
addEngineer = () => {
  return inquirer
    .prompt([
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
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.gitHub
      );
      teamMembers.push(engineer);
      makeChoice();
    });
};

//function to create and write in file
writeFile = () => {
  return fs.writeFile(
    path.join(process.cwd(), "./dist/teamProfile.html"),
    generateHtml(teamMembers),
    (err) =>
      err
        ? console.log(err)
        : console.log("Your page was successfully created!")
  );
};

createManager();

// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
