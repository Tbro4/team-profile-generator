const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, title, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
    this.title = title;
  }
  getRole() {}
}

module.exports = Manager;
