const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: function(email)
            {
                // Regex mail check (return true if valid mail)
                if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)){
                    return true
                }else{
                    console.log('Please enter a valid email!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'githubName',
            message: 'What is your Github username? (Required)',
            validate: nameInput => {
                if(nameInput){
                    return true
                }else {
                    console.log('Please enter your Github username!')
                    return false
                }
            }
        },
         {
             type: 'input',
             name: 'title',
             message: 'What is your project title? (Required)',
             validate: nameInput => {
                 if(nameInput){
                     return true
                 }else {
                     console.log('Please enter your project name!')
                     return false
                 }
             }
         },
         {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project (Required)',
            validate: nameInput => {
                if(nameInput){
                    return true
                }else {
                    console.log('Please enter a project description!')
                    return false
                }
            }
         },
         {
            type: 'rawlist',
            name: 'license',
            message: 'Which is the applicable license for this project? If no option is selected the default license (MIT) will be used.',
            choices: ['GNU AGPLv3 License','GNU GPLv3 License','GNU LGPLv3 License','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense License'],
            default: 'MIT License'
        },
         {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like to generate an "Installation" section for the README?',
            default: true
         },
         {
            type: 'input',
            name: 'installationInstructions',
            message: 'Please enter instructions to install your project (Required)',
            when: ({confirmInstall}) => {
                if(confirmInstall) {
                    return true;
                }else{
                    return false;
                }
            },
            validate: nameInput => {
                if(nameInput){
                    return true
                }else {
                    console.log('Please enter installation instructions!')
                    return false
                }
            }
         },
         {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to generate a "Usage" section for the README?',
            default: true
         },
         {
            type: 'input',
            name: 'usageInformation',
            message: 'Please enter usage information for your project (Required)',
            when: ({confirmUsage}) => {
                if(confirmUsage) {
                    return true;
                }else{
                    return false;
                }
            },
            validate: nameInput => {
                if(nameInput){
                    return true
                }else {
                    console.log('Please enter usage information!')
                    return false
                }
            }
         },
         {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like to generate a "Contribution" section for the README?',
            default: true
         },
         {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Please enter contribution guidelines for your project (Required)',
            when: ({confirmContribution}) => {
                if(confirmContribution) {
                    return true;
                }else{
                    return false;
                }
            },
            validate: nameInput => {
                if(nameInput){
                    return true
                }else {
                    console.log('Please enter contribution guidelines!')
                    return false
                }
            }
         },
         {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to generate a "Test" section for the README?',
            default: true
         },
         {
            type: 'input',
            name: 'testInstructions',
            message: 'Please enter test instructions for your project (Required)',
            when: ({confirmTest}) => {
                if(confirmTest) {
                    return true;
                }else{
                    return false;
                }
            },
            validate: nameInput => {
                if(nameInput){
                    return true
                }else {
                    console.log('Please enter test instructions!')
                    return false
                }
            }
         }
    ])
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(generateMarkdown)
    .then(data => {
        fs.writeFile('./dist/README.md', data, err => {
            if(err) {
                console.log('ERROR');
                return
            };
        })
    })
}

// Function call to initialize app
init();
