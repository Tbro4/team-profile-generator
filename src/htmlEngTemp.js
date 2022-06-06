function engineerHtmlGen(person) {
  let name = person.name;
  let id = person.id;
  let github = person.github;
  let email = person.email;
  let output = `<div class="card m-4" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title text-center text-light bg-primary mb-3 p-2">${name}</h4>
    <h5 class="card-subtitle mb-2 ">&#x2699; Engineer</h5>
    <h5 class="card-subtitle mb-2 ">ID: ${id}</h5>
    <a href="mailto: ${email}" class="card-link mb-2">
      ${email}
    </a><br>
    Github:<a href="http://github.com/${github}" class="card-link m-0">
      ${github}
    </a>
  </div>
</div>`;
  return output;
}

module.exports = engineerHtmlGen;
