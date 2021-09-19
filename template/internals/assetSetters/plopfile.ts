import { NodePlopAPI } from 'node-plop';
import sharp from 'sharp';
import { appIconSetter } from './AppIcon';
import { splashScreenIconSetter } from './SplashScreen';
import {
  geneateIosAppIcons,
  generateIosSplashIcons,
} from './Utils/IOS/icon-generators';

interface GenerateIconData {
  fullIconPath: string;
}

export default function ploper(plop: NodePlopAPI) {
  plop.setPrompt('filePath', require('inquirer-file-path'));
  plop.setGenerator('App Icon', appIconSetter);
  plop.setGenerator('Splash Screen Icon', splashScreenIconSetter);

  plop.setActionType('generate-ios', async (answers, config) => {
    const data = config?.data as GenerateIconData;
    const iconPath = data?.fullIconPath;

    if (iconPath) {
      await geneateIosAppIcons(iconPath);
    }
    return '';
  });

  plop.setActionType('generate-ios-splash', async (answers, config) => {
    const data = config?.data as GenerateIconData;
    const iconPath = data?.fullIconPath;

    if (iconPath) {
      await generateIosSplashIcons(iconPath);
    }
    return '';
  });
}
