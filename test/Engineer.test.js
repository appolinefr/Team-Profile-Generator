const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with 'name, email, id and username' properties and can create an new Engineer", () => {
      const engineerObject = new Engineer(
        "Maria",
        123,
        "test@gmail.com",
        "testusername"
      );
      expect(engineerObject instanceof Engineer).toEqual(true);
    });
  });

  it("creates a new Engineer object and 4 properties", () => {
    const engineerObject = new Engineer(
      "Maria",
      123,
      "test@gmail.com",
      "testusername"
    );

    expect(engineerObject.name).toEqual(expect.any(String));
    expect(engineerObject.id).toEqual(expect.any(Number));
    expect(engineerObject.email).toEqual(expect.any(String));
    expect(engineerObject.github).toEqual(expect.any(String));
  });

  it("Gets name of new Engineer through getName method", () => {
    const engineerObject = new Engineer(
      "Maria",
      123,
      "test@gmail.com",
      "testusername"
    );

    expect(engineerObject.getName()).toEqual(expect.any(String));
  });

  // gets id from getId()
  it("Gets Id of new Engineer through getId method", () => {
    const engineerObject = new Engineer(
      "Maria",
      123,
      "test@gmail.com",
      "testusername"
    );

    expect(engineerObject.getId()).toEqual(expect.any(Number));
  });

  // gets emails from getEmail()
  it("Gets Email of new Engineer through getEmail method", () => {
    const engineerObject = new Engineer(
      "Maria",
      123,
      "test@gmail.com",
      "testusername"
    );

    expect(engineerObject.getEmail()).toEqual(expect.any(String));
  });

  // gets emails from getEmail()
  it("Gets github username of new Engineer through getGithub method", () => {
    const engineerObject = new Engineer(
      "Maria",
      123,
      "test@gmail.com",
      "testusername"
    );

    expect(engineerObject.getGithub()).toEqual(expect.any(String));
  });

  // gets role from getRole()
  it("Gets Role of new Engineer through getRole method", () => {
    const engineerObject = new Engineer(
      "Maria",
      123,
      "test@gmail.com",
      "testusername"
    );

    expect(engineerObject.getRole()).toEqual("Engineer");
  });
});
