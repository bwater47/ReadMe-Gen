// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const Badge1 = ![Static Badge](https://img.shields.io/badge/GNU_GPLv3-License-red)
  const Badge2 = ![Static Badge](https://img.shields.io/badge/Apache_License_2.0-License-green)
  const Badge3 = ![Static Badge](https://img.shields.io/badge/MIT-License-blue)
  const Badge4 = ![Static Badge](https://img.shields.io/badge/Boost_Software_License_1.0-License-yellow)
}
// template literal for the badge
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const License1 = [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
  const License2 = [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)
  const License3 = [MIT License](https://choosealicense.com/licenses/mit/)
  const License4 = [Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)
}
//Do I need a variable for the license link?

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const Section1 = `This project is licensed under the GNU GPLv3 license.`
  const Section2 = `This project is licensed under the Apache License 2.0 license.`
  const Section3 = `This project is licensed under the MIT License.`
  const Section4 = `This project is licensed under the Boost Software License 1.0.`
}
// Do I need a variable for the license section?

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const githubLink = `https://github.com/${data.GithubUsername}`;
    return `
  # ${data.Title}
  ${renderLicenseBadge(data.License)}

  ## Description
  ${data.Description}

  ## Table of Contents
  ${data["Table of Contents"]}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  ${data["License"]}
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
