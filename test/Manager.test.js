const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with 'name, email, id and office Number properties and can create an new Manager", () => {
      const managerObject = new Manager(
        "Maria",
        123,
        "test@gmail.com",
        1234354
      );
      expect(managerObject instanceof Manager).toEqual(true);
    });
  });

  it("creates a new Manager object and 4 properties", () => {
    const managerObject = new Manager("Maria", 123, "test@gmail.com", 1234354);

    expect(managerObject.name).toEqual(expect.any(String));
    expect(managerObject.id).toEqual(expect.any(Number));
    expect(managerObject.email).toEqual(expect.any(String));
    expect(managerObject.officeNumber).toEqual(expect.any(Number));
  });

  it("Gets name of new Manager through getName method", () => {
    const managerObject = new Manager("Maria", 123, "test@gmail.com", 1234354);

    expect(managerObject.getName()).toEqual(expect.any(String));
  });

  // gets id from getId()
  it("Gets Id of new Manager through getId method", () => {
    const managerObject = new Manager("Maria", 123, "test@gmail.com", 1234354);

    expect(managerObject.getId()).toEqual(expect.any(Number));
  });

  // gets emails from getEmail()
  it("Gets Email of new Manager through getEmail method", () => {
    const managerObject = new Manager("Maria", 123, "test@gmail.com", 1234354);

    expect(managerObject.getEmail()).toEqual(expect.any(String));
  });

  // gets emails from getEmail()
  it("Gets officeNumber of new Manager through getOfficeNumber method", () => {
    const managerObject = new Manager("Maria", 123, "test@gmail.com", 1234354);

    expect(managerObject.getOfficeNumber()).toEqual(expect.any(Number));
  });

  // gets role from getRole()
  it("Gets Role of new Manager through getRole method", () => {
    const managerObject = new Manager("Maria", 123, "test@gmail.com", 1234354);

    expect(managerObject.getRole()).toEqual("Manager");
  });
});
