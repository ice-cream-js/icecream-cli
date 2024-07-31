// tsc [typescript compiler] is required.

const passedArgs = process.argv.slice(2);
const shell = require("shelljs");

shell.exec(`tsc ./lib/ice-cream.ts`);
shell.exec(`del ./lib/ice-cream.ts`);

shell.exec(`tsc ./${passedArgs[0]}`);
shell.exec(`del ./${passedArgs[0]}`);
