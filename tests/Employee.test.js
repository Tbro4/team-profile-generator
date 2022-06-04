const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

describe("Employee", () => {
  it("Can instantiate Employee instance", () => {
    let manager = new Manager("name", 12, "email", "title", 11);

    expect(manager instanceof Employee).toEqual(true);
  });
  it("Can set name via constructor arguments", () => {
    let employee = new Employee("name", 3, "email");

    expect(employee.name).toEqual("name");
  });
  it("Can set id via constructor argument", () => {
    let employee = new Employee("name", 3, "email");

    expect(employee.id).toEqual(3);
  });
  it("Can set email via constructor argument", () => {
    let employee = new Employee("name", 3, "email");

    expect(employee.email).toEqual("email");
  });
  it("Can get name via getName()", () => {
    const employee = new Employee("name", 15, "email");
    let name;

    //Act
    name = employee.getName();

    //Assert
    expect(name).toEqual("name");
  });
  it("Can get id via getID()", () => {
    const employee = new Employee("name", 15, "email");
    let id;

    //Act
    id = employee.getId();

    //Assert
    expect(id).toEqual(15);
  });
  it("Can get email via getEmail()", () => {
    const employee = new Employee("name", 15, "email");
    let email;

    //Act
    email = employee.getEmail();

    //Assert
    expect(email).toEqual("email");
  });
  it("getRole() should return 'Employee'", () => {
    const employee = new Employee("name", 15, "email");
    let title;

    //Act
    title = employee.getRole();

    //Assert
    expect(title).toEqual("Employee");
  });
});
