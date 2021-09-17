import { NodePlopAPI } from 'node-plop';
import { componentGenerator } from './component';
import shell from 'shelljs';
import { sliceGenerator } from './slice';
interface PrettifyCustomActionData {
  path: string;
}

export default function ploper(plop: NodePlopAPI) {
  plop.setPrompt('directory', require('inquirer-directory'));
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('slice', sliceGenerator);

  plop.setActionType('prettify', (answers, config) => {
    const data = config?.data as PrettifyCustomActionData;
    shell.exec(`yarn run prettify -- "${data.path}"`, { silent: true });
    return '';
  });
}
