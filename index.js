const generateHtml = require("../generateHtml");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

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
