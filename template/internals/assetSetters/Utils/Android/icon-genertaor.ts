import sharp from 'sharp';
import { androidResDir, androidSrcMainDir } from '../../paths';

export enum EAndroidMipmapTypes {
  hdpi = 'hdpi',
  mdpi = 'mdpi',
  xhdpi = 'xhdpi',
  xxhdpi = 'xxhdpi',
  xxxhdpi = 'xxxhdpi',
}

interface IosIconConfigType {
  sizeType: EAndroidMipmapTypes;
  sizeValue: number;
}

export const generateAndroidAppIcon = async (
  iconPath: string,
  resizePercentile: number = 80,
) => {
  const iconSizes: IosIconConfigType[] = [
    {
      sizeType: EAndroidMipmapTypes.hdpi,
      sizeValue: 162,
    },
    {
      sizeType: EAndroidMipmapTypes.mdpi,
      sizeValue: 108,
    },
    {
      sizeType: EAndroidMipmapTypes.xhdpi,
      sizeValue: 216,
    },
    {
      sizeType: EAndroidMipmapTypes.xxhdpi,
      sizeValue: 324,
    },
    {
      sizeType: EAndroidMipmapTypes.xxxhdpi,
      sizeValue: 432,
    },
  ];

  const androidAppIconName = 'ic_launcher_foreground.png';

  for (const iconConfig of iconSizes) {
    const objectSize = Math.round(
      iconConfig.sizeValue * (resizePercentile / 100),
    );
    const remainingObjectSize = Math.round(
      (iconConfig.sizeValue - objectSize) / 2,
    );

    const iconOutPath = `${androidResDir}/mipmap-${iconConfig.sizeType}/${androidAppIconName}`;
    await sharp(iconPath)
      .resize(objectSize, objectSize)
      .extend({
        top: remainingObjectSize,
        bottom: remainingObjectSize,
        left: remainingObjectSize,
        right: remainingObjectSize,
        background: 'rgba(200, 54, 54, 0)',
      })
      .png()
      .toFile(iconOutPath);
  }

  const playstoreIconPath = `${androidSrcMainDir}/ic_launcher-playstore.png`;
  const playstoreObjSize = Math.round(512 * (resizePercentile / 100));
  const remainingPlyStrSize = Math.round((512 - playstoreObjSize) / 2);
  await sharp(iconPath)
    .resize(playstoreObjSize, playstoreObjSize)
    .extend({
      top: remainingPlyStrSize,
      bottom: remainingPlyStrSize,
      left: remainingPlyStrSize,
      right: remainingPlyStrSize,
      background: 'rgba(200, 54, 54, 0)',
    })
    .png()
    .toFile(playstoreIconPath);
};

export const generateAndroidSplashIcon = async (iconPath: string) => {
  const iconSizes: IosIconConfigType[] = [
    {
      sizeType: EAndroidMipmapTypes.hdpi,
      sizeValue: 150,
    },
    {
      sizeType: EAndroidMipmapTypes.mdpi,
      sizeValue: 100,
    },
    {
      sizeType: EAndroidMipmapTypes.xhdpi,
      sizeValue: 200,
    },
    {
      sizeType: EAndroidMipmapTypes.xxhdpi,
      sizeValue: 300,
    },
    {
      sizeType: EAndroidMipmapTypes.xxxhdpi,
      sizeValue: 400,
    },
  ];

  const splashIconName = 'splash_icon.png';

  for (const iconConfig of iconSizes) {
    const iconOutPath = `${androidResDir}/mipmap-${iconConfig.sizeType}/${splashIconName}`;
    await sharp(iconPath)
      .resize(iconConfig.sizeValue, iconConfig.sizeValue)
      .png()
      .toFile(iconOutPath);
  }
};
