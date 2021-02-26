module.exports = {
  "packagerConfig": {},
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "teaching_toys"
      }
    },
    {
      "name": "@electron-forge/maker-zip",
      "platforms": [
        "darwin"
      ]
    },
    {
      "name": "@electron-forge/maker-deb",
      "config": {}
    },
    {
      "name": "@electron-forge/maker-rpm",
      "config": {}
    }
  ],
  plugins: [
    ['@electron-forge/plugin-webpack', {
      mainConfig: './config/webpack.main.prod.js',
      renderer: {
        config: './config/webpack.renderer.prod.js',
        entryPoints: [{
          html: './dist/index.html',
          js: './main.js',
          name: 'main_window'
        }]
      }
    }]
  ]
}