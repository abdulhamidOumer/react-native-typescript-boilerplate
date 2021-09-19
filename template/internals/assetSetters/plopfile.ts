import { NodePlopAPI } from "node-plop";
import sharp from "sharp";
import { appIconSetter } from "./AppIcon";
import { geneateIosIcons } from "./Utils/IOS/icon-generators";


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
      await geneateIosIcons(iconPath);
    }
    return '';
  });
}