const inquirer = require("inquirer");
const fs = require("fs");

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
