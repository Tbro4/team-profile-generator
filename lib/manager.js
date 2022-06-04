const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, title, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
    this.title = title;
  }

  getOfficeNum() {
    return this.officeNum;
  }
  getRole() {
    return (this.title = "Manager");
  }
}

module.exports = Manager;
