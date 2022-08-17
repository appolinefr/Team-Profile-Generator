//this will create the manager part
generateManager = (manager) => {
  return `<div class="col-4 col-sm-6 col-lg-3 m-4">
        <div class="card">
          <div class="card-header bg-info text-white text-center"> 
          <h2> ${manager.getName()}</h2>
          <h3> 🤓 ${manager.getRole()}</h3>
          </div>
          <div class="card-body bg-light">
            <ul class="list-unstyled">
              <li class='border p-2 mt-2 bg-white'>ID: ${manager.getId()}</li>
              <li class='border p-2 bg-white'>Email: <a href="mailto:${manager.getEmail()}" target="_blank">${manager.getEmail()}</a></li>
              <li class='border p-2 bg-white'>Office number: ${manager.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>
      </div>`;
};

//this will create the engineer part
generateEngineer = (engineer) => {
  return `<div class="col-4 col-sm-6 col-lg-3 m-4">
        <div class="card">
          <div class="card-header bg-info text-white text-center"> 
          <h2> ${engineer.getName()}</h2>
          <h3> ✏️ ${engineer.getRole()}</h3>
          </div>
          <div class="card-body bg-light">
            <ul class="list-unstyled">
              <li class='border p-2 mt-2 bg-white'>ID: ${engineer.getId()}</li>
              <li class='border p-2 bg-white'>Email: <a href="mailto:${engineer.getEmail()}" target="_blank">${engineer.getEmail()}</a></li>
              <li class='border p-2 bg-white'>Github username: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
          </div>
        </div>
      </div>`;
};

//this will create the intern part
generateIntern = (intern) => {
  return `<div class="col-4 col-sm-6 col-lg-3 m-4">
        <div class="card">
          <div class="card-header bg-info text-white text-center "> 
          <h2> ${intern.getName()}</h2>
          <h3> 🎓 ${intern.getRole()}</h3>
          </div>
          <div class="card-body bg-light">
            <ul class="list-unstyled">
              <li class='border p-2 mt-2 bg-white'>ID: ${intern.getId()}</li>
              <li class='border p-2 bg-white'>Email <a href="mailto:${intern.getEmail()}" target="_blank">${intern.getEmail()}</a></li>
              <li class='border p-2 bg-white'>School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>`;
};

// this will generate a card for each employee in the array
generateEmployees = (teamMembers) => {
  let finalHtml = "";

  for (i = 0; i < teamMembers.length; i++) {
    console.log(teamMembers[i].getRole());
    if (teamMembers[i].getRole() === "Manager") {
      finalHtml = finalHtml + generateManager(teamMembers[i]);
    }
    if (teamMembers[i].getRole() === "Engineer") {
      finalHtml = finalHtml + generateEngineer(teamMembers[i]);
    }
    if (teamMembers[i].getRole() === "Intern") {
      finalHtml = finalHtml + generateIntern(teamMembers[i]);
    }
  }
  return finalHtml;
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
        ${generateEmployees(teamMembers)}
        </div>
      </section>
    </main>
  </body>
</html>`;
};

module.exports = generateHtml;
