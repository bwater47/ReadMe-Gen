// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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
        name: "Contribution",
        checked: true,
        value: "[Contribution](#contribution)",
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
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "Contribution",
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
    message: "Please provide any additional questions.",
  },
];
// make const variables for questions to use as parameter in the init function
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const filePath = `Dist/${fileName}`;
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      throw err;
    }
    console.log(`${fileName} has been created in the Dist folder!`);
  });
}
// fs.writefile('README.md', generateMarkdown(data), (err) => {
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const githubLink = `https://github.com/${answers.GithubUsername}`;
    const data = generateMarkdown(answers, githubLink);
    writeToFile("README.md", data);
  });
}

init();
