const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('markdown').markdown;

const generateContent = (response) =>
`# ${response.title} 

${licenseBadge}

## Description

${response.discription}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Testing](#testing)
* [License](#license)
* [Questions](#questions)

## Installation
\`\`\`
${response.installation}
\`\`\`
## Usage
\`\`\`
${response.usage}
\`\`\`
## Contributing
${response.contribution}
## Testing
\`\`\`
${response.tests}
\`\`\`
## License
${response.license}
## Questions
If you have any questions or run into any issues with this application, please feel free to find me, ${response.githubUser}, on GitHub at ${response.githubLink}. You can also reach out to me via email at ${response.email}.
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
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'GNU GPLv3', 'Apache', 'Mozilla', 'ISC']
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

    if (response.license === 'MIT') {
        response.license = "This project is licensed under the terms of the MIT license."
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        
    }
    else if (response.license === 'GNU GPLv3') {
        response.license = "This project is licensed under the terms of the GNU GPLv3 license."
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        
    }
    else if (response.license === 'Apache') {
        response.license = "This project is licensed under the terms of the Apache license."
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        
    }
    else if (response.license === 'Mozilla') {
        response.license = "This project is licensed under the terms of the Mozilla license."
        licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      
    }
    else {
        response.license = "This project is licensed under the terms of the ISC license."
        licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
        
    }

    const writeContent = generateContent(response);


    fs.writeFile('README.md', writeContent, (err) =>
    err ? console.log(err) : console.log("README file generated.")
    )

});