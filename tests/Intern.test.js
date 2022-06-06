const Intern = require("../lib/intern");

describe("Intern", () => {
  it("Can set school via constructor", () => {
    let intern = new Intern("name", 3, "email", "title", "School");

    expect(intern.school).toEqual("School");
  });
  it("getRole() should return 'Intern'", () => {
    const intern = new Intern("name", 15, "email", "title", 12);
    let title;

    title = intern.getRole();

    expect(title).toEqual("Intern");
  });
  it("Can get school via getSchool()", () => {
    const intern = new Intern("name", 15, "email", "title", "School");
    let school;

    school = intern.getSchool();

    expect(school).toEqual("School");
  });
});
