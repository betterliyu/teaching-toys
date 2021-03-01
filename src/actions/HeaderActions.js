import { DisplayMode } from '../constants/HeaderConstants';

const { ipcRenderer } = require('electron');

export const changeDisplayMode = (type) => () => {
  if (type === DisplayMode.Min) {
    ipcRenderer.send('min');
  } else if (type === DisplayMode.Max) {
    ipcRenderer.send('max');
  } else if (type === DisplayMode.Close) {
    ipcRenderer.send('close');
  }
};

export default {};
