import shelljs from 'shelljs';

const runHuskyInit = () => {
  // check if git is initialized
  if (shelljs.exec('git rev-parse --is-inside-work-tree').code !== 0) {
    shelljs.echo('Initializing a new git');
    shelljs.exec('git init');

    shelljs.exec('git add .');

    shelljs.exec('git commit -m "Initial commit"');
  } else {
    shelljs.echo('Git is already initialized. Setting up husky');
  }

  shelljs.exec('yarn');
};

(function () {
  runHuskyInit();
})();
