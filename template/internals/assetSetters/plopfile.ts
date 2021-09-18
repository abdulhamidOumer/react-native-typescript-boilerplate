import { NodePlopAPI } from "node-plop";
import sharp from "sharp";
import { appIconSetter } from "./AppIcon";


interface GenerateIconData {
  fullIconPath: string;
}

export default function ploper(plop:NodePlopAPI) {
  plop.setPrompt('filePath', require('inquirer-file-path'));
  plop.setGenerator('App Icon', appIconSetter);

  plop.setActionType('generate-ios', async (answers, config) => {
    const data = config?.data as GenerateIconData;
    const iconPath = data?.fullIconPath;

    if (iconPath) {
      await sharp(iconPath).resize(1024, 1024).png().toFile('icon.png');
    }
    return '';
  });
}