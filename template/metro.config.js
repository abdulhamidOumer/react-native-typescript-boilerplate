const path = require('path');
const fs = require('fs');

const srcDirectory = path.resolve(__dirname, 'src');

const allSrcDirectories = fs
  .readdirSync(srcDirectory, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const extraNodeModules = {};

for (const src of allSrcDirectories) {
  extraNodeModules[src] = path.resolve(__dirname, 'src', src);
}

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },

  resolver: {
    extraNodeModules, // to use typescript base directory imorts.
  },
};
