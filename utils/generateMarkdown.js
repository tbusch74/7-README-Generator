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
  ## Contributing

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

function licenseBadge(license) {
  switch (license){
    case 'GNU AGPLv3 License':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    case 'GNU GPLv3 License':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case 'GNU LGPLv3 License':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    case 'The Unlicense License':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
};

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
};

function generateMarkdown(data) {
  return `# ${data.title}

  ${licenseBadge(data.license)}

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

  View this project and my other projects at <https://github.com/${data.githubName}>

  Please reach out to <${data.email}> with any other questions.

`;
}

module.exports = generateMarkdown;