// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const badgeMaker = require('badge-maker')

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
        message: 'What is your email address? (So people can reach you if they have questions about your application.)',
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
        message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n- What was your motivation?\nWhy did you build this project?\nWhat problem does it solve?\nWhat did you learn?',
        default: '',
        name: 'description',
    },
    {
        type: 'input',
        message: 'If your project has a lot of features, list them here. Begin with a \'-\' to add an item, then add two spaces before the next',
        default: '',
        name: 'features',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        default: '',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
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
        message: 'List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.',
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
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you\'d prefer.',
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

inquirer
    .prompt(questions)
    .then((answers) => {
        // What to do with answers
        // Need a variable 'licenseInfo' that returns licence information based on user selection
    })
    .catch((error) => {
        console.log('Something went wrong.')
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
