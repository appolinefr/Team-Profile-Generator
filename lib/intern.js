const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    super(id, "name", "email");
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
  // —overridden to return 'Intern'
}
