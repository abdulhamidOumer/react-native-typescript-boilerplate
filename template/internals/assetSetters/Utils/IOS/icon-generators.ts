import sharp from "sharp";
import fs from "fs";

interface IosIconResizerConfigType {
  size: number;
  skipInitialScale?: boolean;
  skipDoubleScale?: boolean;
  skipTripleScale?: boolean;
}

export const iosIconResizeConfigs : IosIconResizerConfigType[] = [
  {size: 20 },
  {size: 29 },
  {size: 40 },
  {size: 60, skipInitialScale: true },
  {size: 76, skipTripleScale: true },
  {size: 83.5, skipTripleScale: true, skipInitialScale: true },
  {size: 1024, skipTripleScale: true, skipDoubleScale: true },
];

export const geneateIosIcons = async (imagePath:string) => {
  const iosIconDirName = "AppIcon.appiconset";
  const iconDirExists = fs.existsSync(`./${iosIconDirName}`);
  if(!iconDirExists) {
    fs.mkdirSync(`./${iosIconDirName}`);
  }

  for (const sizeConfig of iosIconResizeConfigs) {
    if(!sizeConfig.skipInitialScale){
      const iconPath = `./${iosIconDirName}/icon_${sizeConfig.size}.png`;
      await sharp(imagePath).resize(sizeConfig.size, sizeConfig.size).png().toFile(iconPath);
    }

    if(!sizeConfig.skipDoubleScale){
      const iconPath = `./${iosIconDirName}/icon_${sizeConfig.size}@2x.png`;
      await sharp(imagePath).resize(sizeConfig.size * 2, sizeConfig.size * 2).png().toFile(iconPath);
    }

    if(!sizeConfig.skipTripleScale){
      const iconPath = `./${iosIconDirName}/icon_${sizeConfig.size}@3x.png`;
      await sharp(imagePath).resize(sizeConfig.size * 3, sizeConfig.size * 3).png().toFile(iconPath);
    }
  }
}