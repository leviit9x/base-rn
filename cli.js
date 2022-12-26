const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// CONFIG
const VALID_KEYS = [
  'colors',
  'fontSizes',
  'fontWeights',
  'radii',
  'spacing',
  'opacity',
  'sizes',
  'zIndex',
];

const pathThemeSchema = path.resolve(__dirname, 'schema.theme.json');
const pathThemeTs = path.resolve(__dirname, 'schema.ts.json');
const pathThemeSchemaConfig = path.resolve(
  __dirname,
  'src/core/themes/base/themeSchema.ts',
);

const pathThemeTsConfig = path.resolve(
  __dirname,
  'src/core/themes/base/themeTs.ts',
);

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

// UTILS

const getDataFromTheme = async pathFile => {
  try {
    return JSON.parse(await fs.readFileSync(pathFile, 'utf8'));
  } catch (err) {
    console.log('err', err);
    return null;
  }
};

const isMultiTheme = data =>
  Object.keys(data).some(k => !VALID_KEYS.includes(k));

const isValidThemeKey = data => {
  if (isMultiTheme(data)) {
    return Object.keys(data).every(k => {
      const _current = data[k];

      return !Object.keys(_current).filter(kc => !VALID_KEYS.includes(kc))
        .length;
    });
  }
  return !Object.keys(data).filter(k => !VALID_KEYS.includes(k)).length;
};

// cli map data for to theme service
const main = async () => {
  const themeSchema = await getDataFromTheme(pathThemeSchema);
  const themeTs = await getDataFromTheme(pathThemeTs);

  if (isValidThemeKey(themeSchema) && isValidThemeKey(themeTs)) {
    fs.writeFile(
      pathThemeSchemaConfig,
      `export const themeSchema = ${JSON.stringify(themeSchema)}`,
      err => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('move themeSchema success');
      },
    );
    fs.writeFile(
      pathThemeTsConfig,
      `export const themeTs = ${JSON.stringify(themeTs)}`,
      err => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('move themeTs success');
      },
    );
  } else {
    console.log('reject: invalid theme keys');
  }
};

main().then(() => {
  promisifyExec('yarn prettier');
});
