const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, title, github) {
    super(name, id, email);
    this.github = github;
    this.title = title;
  }

  getGithub() {}

  getRole() {}
}

module.exports = Engineer;
