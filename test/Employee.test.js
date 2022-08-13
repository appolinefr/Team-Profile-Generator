const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with 'name, email and id' properties and can create an new employee", () => {
      const employeeObject = new Employee(12, "Maria", "test@gmail.com");
      expect(employeeObject instanceof Employee).toEqual(true);
    });
  });

  it("creates a new employee object and 3 properties", () => {
    const employeeObject = new Employee(123, "Maria", "test@gmail.com");

    expect(employeeObject.id).toEqual(expect.any(Number));
    expect(employeeObject.name).toEqual(expect.any(String));
    expect(employeeObject.email).toEqual(expect.any(String));
  });

  it("Gets name of new employee through getName method", () => {
    const employeeObject = new Employee(123, "Maria", "test@gmail.com");

    expect(employeeObject.getName()).toEqual(expect.any(String));
  });

  // gets id from getId()
  it("Gets Id of new employee through getId method", () => {
    const employeeObject = new Employee(123, "Maria", "test@gmail.com");

    expect(employeeObject.getId()).toEqual(expect.any(Number));
  });

  // gets emails from getEmail()
  it("Gets Email of new employee through getEmail method", () => {
    const employeeObject = new Employee(123, "Maria", "test@gmail.com");

    expect(employeeObject.getEmail()).toEqual(
      expect.stringContaining(employeeObject.email.toString())
    );
  });

  // gets role from getRole()
  it("Gets Role of new employee through getRole method", () => {
    const employeeObject = new Employee(123, "Maria", "test@gmail.com");

    expect(employeeObject.getRole()).toEqual("Employee");
  });
});
