// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
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
  const githubLink = `https://github.com/${data.GithubUsername}`;
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

module.exports = generateMarkdown;
