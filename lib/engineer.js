const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    //these get passed to the Employee constructor
    super(data.name, data.id, data.email);
    this.github = github;
  }

  getGithub() {}

  getRole() {}
}

module.exports = Engineer;
