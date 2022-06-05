const index = require("../index");
const managerHtmlGen = require("./htmlManTemp");
const engineerHtmlGen = require("./htmlEngTemp");
const internHtmlGen = require("./htmlIntTemp");
const manager = require("./htmlManTemp");

function htmlGenerator() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/css/bootstrap.min.css"
      integrity="sha512-F7WyTLiiiPqvu2pGumDR15med0MDkUIo5VTVyyfECR5DZmCnDhti9q5VID02ItWjq6fvDfMaBaDl2J3WdL1uxA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <!-- add fonts here  -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=PT+Sans+Narrow:wght@400;700&family=Tapestry&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="./assets/css/style.css"></link>
    <title>My Team</title>
</head>
<body>
    <header class="header">
        <h1 class="title">My Team</h1>
    </header>
    <main class ="main">

${index.manClass.map((person) => {
  return managerHtmlGen(person);
})}
${index.engClass.map((person) => {
  return engineerHtmlGen(person);
})}
${index.intClass.map((person) => {
  return internHtmlGen(person);
})}

    </main>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/js/bootstrap.min.js"
      integrity="sha512-NWNl2ZLgVBoi6lTcMsHgCQyrZVFnSmcaa3zRv0L3aoGXshwoxkGs3esa9zwQHsChGRL4aLDnJjJJeP6MjPX46Q=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>

    <script src="./assets/script.js"></script>
    </body>
    </html>`;
}

module.exports = htmlGenerator;
