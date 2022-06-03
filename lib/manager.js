const Employee = require("./employee");

class Manager extends Employee {
  constructor(officeNum) {
    // super(data.name, data.id, data.email);
    this.officeNum = officeNum;
  }
  getRole() {}
}

module.exports = Manager;
