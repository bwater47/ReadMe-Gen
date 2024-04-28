// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
//Do I need a variable for the license badge?
// template literal for the badge
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
//Do I need a variable for the license link?

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// Do I need a variable for the license section?

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const githubLink = `https://github.com/${data.GithubUsername}`;
    return `
  # ${data.Title}

  ## Description
  ${data.Description}

  ## Table of Contents
  ${data["Table of Contents"]}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  ${renderLicenseBadge(data.License)}
  ${renderLicenseLink(data.License)}
  ${renderLicenseSection(data.License)}

  ## Contribution
  ${data.Contribution}

  ## Tests
  ${data.Tests}

  ## Questions
  GitHub: ${githubLink}
  Email: ${data.Email}
  Questions: ${data.Questions}`.trim();
  }

module.exports = generateMarkdown;
