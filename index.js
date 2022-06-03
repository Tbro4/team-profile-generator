const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./manager.js");
const Engineer = require("./engineer.js");
const Intern = require("./inter.js");

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

let cardObjs = [];

//called when create Engineer or Intern or Finish is selected
function addOrFinish(data) {
  //determine wether Manager/Engineer/Intern and then call correct class constructor
  if (data.officeNum) {
    console.log("Manager");
  }
  if (data.github) {
    console.log("Engineer");
  }
  if (data.school) {
    console.log("Intern");
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
    // inquirer.prompt(engineerQs).then((data) => {
    //     console.log(data)
    // })
  }
}

function init() {
  inquirer.prompt(managerQs).then((data) => {
    addOrFinish(data);
  });
}

init();
