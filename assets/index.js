// TODO: Include packages needed for this application
// These are the packages that are required for this application, and they are placed in const variables.
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// This is an array of questions that are prompted to the user when the application is run.
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Please provide a description of your project.",
  },
  {
    type: "checkbox",
    name: "Table of Contents",
    message:
      "Please select the sections you want to include in the table of contents.",
    choices: [
      {
        name: "Description",
        checked: true,
        value: "[Description](#description)",
      },
      {
        name: "Installation",
        checked: true,
        value: "[Installation](#installation)",
      },
      {
        name: "Usage",
        checked: true,
        value: "[Usage](#usage)",
      },
      {
        name: "License",
        checked: true,
        value: "[License](#license)",
      },
      {
        name: "Contributing",
        checked: true,
        value: "[Contributing](#contributing)",
      },
      {
        name: "Tests",
        checked: true,
        value: "[Tests](#tests)",
      },
      {
        name: "Questions",
        checked: true,
        value: "[Questions](#questions)",
      },
    ],
  },
  {
    type: "input",
    name: "Installation",
    message: "Please provide installation instructions.",
  },
  {
    type: "input",
    name: "Usage",
    message: "Please provide usage information.",
  },
  {
    type: "list",
    name: "License",
    message: "Please choose a license for your project.",
    choices: ["GNU GPLv3", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "None"],
  },
  {
    type: "input",
    name: "Contributing",
    message: "Please provide contribution guidelines.",
  },
  {
    type: "input",
    name: "Tests",
    message: "Please provide test instructions.",
  },
  {
    type: "input",
    name: "GithubUsername",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "Questions",
    message: "Please provide text for how a user will reach you with additional questions.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // This is a const variable that sets the file path to the Dist folder and the file name passed in.
  const filePath = `${fileName}`;
  // This is a function that writes the file to the file path and data passed in.
  fs.writeFile(filePath, data, (err) => {
    // This is an if statement that throws an error if there is an error if the file is not written.
    if (err) {
      throw err;
    }
    console.log(`${fileName} has been created in the Dist folder!`);
  });
}

// TODO: Create a function to initialize app
function init() {
  // This is a package that prompts the user with the questions array and then returns the answers.
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    // This is a const variable that sets the github link to a template string that includes the github username from the answers object.
    const githubLink = `https://github.com/${answers.GithubUsername}`;
    // This is a const variable that sets the data to the generateMarkdown function with the answers object and github link passed in.
    const data = generateMarkdown(answers, githubLink);
    // Then the file is written to the README.md file with the data from the answers passed in.
    writeToFile("README.md", data);
  });
}

init();
