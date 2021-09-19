import * as path from 'path';
import appConfig from '../../app.json';

export const baseImageAssetsPath = path.join(
  __dirname,
  '../../src/assets/images',
);

const iosImageAssetDir = `../../ios/${appConfig.name}/Images.xcassets`;

export const iosAppIconsPath = path.join(
  __dirname,
  `${iosImageAssetDir}/AppIcon.appiconset`,
);

export const iosSplashIconPath = path.join(
  __dirname,
  `${iosImageAssetDir}/SplashIcon.imageset`,
);
