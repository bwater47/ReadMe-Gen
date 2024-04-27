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
        name: "contribution",
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
}
// fs.writefile('README.md', generateMarkdown(data), (err) => {
// TODO: Create a function to initialize app
function init() {
}
// Function call to initialize app
init();
