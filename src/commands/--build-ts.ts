// tsc [typescript compiler] is required.

const passedArgs = process.argv.slice(2);
const shell = require("shelljs");

shell.exec(`tsc ${passedArgs[1]}`)
shell.exec(`del ${passedArgs[1]}`)
