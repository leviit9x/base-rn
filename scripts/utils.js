const { exec } = require('child_process');

const promisifyExec = command => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
        reject(error);
        console.log(`exec error: ${error}`);
      }
      resolve();
    });
  });
};

module.exports = {
  promisifyExec,
};
