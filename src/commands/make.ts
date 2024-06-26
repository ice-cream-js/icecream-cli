const passedArgs = process.argv.slice(2);
const shell = require("shelljs");
import chalk from "chalk";
import inquirer from "inquirer";

if (passedArgs[0] == null || passedArgs[0] == "") {
  if (passedArgs[1] == null || passedArgs[1] == "") {
    inquirer
      .prompt([
        {
          name: "projectName",
          default: `${chalk.bold(chalk.gray("» icecream-app"))}`,
          message: `Project name:`,
          type: "input",
        },
        {
          name: "variant",
          message: "Select a variant:",
          type: "list",
          choices: [
            `${chalk.yellowBright("JavaScript ↗")}`,
            `${chalk.blueBright("TypeScript ↗")}`,
          ],
        },
      ])
      .then(function (answer) {
        console.log(answer.projectName);
        console.log(answer.variant);
        if ((answer.variant = `${chalk.blueBright("TypeScript ↗")}`)) {
          setupTS(answer.projectName);
        }
        if ((answer.variant = `${chalk.yellowBright("JavaScript ↗")}`)) {
          setupJS(answer.projectName);
        }
      });

    function setupJS(pn) {
      shell.exec(
        "git clone --branch javascript https://github.com/ice-cream-js/example/"
      );
      shell.exec(`ren example ${pn}`);
      console.clear();
    }

    function setupTS(pn) {
      shell.exec(
        "git clone --branch typescript https://github.com/ice-cream-js/example/"
      );
      shell.exec(`ren example ${pn}`);
      console.clear();
    }
  }
} else if (passedArgs[0] !== null || passedArgs[0] !== "") {
    if (passedArgs[1] !== null || passedArgs[1] !== "") {
        var variant = passedArgs[0]
        var pn = passedArgs[1]
        shell.exec(
            `git clone --branch ${variant.replace('--', "")} https://github.com/ice-cream-js/example/`
          );
          shell.exec(`ren example ${pn}`);
          console.clear();
    }
}