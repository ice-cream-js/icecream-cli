import chalk from 'chalk';

console.log(`${chalk.magenta('Ice Cream')} is a JavaScript library to render HTML and CSS easily.`)
console.log(`\nUsage: icecream <command> ${chalk.blue('[--flags]')} [...args]`);
console.log(`\n\nCommands:`)
console.log(`  ${chalk.magenta("build")}       Install the necessary dependencies to run this CLI.`)
console.log(`  ${chalk.magenta("make")}       ${chalk.gray("--typescript projectName")}       Make a project using Ice Cream JS.`)