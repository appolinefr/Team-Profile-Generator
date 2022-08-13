generateEmployees = (teamMembers) => {

   let finalHtml = [];

   finalHtml.push(
     teamMembers
       .filter((employee) => employee.getRole() === "Manager")
       .map((manager) => generateManager(manager))
   );
   finalHtml.push(
     teamMembers
       .filter((employee) => employee.getRole() === "Engineer")
       .map((engineer) => generateEngineer(engineer))
       .join("")
   );
   finalHtml.push(
     teamMembers
       .filter((employee) => employee.getRole() === "Intern")
       .map((intern) => generateIntern(intern))
       .join("")
   );

  //this will create the manager part
  generateManager = (manager) => {
    `<div class="card">
   <h3 class="card-header bg-info">${manager.getRole()}</h3>
    <h3 class="card-header bg-info">${manager.getName()}</h3>
    <div class="card-body">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th scope="row">ID: ${manager.getId()}</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Email: ${manager.getEmail()}</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Office number: ${manager.getOfficeNumber()}</th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>;`;
  };

  //this will create the engineer part
  generateEngineer = (engineer) => {
    `<div class="card">
   <h3 class="card-header bg-info">${engineer.getRole()}</h3>
    <h3 class="card-header bg-info">${engineer.getName()}</h3>
    <div class="card-body">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th scope="row">ID: ${engineer.getId()}</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Email: ${engineer.getEmail()}</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">GitHub username: ${engineer.getGithub()}</th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>;`;
  };

  //this will create the intern part
  generateIntern = (intern) => {
    `<div class="card">
   <h3 class="card-header bg-info">${intern.getRole()}</h3>
    <h3 class="card-header bg-info">${intern.getName()}</h3>
    <div class="card-body">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th scope="row">ID: ${intern.getId()}</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Email: ${intern.getEmail()}</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">GitHub username: ${intern.getSchool()}</th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>;`;
  };

  return finalHtml.join("");
};

//this will create the html page
generateHtml = (teamMembers) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Team Profile</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <header class="jumbotron bg-danger text-light mb-5">
      <div class="container text-center">
        <h1 class="p-5">My Team</h1>
      </div>
    </header>
    <main class="container">
      <section class="row justify-content-center">
        <div class="col-12 col-sm-6 col-lg-3 m-4">
        ${generateEmployees(teamMembers)}
        </div>
      </section>
    </main>
  </body>
</html>`;
};

module.exports = generateHtml;
