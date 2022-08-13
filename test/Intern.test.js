const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with 'name, email, id and school' properties and can create an new Intern", () => {
      const internObject = new Intern(
        "Maria",
        123,
        "test@gmail.com",
        "testschool"
      );
      expect(internObject instanceof Intern).toEqual(true);
    });
  });

  it("creates a new Intern object and 4 properties", () => {
    const internObject = new Intern(
      "Maria",
      123,
      "test@gmail.com",
      "testschool"
    );

    expect(internObject.name).toEqual(expect.any(String));
    expect(internObject.id).toEqual(expect.any(Number));
    expect(internObject.email).toEqual(expect.any(String));
    expect(internObject.school).toEqual(expect.any(String));
  });

  it("Gets name of new Intern through getName method", () => {
    const internObject = new Intern(
      "Maria",
      123,
      "test@gmail.com",
      "testschool"
    );

    expect(internObject.getName()).toEqual(expect.any(String));
  });

  // gets id from getId()
  it("Gets Id of new Intern through getId method", () => {
    const internObject = new Intern(
      "Maria",
      123,
      "test@gmail.com",
      "testschool"
    );

    expect(internObject.getId()).toEqual(expect.any(Number));
  });

  // gets emails from getEmail()
  it("Gets Email of new Intern through getEmail method", () => {
    const internObject = new Intern(
      "Maria",
      123,
      "test@gmail.com",
      "testschool"
    );

    expect(internObject.getEmail()).toEqual(expect.any(String));
  });

  // gets emails from getEmail()
  it("Gets School of new Intern through getSchool method", () => {
    const internObject = new Intern(
      "Maria",
      123,
      "test@gmail.com",
      "testschool"
    );

    expect(internObject.getSchool()).toEqual(expect.any(String));
  });

  // gets role from getRole()
  it("Gets Role of new Intern through getRole method", () => {
    const internObject = new Intern(
      "Maria",
      123,
      "test@gmail.com",
      "testschool"
    );

    expect(internObject.getRole()).toEqual("Intern");
  });
});
