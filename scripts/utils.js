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

const capitalizeEveryWordFile = str =>
  str
    .replace(/\b[a-z]/g, char => char.toUpperCase())
    .split(' ')
    .join('');

const pathDirEntryFile = (pathFile, ext = 'ts') => `${pathFile}/index.${ext}`;

const extension = {
  png: 'png',
  svg: 'svg',
};

const prettier = (...args) =>
  promisifyExec(`npx prettier --write ${args.join(' ')}`);

module.exports = {
  promisifyExec,
  capitalizeEveryWordFile,
  pathDirEntryFile,
  prettier,
  extension,
};
