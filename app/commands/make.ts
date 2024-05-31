const shell = require('shelljs')
import chalk from "chalk";
import inquirer from "inquirer";

inquirer.prompt([
      {
        name: "projectName",
        default: `${chalk.bold(chalk.gray('» icecream-app'))}`,
        message: `Project name:`,
        type: "input",
      },
      {
        name: "variant",
        message: "Select a variant:",
        type: "list",
        choices: [`${chalk.yellowBright("JavaScript ↗")}`, `${chalk.blueBright("TypeScript ↗")}`]
      }])
      .then(function (answer) {
        console.log(answer.projectName);
        console.log(answer.variant);
        if (answer.variant = `${chalk.blueBright("TypeScript ↗")}`) {
            setupTS(answer.projectName)
        }
        if (answer.variant = `${chalk.yellowBright("JavaScript ↗")}`) {
            setupJS(answer.projectName)
        }
});

function setupJS(pn) {
    shell.exec('git clone --branch javascript https://github.com/ice-cream-js/example/')
    shell.exec(`ren example ${pn}`)
    console.clear();
}

function setupTS(pn) {
    shell.exec('python app.py')
    shell.exec(`ren example ${pn}`)
    console.clear();
}