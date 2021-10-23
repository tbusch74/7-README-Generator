const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


const promptUser = () => {
    return inquirer.prompt([
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
            type: 'input',
            name: 'installationInstructions',
            message: 'Please enter instructions to install your project (Required)',
            validate: nameInput => {
                if(nameInput){
                    return true
                }else {
                    console.log('Please enter installation instructions!')
                    return true
                }
            }
         }
    ])
}

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
