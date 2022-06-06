function managerHtmlGen(person) {
  let name = person.name;
  let id = person.id;
  let office = person.officeNum;
  let email = person.email;
  let output = `<div class="card m-4" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title text-center text-light bg-primary mb-3 p-2">${name}</h4>
    <h5 class="card-subtitle mb-2 ">&#x2689;  Manager</h5>
    <h5 class="card-subtitle mb-2 ">ID: ${id}</h5>
    <h5 class="card-subtitle mb-2 ">Office: ${office}</h5>
    <a href="mailto: ${email}" class="card-link mb-2">
      ${email}
    </a>
  </div>
</div>`;
  return output;
}

module.exports = managerHtmlGen;
