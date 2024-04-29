// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  // If statement that passes in the License and returns the appropriate badge else returns an empty string
  if (License === "GNU GPLv3") {
    return `![Static Badge](https://img.shields.io/badge/GNU_GPLv3-License-red)`;
  } else if (License === "Apache License 2.0") {
    return `![Static Badge](https://img.shields.io/badge/Apache_License_2.0-License-green)`;
  } else if (License === "MIT License") {
    return `![Static Badge](https://img.shields.io/badge/MIT-License-blue)`;
  } else if (License === "Boost Software License 1.0") {
    return `![Static Badge](https://img.shields.io/badge/Boost_Software_License_1.0-License-yellow)`;
  } else if (License === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  // If statement that passes in the License and returns the appropriate link else returns an empty string
  if (License === "GNU GPLv3") {
    return `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (License === "Apache License 2.0") {
    return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (License === "MIT License") {
    return `[MIT License](https://choosealicense.com/licenses/mit/)`;
  } else if (License === "Boost Software License 1.0") {
    return `[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// If there is no license, return an N/A else return the license
function renderLicenseSection(License) {
  if (License === "None") {
    return "N/A";
  } else {
    return `This project is licensed under the ${renderLicenseLink(
      License
    )} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // This is a const variable for the github link that sets the variable to a template string which includes the github username from the data object
  const githubLink = `https://github.com/${data.GithubUsername}`;
  // This is a return statement that returns a template string with the data object passed in.
  // The template string includes the title, license badge, description, table of contents, installation, usage, license badge, license section, contributing, tests, github link, email, and questions.
  return `
  # ${data.Title}

  ${renderLicenseBadge(data.License)}

  ## Description

  ${data.Description}

  ## Table of Contents

  Here is a table of contents to make it easy for users to locate which section they need.

  ${data["Table of Contents"]}

  ## Installation

  ${data.Installation}

  ## Usage

  ${data.Usage}

  ## License

  ${renderLicenseBadge(data.License)}

  ${renderLicenseSection(data.License)}

  ## Contributing

  ${data.Contributing}

  ## Tests

  ${data.Tests}

  ## Questions

  GitHub: ${githubLink}

  Email: ${data.Email}

  Questions: ${data.Questions}`.trim();
}
// This exports the generateMarkdown function to be used in the index.js file or any other file that requires it.
module.exports = generateMarkdown;
