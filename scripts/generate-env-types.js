const fs = require('fs');
const { promisifyExec } = require('./utils');

const generate = () => {
  const env = fs.readFileSync('.env.example', { encoding: 'ASCII' });
  const envLines = env.split('\n');
  const allKeys = [];

  envLines.forEach(line => {
    if (line.includes('=') && !line.startsWith('#')) {
      allKeys.push(line.split('=')[0].trim());
    }
  });

  const mapTs = allKeys.map(k => `${k}: string;`);

  const string = `declare module "react-native-config" {
    interface Env {
      ${mapTs.join('\n    ')}
    }
  
    const Config: Env
  
    export default Config
  }`;
  const pathFile = 'env.d.ts';
  fs.writeFileSync(pathFile, string, 'utf8');
  promisifyExec(`npx prettier --write ${pathFile}`);
};

generate();
