// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
    type: "input",
    name: "Table of Contents",
    message: "Please provide a table of contents.",
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
    name: "Questions",
    message: "Do you have any questions?",
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
    const data = `# ${answers.Title}
        ## Description
        ${answers.Description}
        ## Table of Contents
        ${answers["Table of Contents"]}
        ## Installation
        ${answers.Installation}
        ## Usage
        ${answers.Usage}
        ## License
        ${answers.License}
        ## Contribution
        ${answers.Contribution}
        ## Tests
        ${answers.Tests}
        ## Questions
        ${answers.Questions}`;
    writeToFile("README.md", data);
  });
}
// Function call to initialize app
init();
