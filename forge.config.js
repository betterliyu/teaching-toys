const path = require('path');

module.exports = {
  packagerConfig: {
    ignore: [
      'config',
      'node_modules',
    ],
    icon: path.join(__dirname, '/favicon.ico'), // app
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'TeachingToys',
        setupIcon: path.join(__dirname, '/favicon.ico'), // setup exe
        iconUrl: path.join(__dirname, '/favicon.ico'), // control panel
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: [
        'darwin',
      ],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
