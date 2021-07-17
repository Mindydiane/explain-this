// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log('I am in the file or whatever')
    fs.writeFile(fileName, data, (err, fd) => {
          if (err) {
          if (err.code === 'EEXIST') {
            console.error('myfile already exists');
            return;
          } 
          throw err;
        }
      });
}
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project? (Required)',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('You need to enter a project name!');
                return false;
            } 
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please decribe your project. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please decribe your project!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples on how this project is used?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can anyone contribute to the app?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Do we have to fill out any tests?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which License are you using?',
        choices: ["MIT", "Apache", "IBM"]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'List any credit due to collarorators, third party assets or online tutorials.'
    },
    {
        type: 'input',
        name: "features",
        message: "Provide the features your project has.",
    },
]

// Create a function to initialize app
    const promptUser = () => {
        return inquirer.prompt(questions) 
    }
    promptUser()
    .then(readmeData => {
        let template = generateMarkdown(readmeData)
        writeToFile('README.md', template);
        });



