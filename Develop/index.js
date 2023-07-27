// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const badgeMaker = require('badge-maker') ---> Don't think I need this with URL version

// TODO: Create an array of questions for user input
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
        message: 'Provide a short description explaining the what, why, and how of your project.\n- What was your motivation?\n- Why did you build this project?\n- What problem does it solve?\n- What did you learn?\n',
        default: '',
        name: 'description',
    },
    {
        type: 'editor',
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



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('README.md', readMeContent, (err) =>  
//         err ? console.error(err) : console.log('File created!'))
//         :   console.log('Something\'s gone wrong.')
// }

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        // Variable for GitHub URL
        const gitHub = `https://github.com/${answers.username}`;
        console.log(gitHub);
        // Create badge for license using badge maker
        const badge = `https://img.shields.io/badge/license-${answers.license}-purple`;
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
        
        console.log(readMeContent);

        // Log answers to check they have been recorded correctly
        // console.log(`${username}, ${email}, ${title}, ${description}, ${features}, ${installation}, ${usage}, ${filePath}, ${altText}, ${credits}, ${license}, ${contribute}, ${tests}`);

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
