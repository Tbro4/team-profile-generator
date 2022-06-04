const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, title, github) {
    super(name, id, email);
    this.github = github;
    this.title = title;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return (this.title = "Engineer");
  }
}

module.exports = Engineer;
