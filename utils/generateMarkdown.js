// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, re turn an empty string
function renderLicenseBadge(license) {
  if (license == "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseSection(data.license);

  return `# ${data.projectName}

## Description :dizzy:

![image](https://user-images.githubusercontent.com/80286982/126023845-9713ba1c-9c49-4946-9cf8-f294bc4b071c.png)

${data.projectDescription}

* Installation :love_letter:

${data.installation}

* Usage :thought_balloon:

${data.usage}

* Credit :sweat_drops:

${data.credit}

* Contributing :boom:

${data.contribution}

* Licenses

${data.license}

### Badge

${badge}

### Features

${data.features}

### Github

${data.github}

### email

${data.email}
### Tests

${data.tests}
`;

}
module.exports = generateMarkdown;
