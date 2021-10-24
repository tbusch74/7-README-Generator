const confirmInstall = installConfirm => {
  if(!installConfirm) {
    return ``;
  }
  return `
  * [Installation](#installation)`
};
const generateInstall = installText => {
  if(!installText) {
    return ``;
  }
  return `
  ## Installation

  ${installText}
  `
};
const confirmUsage = usageConfirm => {
  if(!usageConfirm) {
    return ``;
  }
  return `
  * [Usage](#usage)`
};
const generateUsage = usageText => {
  if(!usageText) {
    return ``;
  }
  return `
  ## Usage

  ${usageText}
  `
};
const confirmContribution = contributionConfirm => {
  if(!contributionConfirm) {
    return ``;
  }
  return `
  * [Contributing](#contributing)`
};
const generateContribution = contributionText => {
  if(!contributionText) {
    return ``;
  }
  return `
  ## Contribution

  ${contributionText}
  `
};
const confirmTest = testConfirm => {
  if(!testConfirm) {
    return ``;
  }
  return `
  * [Tests](#tests)`
};
const generateTest = testText => {
  if(!testText) {
    return ``;
  }
  return `
  ## Tests

  ${testText}
  `
};

function renderLicenseBadge(license) {
  switch (license){
    case 'GNU AGPLv3 License':
      return ''
    case 'GNU GPLv3 License':
      return ''
    case 'GNU LGPLv3 License':
      return ''
    case 'Mozilla Public License 2.0':
      return ''
    case 'Apache License 2.0':
      return ''
    case 'MIT License':
      return ''
    case 'Boost Software License 1.0':
      return ''
    case 'The Unlicense License':
      return ''
  }
}

function licenseLink(license) {
  switch (license){
    case 'GNU AGPLv3 License':
      return 'https://choosealicense.com/licenses/agpl-3.0/'
    case 'GNU GPLv3 License':
      return 'https://choosealicense.com/licenses/gpl-3.0/'
    case 'GNU LGPLv3 License':
      return 'https://choosealicense.com/licenses/lgpl-3.0/'
    case 'Mozilla Public License 2.0':
      return 'https://choosealicense.com/licenses/mpl-2.0/'
    case 'Apache License 2.0':
      return 'https://choosealicense.com/licenses/apache-2.0/'
    case 'MIT License':
      return 'https://choosealicense.com/licenses/mit/'
    case 'Boost Software License 1.0':
      return 'https://choosealicense.com/licenses/bsl-1.0/'
    case 'The Unlicense License':
      return 'https://choosealicense.com/licenses/unlicense/'
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  ${confirmInstall(data.confirmInstall)}${confirmUsage(data.confirmUsage)}
  * [License](#license)${confirmContribution(data.confirmContribution)}${confirmTest(data.confirmTest)}
  * [Questions](#questions)
  ${generateInstall(data.installationInstructions)}${generateUsage(data.usageInformation)}
  ## License

  This project is governed by the terms stated in the ${data.license}. A copy of the license can be found at ${licenseLink(data.license)}
  ${generateContribution(data.contributionGuidelines)}${generateTest(data.testInstructions)}
  ## Questions
`;
}

module.exports = generateMarkdown;