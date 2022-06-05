function engineerHtmlGen(person) {
  let name = person.name;
  let id = person.id;
  let github = person.github;
  let email = person.email;
  let output = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">${name}</h4>
    <h5 class="card-subtitle mb-2 ">Engineer</h5>
    <h5 class="card-subtitle mb-2 ">ID: ${id}</h5>
    <a href="#" class="card-link">
      Email: ${email}
    </a>
    <a href="#" class="card-link">
      Github: ${github}
    </a>
  </div>
</div>;`;
  return output;
}

module.exports = engineerHtmlGen;
