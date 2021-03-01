import { DisplayMode } from '../constants/HeaderConstants';

const { ipcRenderer } = require('electron');

ipcRenderer.on('window-mode-changed', (e, mode) => {
  console.log(mode);
});

export const changeDisplayMode = (type) => () => {
  if (type === DisplayMode.Min) {
    ipcRenderer.send('change-window-mode', DisplayMode.Min);
  } else if (type === DisplayMode.Max) {
    ipcRenderer.send('change-window-mode', DisplayMode.Max);
  } else if (type === DisplayMode.Close) {
    ipcRenderer.send('change-window-mode', DisplayMode.Close);
  }
};

export default {};
