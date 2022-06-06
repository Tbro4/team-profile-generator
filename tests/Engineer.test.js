const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("Can set GitHub account via constructor", () => {
    let engineer = new Engineer("name", 3, "email", "title", "Github");

    expect(engineer.github).toEqual("Github");
  });
  it("getRole() should return 'Engineer'", () => {
    const engineer = new Engineer("name", 15, "email", "title", 12);
    let title;

    title = engineer.getRole();

    expect(title).toEqual("Engineer");
  });
  it("Can get GitHub username via getGithub()", () => {
    const engineer = new Engineer("name", 15, "email", "title", "Github");
    let github;

    github = engineer.getGithub();

    expect(github).toEqual("Github");
  });
});
