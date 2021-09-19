import sharp from 'sharp';
import { androidResDir } from '../../paths';

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
};
