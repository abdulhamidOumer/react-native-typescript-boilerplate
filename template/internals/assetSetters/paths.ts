import * as path from 'path';
import appConfig from '../../app.json';

export const baseImageAssetsPath = path.join(
  __dirname,
  '../../src/assets/images',
);

export const iosAppIconsPath = path.join(
  __dirname,
  `../../ios/${appConfig.name}/Images.xcassets/AppIcon.appiconset`,
);
