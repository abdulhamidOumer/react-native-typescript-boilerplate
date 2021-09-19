import { Actions, PlopGeneratorConfig } from 'node-plop';
import { baseImageAssetsPath } from '../paths';

export enum AssetSetterParams {
  assetPath = 'assetPath',
  platform = 'platform',
  resizePercent = 'resizePercent',
}

export enum Platofrms {
  ios = 'IOS',
  android = 'Android',
  both = 'Both',
}

type Answers = { [P in AssetSetterParams]: string };

export const appIconSetter: PlopGeneratorConfig = {
  description: 'Set your app icon',
  prompts: [
    {
      type: 'list',
      name: AssetSetterParams.platform,
      message: 'Which platform do you want to save the icon too?',
      choices: [Platofrms.android, Platofrms.ios, Platofrms.both],
    },

    {
      type: 'filePath',
      name: AssetSetterParams.assetPath,
      message:
        'Which image do you want to use as an icon? (1024 X 1024 Recommended)',
      basePath: `${baseImageAssetsPath}`,
    } as any,
  ],
  actions: data => {
    const answers = data as Answers;
    const actions: Actions = [];

    const fullIconPath = `${baseImageAssetsPath}/${
      answers[AssetSetterParams.assetPath]
    }`;
    const platform = answers[AssetSetterParams.platform];

    if (platform === Platofrms.both || platform === Platofrms.ios) {
      actions.push({
        type: 'generate-ios',
        data: { fullIconPath },
        abortOnFail: true,
      });
    }

    if (platform === Platofrms.both || platform === Platofrms.android) {
      actions.push({
        type: 'generate-android',
        data: { fullIconPath },
        abortOnFail: true,
      });
    }

    return actions;
  },
};
