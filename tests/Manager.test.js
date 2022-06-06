const Manager = require("../lib/manager");

describe("Manager", () => {
  it("Can set office number via constructor", () => {
    let manager = new Manager("name", 3, "email", "title", 11);

    expect(manager.officeNum).toEqual(11);
  });
  it("getRole() should return 'Manager'", () => {
    const manager = new Manager("name", 15, "email", "title", 12);
    let title;

    title = manager.getRole();

    expect(title).toEqual("Manager");
  });
  it("Can get office number via getOfficeNum()", () => {
    const manager = new Manager("name", 15, "email", "title", 12);
    let officeNum;

    officeNum = manager.getOfficeNum();

    expect(officeNum).toEqual(12);
  });
});
