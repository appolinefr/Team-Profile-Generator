const Employee = require("./employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(id, "name", "email");
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}
