const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'discription',
        message: 'Provide a discrption of your project: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information: '
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Provide contribution guidelines: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions: '
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'GNU GPLv3', 'Apache', 'Mozilla', 'GNU AGPLv3']
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'Provide your gitHub username: '
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'Provide your gitHub profile URL: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email address: '
    },

]).then((response) => {
    fs.writeFile('info.txt', JSON.stringify(response), (err) =>
    err ? console.log(err) : console.log("File written! :D")
    )

});