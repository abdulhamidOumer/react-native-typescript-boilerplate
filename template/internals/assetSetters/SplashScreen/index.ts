import { Actions, PlopGeneratorConfig } from 'node-plop';
import { baseImageAssetsPath } from '../paths';

export enum AssetSetterParams {
  assetPath = 'assetPath',
  platform = 'platform',
}

export enum Platofrms {
  ios = 'IOS',
  android = 'Android',
  both = 'Both',
}

type Answers = { [P in AssetSetterParams]: string };

export const splashScreenIconSetter: PlopGeneratorConfig = {
  description: 'Set your splash screen icon',
  prompts: [
    {
      type: 'list',
      name: AssetSetterParams.platform,
      message: 'Which platform do you want to save the splash screen icon too?',
      choices: [Platofrms.android, Platofrms.ios, Platofrms.both],
    },

    {
      type: 'filePath',
      name: AssetSetterParams.assetPath,
      message: 'Which image do you want to use as a splash screen icon?',
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
        type: 'generate-ios-splash',
        data: { fullIconPath },
        abortOnFail: true,
      });
    }

    if (platform === Platofrms.both || platform === Platofrms.android) {
      actions.push({
        type: 'generate-android-splash',
        data: { fullIconPath },
        abortOnFail: true,
      });
    }

    return actions;
  },
};
