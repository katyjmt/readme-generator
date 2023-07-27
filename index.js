// Add packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        default: '',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        default: '',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        default: '',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        default: '',
        name: 'description',
    },
    {
        type: 'input',
        message: 'List the features of your project.',
        default: '',
        name: 'features',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        default: '',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for how your project can be used.',
        default: '',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide the file path to a screenshot or video of your project.',
        default: '',
        name: 'filePath',
    },
    {
        type: 'input',
        message: 'Please provide alt text for your image / video file.',
        default: '',
        name: 'altText',
    },
    {
        type: 'input',
        message: 'List your collaborators, with links to their GitHub profiles, as well as any third-party assets and tutorials used.',
        default: '',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Please select the license used for your project.',
        choices: ['MIT License', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
        default: 0,
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please provide guidelines for how other developers may contribute to your project (if you wish to allow this).',
        default: '',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'If relevant, provide tests for your application and examples of how to run them.',
        default: '',
        name: 'tests',
    },
];


// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        // Variable for GitHub URL
        const gitHub = `https://github.com/${answers.username}`;
        console.log(gitHub);
        // Variable to translate License response to format required by shields.io
        let licenseResponse;
        switch(answers.license) {
            case "MIT License":
                licenseResponse = "MIT_License";
                break;
            case "GNU GPLv3":
                licenseResponse = "GNU_GPLv3";
                break;
            case "GNU AGPLv3":
                licenseResponse = "GNU_AGPLv3";
                break;
            case "GNU LGPLv3":
                licenseResponse = "GNU_LGPLv3";
                break;
            case "Mozilla Public License 2.0":
                licenseResponse = "Mozilla_Public_License_2.0";
                break;
            case "Apache License 2.0":
                licenseResponse = "Apache_License_2.0";
                break;
            case "Boost Software License 1.0":
                licenseResponse = "Boost_Software_License_1.0";
                break;
            case "The Unlicense":
                licenseResponse = "The_Unlicense";
                break;
            default:
                licenseResponse = "None";
        }
        // Create badge for license using badge maker
        const badge = `https://img.shields.io/badge/license-${licenseResponse}-purple`;
        console.log(badge);
        // Create variable to hold README content
        let readMeContent = `
# ${answers.title}

## Badges
![${answers.license}](${badge})

## Description
${answers.description}

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [Questions](#questions)

## Features
${answers.features}

## Installation
${answers.installation}

## Usage
${answers.usage}

![${answers.altText}](${answers.filePath})

## License
All assets and code are under ${answers.license} unless specified otherwise.

## Contributing
${answers.contribute}

## Tests
${answers.tests}

## Credits
${answers.credits}

## Questions
Any questions? Visit my GitHub profile at [${gitHub}](${gitHub}) or email me at [${answers.email}](${answers.email}).`;


        // Write README File
        fs.writeFile('README.md',readMeContent, (err) =>  
        err ? console.error(err) : console.log('File created!'));
    })
    .catch((error) => {
        console.log('Something went wrong.')
    })
}

// Function call to initialize app
init();
