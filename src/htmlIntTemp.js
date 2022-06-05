function internHtmlGen(person) {
  let name = person.name;
  let id = person.id;
  let school = person.school;
  let email = person.email;
  let output = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">${name}</h4>
    <h5 class="card-subtitle mb-2 ">Intern</h5>
    <h5 class="card-subtitle mb-2 ">ID: ${id}</h5>
    <h5 class="card-subtitle mb-2 ">School: ${school}</h5>
    <a href="#" class="card-link">
      Email: ${email}
    </a>
  </div>
</div>;`;
  return output;
}

module.exports = internHtmlGen;
