const fs = require('fs');
const path = require('path');
const {
  capitalizeEveryWordFile,
  promisifyExec,
  extension,
  pathDirEntryFile,
} = require('./utils');
const pathAssets = path.resolve(__dirname, '../src/assets');

const assetTypes = {
  images: 'images',
  icons: 'icons',
};

const resolvePathAssetType = type => `${pathAssets}/${assetTypes[type]}`;

const imagesDir = resolvePathAssetType(assetTypes.images);
const iconsDir = resolvePathAssetType(assetTypes.icons);

const assetTypeFileNames = (dir, extension) => {
  const array = fs
    .readdirSync(dir)
    .filter(file => file.endsWith(extension))
    .map(file => file.replace(extension, ''));

  return Array.from(new Set(array));
};

const generateWithFileNames = (fileNames, ext) => {
  return fileNames
    .map(name => `${capitalizeEveryWordFile(name)}: require('./${name}${ext}')`)
    .join(',\n  ');
};

const generate = () => {
  const [images, icons] = [
    assetTypeFileNames(imagesDir, `.${extension.png}`),
    assetTypeFileNames(iconsDir, `.${extension.svg}`),
  ];

  const stringProps = generateWithFileNames(images, `.${extension.png}`);
  const iconsProps = generateWithFileNames(icons, `.${extension.svg}`);

  const stringImages = `export const appImages = {
    ${stringProps}
  }
  `;

  const stringIcons = `export const appIcons = {
    ${iconsProps}
  }
  `;

  Promise.all([
    fs.writeFileSync(pathDirEntryFile(imagesDir), stringImages, 'utf8'),
    fs.writeFileSync(pathDirEntryFile(iconsDir), stringIcons, 'utf8'),
  ]).then(() => {
    promisifyExec(`npx prettier --write ${imagesDir} ${iconsDir}`);
  });
};

generate();