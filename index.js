const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const HTMLgenerator = require("./src/htmlGenerator");

const managerQs = [
  {
    name: "name",
    message: "What is your team manager's name?",
    type: "input",
  },
  {
    name: "id",
    message: "What is your team manager's ID?",
    type: "input",
  },
  {
    name: "email",
    message: "What is your team manager's Email?",
    type: "input",
  },
  {
    name: "officeNum",
    message: "What is your team manager's office number?",
    type: "input",
  },
  {
    name: "addOrFinish",
    message: "Which type of team member would you like to add?",
    type: "list",
    choices: ["Engineer", "Intern", "Finished with entries"],
  },
];

const engineerQs = [
  {
    name: "name",
    message: "What is your engineer's name?",
    type: "input",
  },
  {
    name: "id",
    message: "What is your engineer's ID?",
    type: "input",
  },
  {
    name: "email",
    message: "What is your engineer's Email?",
    type: "input",
  },
  {
    name: "github",
    message: "What is your engineer's Github username?",
    type: "input",
  },
  {
    name: "addOrFinish",
    message: "Which type of team member would you like to add?",
    type: "list",
    choices: ["Engineer", "Intern", "Finished with entries"],
  },
];
const internQs = [
  {
    name: "name",
    message: "What is your intern's name?",
    type: "input",
  },
  {
    name: "id",
    message: "What is your intern's ID?",
    type: "input",
  },
  {
    name: "email",
    message: "What is your intern's Email?",
    type: "input",
  },
  {
    name: "school",
    message: "What is your intern's school name?",
    type: "input",
  },
  {
    name: "addOrFinish",
    message: "Which type of team member would you like to add?",
    type: "list",
    choices: ["Engineer", "Intern", "Finished with entries"],
  },
];

let managerArr = [];
let engineerArr = [];
let internArr = [];

let managerClassObjs = [];
let engineerClassObjs = [];
let internClassObjs = [];

//function to make classes with array objects
function objectMaker() {
  managerArr.forEach((person) => {
    let manager = new Manager(
      person.name,
      person.id,
      person.email,
      person.title,
      person.officeNum
    );
    managerClassObjs.push(manager);
  });
  engineerArr.forEach((person) => {
    let engineer = new Engineer(
      person.name,
      person.id,
      person.email,
      person.title,
      person.github
    );
    engineerClassObjs.push(engineer);
  });
  internArr.forEach((person) => {
    let intern = new Intern(
      person.name,
      person.id,
      person.email,
      person.title,
      person.school
    );
    internClassObjs.push(intern);
  });
  console.log(managerClassObjs);
  console.log(engineerClassObjs);
  console.log(internClassObjs);
}

//called when create Engineer or Intern or Finish is selected
function addOrFinish(data) {
  //determine wether Manager/Engineer/Intern and push data to approprite array
  if (data.officeNum) {
    //push manager entry to managerArr array
    managerArr.push({
      name: data.name,
      title: "Manager",
      id: data.id,
      email: data.email,
      officeNum: data.officeNum,
    });
  }
  if (data.github) {
    engineerArr.push({
      name: data.name,
      title: "Engineer",
      id: data.id,
      email: data.email,
      github: data.github,
    });
  }
  if (data.school) {
    internArr.push({
      name: data.name,
      title: "Intern",
      id: data.id,
      email: data.email,
      school: data.school,
    });
  }
  //bring up next question block or quit based on add Engineer/Intern or Finished with entries
  if (data.addOrFinish === "Engineer") {
    inquirer.prompt(engineerQs).then((data) => {
      addOrFinish(data);
    });
  }
  if (data.addOrFinish === "Intern") {
    inquirer.prompt(internQs).then((data) => {
      addOrFinish(data);
    });
  }
  if (data.addOrFinish === "Finished with entries") {
    //objectMaker takes array data, passes is it to constructor objects to make new objects
    objectMaker();
  }
}

//starts command-line questions
function init() {
  inquirer.prompt(managerQs).then((data) => {
    addOrFinish(data);
    fs.writeFile("./dist/MyTeam.html", htmlGenerator(), (err) => {
      err ? console.log(err) : console.log("File created!");
    });
  });
}

init();
