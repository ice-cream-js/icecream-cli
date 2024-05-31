const { exec } = require('child_process');

exec('npm install inquirer', (err, stdout, stderr) => {
    if (err) {
      return;
    }
  
    console.log(`${stdout}`);
});
exec('npm install chalk', (err, stdout, stderr) => {
    if (err) {
      return;
    }
  
    console.log(`${stdout}`);
});
exec('npm install shelljs', (err, stdout, stderr) => {
    if (err) {
      return;
    }
  
    console.log(`${stdout}`);
});