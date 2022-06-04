const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, title, school) {
    super(name, id, email);
    this.school = school;
    this.title = title;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return (this.title = "Intern");
  }
}

module.exports = Intern;
