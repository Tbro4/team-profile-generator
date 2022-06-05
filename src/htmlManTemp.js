// const index = require("../index");
// const Manager = require("../lib/manager");
// const Engineer = require("../lib/engineer");
// const Intern = require("../lib/intern");

function managerHtmlGen(person) {
  let name = person.name;
  let id = person.id;
  let office = person.officeNum;
  let email = person.email;
  let output = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">${name}</h4>
    <h5 class="card-subtitle mb-2 ">Manager</h5>
    <h5 class="card-subtitle mb-2 ">ID: ${id}</h5>
    <h5 class="card-subtitle mb-2 ">Office: ${office}</h5>
    <a href="#" class="card-link">
      Email: ${email}
    </a>
  </div>
</div>;`;
  return output;
}

module.exports = managerHtmlGen;
