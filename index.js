const inquirer = require('inquirer');
const fs = require('fs');

const generateContent = (response) =>
    `# ${response.title}
    ## Description
    ${response.discription}
    ## Table of Contents
    * [Installation] (#installation)
    * [Usage] (#usage)
    * [Contributing] (#contributing)
    * [License] (#license)
    
    ## Installation
    ${response.installation}
    ## Usage
    ${response.usage}
    ## Contributing
    ${response.contribution}
    ## Testing
    ${response.tests}
    ## License
    ${response.license}
    `;

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
        name: 'contribution',
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
    const writeContent = generateContent(response);


    fs.writeFile('README.md', writeContent, (err) =>
    err ? console.log(err) : console.log("README file generated.")
    )

});