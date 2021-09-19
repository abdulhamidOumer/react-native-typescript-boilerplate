import sharp from 'sharp';
import fs from 'fs';
import { iosAppIconsPath, iosSplashIconPath } from '../../paths';

interface IosIconResizerConfigType {
  size: number;
  skipInitialScale?: boolean;
  skipDoubleScale?: boolean;
  skipTripleScale?: boolean;
  isIosMarketing?: boolean;
}

export const iosIconResizeConfigs: IosIconResizerConfigType[] = [
  { size: 20 },
  { size: 29 },
  { size: 40 },
  { size: 60, skipInitialScale: true },
  { size: 76, skipTripleScale: true },
  { size: 83.5, skipTripleScale: true, skipInitialScale: true },
  {
    size: 1024,
    skipTripleScale: true,
    skipDoubleScale: true,
    isIosMarketing: true,
  },
];

export const geneateIosAppIcons = async (imagePath: string) => {
  const iconDirExists = fs.existsSync(iosAppIconsPath);
  const contentsConfig = {
    images: [],
    info: {
      version: 1,
      author: 'xcode',
    },
  };

  if (!iconDirExists) {
    fs.mkdirSync(iosAppIconsPath);
  }

  for (const sizeConfig of iosIconResizeConfigs) {
    if (!sizeConfig.skipInitialScale) {
      const iconName = `icon-${sizeConfig.size}.png`;
      const iconPath = `${iosAppIconsPath}/${iconName}`;
      await sharp(imagePath)
        .resize(sizeConfig.size, sizeConfig.size)
        .png()
        .toFile(iconPath);

      const xcodeImageConfig = {
        size: `${sizeConfig.size}x${sizeConfig.size}`,
        idiom: sizeConfig.isIosMarketing ? 'ios-marketing' : 'ipad',
        filename: iconName,
        scale: '1x',
      };

      contentsConfig.images.push(xcodeImageConfig);
    }

    if (!sizeConfig.skipDoubleScale) {
      const iconName = `icon-${sizeConfig.size}@2x.png`;
      const iconPath = `${iosAppIconsPath}/${iconName}`;
      await sharp(imagePath)
        .resize(sizeConfig.size * 2, sizeConfig.size * 2)
        .png()
        .toFile(iconPath);

      if (!sizeConfig.skipTripleScale) {
        const xcodeIponeImageConfig = {
          size: `${sizeConfig.size}x${sizeConfig.size}`,
          idiom: 'iphone',
          filename: iconName,
          scale: '2x',
        };
        contentsConfig.images.push(xcodeIponeImageConfig);
      }

      if (
        !sizeConfig.skipInitialScale ||
        (sizeConfig.skipInitialScale && sizeConfig.skipTripleScale)
      ) {
        const xcodeIpadImageConfig = {
          size: `${sizeConfig.size}x${sizeConfig.size}`,
          idiom: 'ipad',
          filename: iconName,
          scale: '2x',
        };
        contentsConfig.images.push(xcodeIpadImageConfig);
      }
    }

    if (!sizeConfig.skipTripleScale) {
      const iconName = `icon-${sizeConfig.size}@3x.png`;
      const iconPath = `${iosAppIconsPath}/${iconName}`;
      await sharp(imagePath)
        .resize(sizeConfig.size * 3, sizeConfig.size * 3)
        .png()
        .toFile(iconPath);

      const xcodeIphoneImageConfig = {
        size: `${sizeConfig.size}x${sizeConfig.size}`,
        idiom: 'iphone',
        filename: iconName,
        scale: '3x',
      };
      contentsConfig.images.push(xcodeIphoneImageConfig);
    }
  }

  fs.writeFileSync(
    `${iosAppIconsPath}/Contents.json`,
    JSON.stringify(contentsConfig, null, 2),
  );
};

export const generateIosSplashIcons = async (imagePath: string) => {
  const splashIconDirExists = fs.existsSync(iosSplashIconPath);
  const iconSizes = [300, 600, 900];
  const contentsConfig = {
    images: [],
    info: {
      version: 1,
      author: 'xcode',
    },
  };

  if (!splashIconDirExists) {
    fs.mkdirSync(iosSplashIconPath);
  }

  let count = 1;
  for (const size of iconSizes) {
    const iconName = `splash-${size}.png`;
    const iconPath = `${iosSplashIconPath}/${iconName}`;

    await sharp(imagePath).resize(size, size).png().toFile(iconPath);

    const xcodeImageConfig = {
      scale: `${count}x`,
      idiom: 'universal',
      filename: iconName,
    };

    contentsConfig.images.push(xcodeImageConfig);

    count += 1;
  }

  fs.writeFileSync(
    `${iosSplashIconPath}/Contents.json`,
    JSON.stringify(contentsConfig, null, 2),
  );
};
