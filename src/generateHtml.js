generateHtml = () => {
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
        <!-- Use align-items utilities on flexbox containers to align to start, end, center, baseline, or stretch -->
        <h1 class="p-5">My Team</h1>
      </div>
    </header>
    <main class="container">
      <section class="row justify-content-center">
        <div class="col-12 col-sm-6 col-lg-3 m-4">
        //This is where the manager and other employee will be generated
        </div>
      </section>
    </main>
  </body>
</html>`;
};

generateManager = manager => {
  `<div class="card">
    <h3 class="card-header bg-info"></h3>
    <div class="card-body">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th scope="row">ID:</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Email:</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Office number:</th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>;`;
};

generateEngineer = engineer => {
  `<div class="card">
    <h3 class="card-header bg-info"></h3>
    <div class="card-body">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th scope="row">ID:</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Email:</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Office number:</th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>;`;
};

generateIntern = intern => {
  `<div class="card">
    <h3 class="card-header bg-info"></h3>
    <div class="card-body">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th scope="row">ID:</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Email:</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Office number:</th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>;`;
};


module.exports = generateHtml;
